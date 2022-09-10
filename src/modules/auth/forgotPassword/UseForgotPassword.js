import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { forgotPassword } from '../../../redux/actions/AuthAction';

export default function UseForgotPassword() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [server_error, setServerError] = useState({})

    const dispatch = useDispatch()


    const forgotPasswordHandler = () => {
        const creds = {
            email: email,
          }
      
        dispatch(forgotPassword(creds, setLoading, setServerError))
    }
    return [{ loading, email, setEmail, forgotPasswordHandler, server_error }]
}
