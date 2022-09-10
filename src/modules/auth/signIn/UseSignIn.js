import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { doLogin } from '../../../redux/actions/AuthAction';

export default function UseSignIn() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [server_error, setServerError] = useState({})

    const dispatch = useDispatch()

    const doLoginUser = () => {
        dispatch(doLogin(email, password, navigate, setLoading, setServerError))
    }
    return [{ loading, email, password, setEmail, setPassword, doLoginUser, server_error }]
}
