import React, { Component } from 'react';
import sorry from '../assets/sorry.png';

class ErrorBoundary extends Component {
  state = {
    error: false
  };
  style = {
    marginTop: '10px',
    fontSize: '20px',
  }
  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
    console.log({error, info});
  }
  render() {
    if (this.state.error) {
      return (
        <div>
          <img src={sorry} alt="error" width="100%" />
          <p style={this.style}>Something went wrong...</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;