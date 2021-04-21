import Swal from 'sweetalert2'
import { firebase } from '../firebase/firebase-config';
import { types } from "../types/types"
import { finishLoading, startLoading } from './uiActions'

export const startLoginEmailPassword = (email, password) => {

  return (dispatch) => {
    dispatch(startLoading());
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName))
        dispatch(finishLoading());
      }).catch(err => {
        dispatch(finishLoading());
        Swal.fire('Error', err.message, 'error');
      });
  }
}


export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName
  }
})

export const startLogOut = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout())
  }
}

export const logout = () => ({
  type: types.logout
})




