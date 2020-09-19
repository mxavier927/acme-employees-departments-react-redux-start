import React from 'react';
import { connect } from 'react-redux';
import Employee from './Employee';

const Employees = props  => {
  return (
      <ul>
        {
          !props.department ? props.employees.filter( employee => !employee.departmentId)
          .map( employee => 
          <Employee employee={ employee } key={ employee.id }/>) 
          :
          props.employees
          .filter( employee => employee.departmentId === props.department.id)
          .map( employee => 
          <Employee employee={ employee } key={ employee.id }/>)
        }
      </ul>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    employees: state.employees,
    department: ownProps.department
  }
}

export default connect(
  mapStateToProps,
  null
)(Employees);
