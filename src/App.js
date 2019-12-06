import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import DashboardPage from "./pages/dashBoardPage/dashboardPage.component";
import EmployeeList from "./pages/EmployeeList/EmployeeList.component";
import SignInCom from "./pages/sign-in/sign-in.component";

import Header from "./components/header/header.component";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/EmployeeList" component={EmployeeList} />
          <Route exact path="/signin" component={SignInCom} />
        </Switch>
      </div>
    );
  }
}

export default App;
