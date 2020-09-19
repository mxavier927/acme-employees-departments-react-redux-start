import React from 'react';
import { connect } from "react-redux";
import { addDepartment, addEmployee } from "./store";

import axios from 'axios';

import Departments from './Departments';
import Stats from './Stats';

class App extends React.Component{
  async componentDidMount(){
    const responses = await Promise.all([
      axios.get('/api/employees'),
      axios.get('/api/departments'),
    ]);
      const employees = responses[0].data;
      employees.forEach(employee => this.props.addEmployee(employee))
      const departments= responses[1].data
      departments.forEach(department => this.props.addDepartment(department))
  }
  render(){
    return (
      <div>
        <h1>Acme Employees And Departments</h1>
        <Stats />
        <Departments />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addEmployee: employee => dispatch(addEmployee(employee)),
    addDepartment: department => dispatch(addDepartment(department))
  }
}

export default connect (
  null,
  mapDispatchToProps
)(App);