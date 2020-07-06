import React, { Component } from 'react';
import './SMSForm.css';

class SMSForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fullName: '',
          phoneNumber: '',
          address: '',
          message: {
            to: '',
            body: ''
          },
          submitting: false,
          error: false
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onHandleChange(event) {
        const name = event.target.getAttribute('name');
        this.setState({
          message: { ...this.state.message, [name]: event.target.value }
        });
    }

    handleInput = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })
    }
    
    onSubmit(event) {
        event.preventDefault();
        this.setState({ submitting: true });
        fetch('http://localhost:4000/api/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state.message)
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              this.setState({
                error: false,
                submitting: false,
                message: {
                  to: '',
                  body: ''
                }
              });
            } else {
              this.setState({
                error: true,
                submitting: false
              });
            }
        });
    }    

    render() {
        return (
          <form
            onSubmit={this.onSubmit}
            className={this.state.error ? 'error sms-form' : 'sms-form'}
          >
            <div>
              <label htmlFor="to">To:</label>
              <input
                 type="tel"
                 name="to"
                 id="to"
                 value={this.state.message.to}
                 onChange={this.onHandleChange}
              />
            </div>
            <div>
              <label htmlFor="body">Body:</label>
              <textarea 
                 name="body" 
                 id="body"
                 value={this.state.message.body}
                 onChange={this.onHandleChange}
              />
            </div>
            <div>
              <label htmlFor="body">Full Name:</label>
              <textarea 
                 name="fullName" 
                 id="body"
                 value={this.state.fullName}
                 onChange={(event) => this.handleInput(event)}
              />
            </div>
            <div>
              <label htmlFor="body">Phone Number:</label>
              <textarea 
                 name="phoneNumber" 
                 type="tel"
                 id="body"
                 value={this.state.phoneNumber}
                 onChange={(event) => this.handleInput(event)}
              />
            </div>
            <div>
              <label htmlFor="body">Address:</label>
              <textarea 
                 name="address" 
                 id="body"
                 value={this.state.address}
                 onChange={(event) => this.handleInput(event)}
              />
            </div>
            <button type="submit" disabled={this.state.submitting}>
              Send message
            </button>
          </form>
        );
      }
}

export default SMSForm;