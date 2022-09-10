import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { doLogin } from '../../../redux/actions/AuthAction';

export default function UseResetPassword() {
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [loading, setLoading] = useState(false)
    const [server_error, setServerError] = useState({})

    const dispatch = useDispatch()


    const resetHandler = () => {
        // dispatch(doLogin(email, password, navigate, setLoading, setServerError))
    }
    return [{ loading, password, password2, setPassword,setPassword2, resetHandler, server_error }]
}
