import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";

import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import styles from "./ContactData.module.css";
import input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP Code"
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "fastest" },
            { value: "cheapest", displayValue: "cheapest" }
          ]
        },
        value: "fastest",
        valid: true,
        validation: {},
        touched: false,
        formValid: false
      }
    },
    loading: false
  };

  checkValidity = (value, rules) => {
    let formIsValid = true;
    if (rules.required) {
      formIsValid = value.trim() !== "" && formIsValid;
    }

    if (rules.minLength) {
      formIsValid = value.length >= rules.minLength && formIsValid;
    }

    if (rules.maxLength) {
      formIsValid = value.length <= rules.maxLength && formIsValid;
    }

    return formIsValid;
  };

  orderHandler = e => {
    e.preventDefault();
    this.setState({ loading: true });

    const formData = {};

    for (let formElementIdentfier in this.state.orderForm) {
      formData[formElementIdentfier] = this.state.orderForm[
        formElementIdentfier
      ].value;
      // this names an object of {name: "value"} I do get confused on why you can set data[to its param like this but you can]
    }

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  inputChangedHandler = (e, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };

    const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };
    updatedFormElement.value = e.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;

    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, formValid: formIsValid });
  };

  render() {
    let formElementsArray = [];

    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    //  { <!-- <Input elementType="" elementConfig="" value="" /> -->}

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            invalid={!formElement.config.valid}
            touched={formElement.config.touched}
            shouldValidate={formElement.config.validation}
            value={formElement.config.value}
            changed={e => this.inputChangedHandler(e, formElement.id)}
          />
        ))}
        <Button btnType="Success" disabled={!this.state.formValid}>
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={styles.ContactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
