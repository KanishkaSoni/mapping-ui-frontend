import { Navigate } from 'react-router-dom'
 
export default function ProtectedRoute(props){

    console.log(typeof(localStorage.getItem('signIn')));

    if(localStorage.getItem('signIn') === "true"){
        return props.children;//i.e. the Home and the Faculty Components
    }
    else{
       return (<Navigate to='/' replace/>);
    }
}