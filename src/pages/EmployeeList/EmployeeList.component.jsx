import React from 'react';
import { connect } from "react-redux";

import ItemList from '../../components/itemList/ItemList.component';

import './EmployeeList.styles.scss';

const EmployeeList = (props) => (
  <div className='employeeList'>
    <h3>Hi {props.login.isLogin && props.login.userName}, Welcome to Employee List pages</h3>
    <ItemList />
  </div>
);

const mapStateToProps = state => {
  return {
    login: state.login
  };
};

export default connect(mapStateToProps)(EmployeeList);
