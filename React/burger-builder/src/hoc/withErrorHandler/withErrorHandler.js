import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../hoc/Aux/Aux";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentWillMount = () => {
      this.reqInterceptors = axios.interceptors.request.use(req => {
        // this just refers to the class. this was new to me can assign like this so we can unmount
        this.setState({ error: null }); // clears request if any prior
        return req;
      });

      this.resInterceptors = axios.interceptors.response.use(
        res => res, //shortest way to return a response not using it
        error => {
          this.setState({ error: error }); // sets new request
        }
      );
    };

    componentWillUnmount = () => {
      //   console.log("will unmount", this.reqInterceptors, this.resInterceptors);
      axios.interceptors.request.eject(this.reqInterceptors); // ref to the mounted
      axios.interceptors.request.eject(this.resInterceptors);
    };

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />;
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
