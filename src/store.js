import loggerMiddleware from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

const ADD_DEPARTMENT = 'ADD_DEPARTMENT'
const ADD_EMPLOYEE = 'ADD_EMPLOYEE'
const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE'
const REMOVE_DEPARTMENT = 'REMOVE_DEPARTMENT'

export const addDepartment = obj => ({
    type: ADD_DEPARTMENT,
    obj
})

export const addEmployee = obj => ({
    type: ADD_EMPLOYEE,
    obj
})

export const deleteEmployee = id => ({
    type: DELETE_EMPLOYEE,
    id
})

export const removeDepartment = id => ({
    type: REMOVE_DEPARTMENT,
    id
})

const initialState = {
    departments: [],
    employees: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DEPARTMENT:
            const newDepartment = action.obj;
            return {...state, departments: [...state.departments, newDepartment]}
        case ADD_EMPLOYEE:
            const newEmployee = action.obj;
            return {...state, employees: [...state.employees, newEmployee]}
        case DELETE_EMPLOYEE:
            const filteredEmployees = state.employees.filter(e => e.id != action.id)
            return {...state, employees: filteredEmployees}
        case REMOVE_DEPARTMENT:
            const updatedEmployees = state.employees.map(e => e.id === action.id ? {...e, departmentId: null} : e)
            return {...state, employees: updatedEmployees}
        default:
            return state
        }
    };

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store