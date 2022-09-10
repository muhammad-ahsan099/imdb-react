import { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { createAccount } from '../../../redux/actions/AuthAction';

export default function UseCreateAccount() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false)
  const [server_error, setServerError] = useState({})
  const [values, setValues] = useState({
    password: '',
    confirmPassword: '',
    nameErr: false,
    emailErr: false,
    passwordErr: false,
    confirmPasswordErr: false,
    passwordNotMatch: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const signupHandler =  () => {
      const creds = {
        email: email,
        name: userName,
        password: values.password,
        password2: values.confirmPassword,
      }
      dispatch(createAccount(creds, navigate, setLoading, setServerError))
  }

  // server_error?.filter((err)=> {
  //   if(err?.email) {
  //     setValues({ ...values, emailErr: true });
  //   }
  //   if(err?.name) {
  //     setValues({ ...values, nameErr: true });
  //   }
  //   if(err?.password) {
  //     setValues({ ...values, passwordErr: true });
  //   }
  //   if(err?.password2){
  //     setValues({ ...values, confirmPasswordErr: true });
  //   }
  // })


  return [{ values, loading, handleChange, handleClickShowPassword, email, setEmail, userName, setUserName, signupHandler, server_error }]
}
