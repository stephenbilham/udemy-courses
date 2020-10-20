import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {
      bacon: 1,
      cheese: 1,
      lettuce: 1,
      meat: 1
    }
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    let ingredients = {};
    for (let param of query.entries()) {
      console.log(param[1]);
      // ['lettuce' : '1']
      ingredients[param[0]] = +param[1];
    }
    console.log(ingredients);

    this.setState(prevState => {
      return {
        ...prevState,
        ingredients: ingredients
      };
    });
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutCancelledContinue = () => {
    this.props.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelledHandler={this.checkoutCancelledHandler}
          checkoutCancelledContinue={this.checkoutCancelledContinue}
        />
      </div>
    );
  }
}

export default Checkout;
