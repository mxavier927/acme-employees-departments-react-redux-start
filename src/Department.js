import React from 'react';
import { connect } from 'react-redux';
import Employees from './Employees';

const Department = props  => {
    return (
      <li>
        <span className='department-title'>
          { 
            props.department ? props.department.name : 'No Department' } 
        </span>
        {
          props.department ?
          <Employees department={ props.department } />
          :
          <Employees />
        }
      </li>
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
)(Department);