import React from 'react';
import validator from 'validator';

import { useDispatch, useSelector } from 'react-redux';
import { startLoginEmailPassword } from '../../actions/authActions';
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/uiActions';

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const { ui: { loading } } = useSelector(state => state);
  const { msgError } = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startLoginEmailPassword(email, password));
    }
  }

  const blockAction = (e) => {
    e.preventDefault()
  };

  const blockCopy = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
  }

  const isFormValid = () => {
    if (email.trim().length === 0) {
      dispatch(setError('Correo Requerido'));
      return false;
    }
    if (!validator.isEmail(email)) {
      dispatch(setError('Email no valido'));
      return false
    }
    dispatch(removeError())
    return true;
  }



  return (
    <>
      <h3 className="auth__title">Login</h3>
      {
        msgError &&
        (< div className="auth__alert-error" > {msgError}</ div>)
      }
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
          onCopy={blockCopy}
          onPaste={blockAction}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
          onCopy={blockCopy}
          onPaste={blockAction}
        />
        <button
          disabled={loading}
          type="submit"
          className="btn btn-primary btn-block"
        >
          Login
                </button>
      </form>
    </>
  )
}
