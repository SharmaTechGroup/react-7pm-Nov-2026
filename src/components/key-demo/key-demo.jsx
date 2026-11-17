import axios from "axios";
import { useEffect, useState } from "react"


export function KeyDemo(){

    const [users, setUsers] = useState([{user_name:null}]);
    const [msg, setMsg] = useState(null);
    const [errorClass, setErrorClass] = useState(null);

    function LoadUsers(){
        axios.get('users.json')
        .then(response=>{
            setUsers(response.data);
        })
    }
    function handleKeyUp(e){
        let user = users.find(item => item.user_name===e.target.value);
        if(user){
            setMsg('User Name Taken - Try Another');
            setErrorClass('text-danger');
        } else {
            setMsg('User Name Available');
            setErrorClass('text-success');
        }
    }

    useEffect(()=>{
        LoadUsers();
    },[])

    return(
        <div className="container-fluid">
            <h1>Register New User</h1>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onKeyUp={handleKeyUp}  /></dd>
                <dd className={errorClass}>{msg}</dd>
            </dl>
        </div>
    )
}