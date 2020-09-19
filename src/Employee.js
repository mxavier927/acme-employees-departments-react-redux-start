import React from 'react';
import { connect } from 'react-redux';
import { deleteEmployee, removeDepartment } from "./store";

const Employee = (props)=> {
  return (
    <li key={ props.employee.id }>
      { props.employee.name }
      <button onClick = {() => props.deleteEmployee(props.employee.id)}>x</button>
      {
      props.employee.departmentId ?
      <button onClick = {() => props.removeDepartment(props.employee.id)}>Remove From Department</button>
      : null
      }
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    employee: ownProps.employee
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteEmployee: id => dispatch(deleteEmployee(id)),
    removeDepartment: id => dispatch(removeDepartment(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employee);
