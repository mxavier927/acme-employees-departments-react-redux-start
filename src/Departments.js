import React from 'react';
import { connect } from 'react-redux';
import Department from './Department'

const Departments = props => {
  return (
    <ul className='departments'>
      <Department />
      {
        props.departments.map(department => {
          return (
            <Department key= {department.id} department= {department}/>
          );
        })
      }
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    departments: state.departments
  }
}

export default connect(
  mapStateToProps,
  null
)(Departments);

// 
