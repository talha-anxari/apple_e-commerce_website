import React from 'react'
import { Navigate } from 'react-router'

const ProtectedRouteForAdmin = ({children}) => {
    const user = JSON.parse(localStorage.getItem('users'))

    if(user?.role === 'admin'){
        return children
    }else{
        return <Navigate to="/signIn" />
    }
}

export default ProtectedRouteForAdmin
