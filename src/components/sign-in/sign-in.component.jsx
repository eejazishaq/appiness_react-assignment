import React from "react";
import { compose } from 'redux'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { BrowserRouter as Router , withRouter } from 'react-router-dom'

import { connect } from "react-redux";
import { login } from "../../redux/login/login.actions";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      status: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password, this._onCompletion);
  };

  _onCompletion = status => {
    console.log("status", status);
    if (status == "Succuss") {
      this.props.history.push("/EmployeeList");
    }
    if (status == "Error") {
      this.setState({ status: "something went wrong..." });
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <span>Sign in with your email and password</span>
        <h4 style={{ color: "red" }}> {this.state.status}</h4>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="username"
            type="text"
            handleChange={this.handleChange}
            value={this.state.username}
            label="username"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
export default compose(
  withRouter,
  connect(mapStateToProps, { login })
)(SignIn);
