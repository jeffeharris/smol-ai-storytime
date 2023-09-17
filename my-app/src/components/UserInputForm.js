import React, { Component } from 'react';

class UserInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      favoriteAnimal: '',
      favoriteColor: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.generateStory(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <label>
          Age:
          <input type="text" name="age" onChange={this.handleChange} />
        </label>
        <label>
          Favorite Animal:
          <input type="text" name="favoriteAnimal" onChange={this.handleChange} />
        </label>
        <label>
          Favorite Color:
          <input type="text" name="favoriteColor" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Generate Story" />
      </form>
    );
  }
}

export default UserInputForm;