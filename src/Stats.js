import React from 'react';
import { connect } from 'react-redux';

const Stats = props => {
  console.log(props.employees.length)
  return (
    <p>{ props.employees.length } Total Employees</p>
  );
};

const mapStateToProps = state => {
  return {
    employees: state.employees
  }
}

export default connect(
  mapStateToProps,
  null
)(Stats);