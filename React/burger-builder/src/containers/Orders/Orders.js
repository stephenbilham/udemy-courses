import React, { Component } from "react";
import axios from "../../axios-orders";
import Order from "../../components/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount = () => {
    axios
      .get("/orders.json")
      .then(response => {
        // turns object into an array
        const fetchedOrders = [];
        for (let key in response.data) {
          // console.log(key); //unique id
          // console.log(response.data[key]); // each order
          fetchedOrders.push({ ...response.data[key], id: key });
        }

        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };
  render() {
    return (
      <div>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={parseInt(order.price).toFixed(2)}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
