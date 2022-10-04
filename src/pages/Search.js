import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: "",
    };
  }

  handleCardNameChange = (event) => {
    this.setState({
      cardName: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Search</h1>
        <p>Find a card using Scryfall</p>
        <form>
          <label>
            Card Name:
            <input
              type="text"
              value={this.state.cardName}
              onChange={this.handleCardNameChange}
            />
          </label>
          <label>
            Set Name:
            <input type="text" />
          </label>
        </form>
      </div>
    );
  }
}

export default Search;
