import { types } from "../types/types";

const initialState = {
  employees: [],
}

export const employeesReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.employeesLoad:
      return {
        employees: action.payload
      }
    case types.addEmployeeState:
      return {
        employees: [action.payload, ...state.employees]
      };
    default:
      return state;
  }
}

