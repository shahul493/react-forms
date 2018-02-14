import React, { Component } from 'react';
import LoginPage from './login_page';
import Form from './sample_form';

export default class App extends Component {
  render() {
    return (
      <div>
        <LoginPage />
        <Form />
      </div>
    );
  }
}
