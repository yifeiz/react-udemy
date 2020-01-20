import React from "react";

class SearchBar extends React.Component {
  state = { term: "jklj;k" };

  onInputChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
    // TODO: Make sure we call callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label> Video Search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
