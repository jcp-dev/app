import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addEmployeeToState, postNewEmployee } from '../../actions/employeesActions';
import { removeError, setError } from '../../actions/uiActions';
import { useForm } from '../../hooks/useForm';

const NewEmployee = () => {

  const dispatch = useDispatch();
  const { msgError } = useSelector(state => state.ui);


  const [formValues, handleInputChange, reset] = useForm({
    name: '',
    last_name: '',
    birthday: ''
  });

  const { name, last_name, birthday } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(postNewEmployee(formValues));
      dispatch(addEmployeeToState(formValues));
      reset();
    }
  }


  const isFormValid = () => {
    if (name.trim().length === 0 || last_name.trim().length === 0 || birthday.trim().length === 0) {
      dispatch(setError('All inputs are required'));
      return false;
    }
    dispatch(removeError())
    return true;
  }


  return (
    <div>
      {
        msgError &&
        (<div className="alert alert-danger" role="alert">
          {msgError}
        </div>)
      }
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input type="text" className="form-control" name='name' value={name} onChange={handleInputChange} placeholder="Enter a name" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Last Name</label>
          <input type="text" className="form-control" name='last_name' value={last_name} onChange={handleInputChange} placeholder="Last name" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Birthday</label>
          <input type="date" className="form-control" value={birthday} onChange={handleInputChange} name='birthday' />
        </div>

        <button className="btn btn-primary btn-block">Submit</button>
      </form>
    </div>
  )
}

export default NewEmployee
