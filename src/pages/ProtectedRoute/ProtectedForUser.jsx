import { Navigate } from "react-router";

export const ProtectedForUser = ({children}) => {

    const user = JSON.parse(localStorage.getItem('users'));

    if(user?.role === 'user' ){
        return children;
    }
    else{
        return <Navigate to="/signIn" />
    }
}

