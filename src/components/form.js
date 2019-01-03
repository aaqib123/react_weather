import React, { Component } from "react";

class Forms extends Component {
  state = {};
  render() {
    return (
      <form id="cityForm" onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="country" placeholder="Country" />
        <button>Get Weather. </button>
      </form>
    );
  }
}

export default Forms;
