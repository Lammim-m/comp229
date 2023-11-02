import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      description: '',
      quantity: '',
      price: '',
      quantityOptions: [1, 2, 3, 4, 5],
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', this.state);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      description: '',
      quantity: '',
      price: '',
    });

  };

  render() {
    return (
      <div>
        <h1>Please Enter your Details</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Quantity:</label>
            <select
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
            >
              <option value="">...</option>
              {this.state.quantityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
            <button
              type="button"
              onClick={() => {
                if (window.confirm('Are you sure you want to exit the browser?')) {

                  window.close();
                }
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
