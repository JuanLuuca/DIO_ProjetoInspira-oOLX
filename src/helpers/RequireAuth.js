import { doLogout, isLogged } from '../helpers/AuthHandler';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({children}) => {
   
    const isAuth = isLogged();

    if(isAuth === true) {
        return children;
    } else {
       
        return <Navigate to="/signin"/>;
    }
}