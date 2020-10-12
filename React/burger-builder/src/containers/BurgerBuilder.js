import React, { Component } from "react";

import Aux from "../../src/hoc/Aux/Aux";
import Burger from "../../src/components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls/BuildControls";

import Modal from "../components/UI/Modal/Modal";
import OrderSummary from "../components/Burger/OrderSummary/OrderSummary";
import axios from "../axios-orders";

const INGREDIENT_PRICES = {
  lettuce: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    isOrderReady: false,
    purchasing: false
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updateOrderStatus(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;

    if (updatedIngredients[type] < 0) {
      return;
    }

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updateOrderStatus(updatedIngredients);
  };

  updateOrderStatus(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ isOrderReady: sum > 0 });
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  modalClosed = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Stephen Bilham",
        address: {
          street: "Churchwood Dr",
          zipCode: 92109,
          country: "USA"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.modalClosed}>
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseContinueHandler={this.purchaseContinueHandler}
            modalClosed={this.modalClosed}
            totalPrice={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredientHandler={this.addIngredientHandler}
          disabledInfo={disabledInfo}
          removeIngredientHandler={this.removeIngredientHandler}
          totalPrice={this.state.totalPrice}
          isOrderReady={this.state.isOrderReady}
          purchaseHandler={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
