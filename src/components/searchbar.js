import React, { Component } from "react";
import "../Style/style.css";

class searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  render() {
    return (
      <div className="Search-Bar">
        <input onChange={event => this.onInputChange(event.target.value)} />
        <div>Value is : {this.state.term}</div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term: term });
    this.props.onSearchTerm(term);
  }
}

export default searchbar;
