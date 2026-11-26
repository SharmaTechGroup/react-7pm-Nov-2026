import { useState } from "react"
import Login from "../login/login";
import { Weather } from "../weather/weather";

export function ConditionDemo(){

   
    const [user, setUser] = useState(null);
    const [isLoggedIn, setisLoggedIn] = useState(false);

    function handleNameChange(e){
        setUser(e.target.value);
    }

    function handleLoginClick(){
        sessionStorage.setItem('uname', user);
        setisLoggedIn(true);
    }
    function handleSignout(){
        sessionStorage.removeItem('uname');
        setisLoggedIn(false);
    }

    return(
        <div className="container-fluid">
            <h1>Conditional Rendering</h1>
            <header>
                <nav className="p-3 border border-1 d-flex justify-content-between">
                    <span className="fs-4 fw-bold">Amazon</span>
                    <div>
                        {
                            (isLoggedIn===true)?
                            <button onClick={handleSignout} className="btn btn-danger bi bi-person-fill"> {sessionStorage.getItem('uname')} Signout</button>
                            :
                            <div className="input-group">
                            <input onChange={handleNameChange} className="form-control" type="text" placeholder="User Name" />
                            <button onClick={handleLoginClick} className="btn btn-primary">Login</button>
                            </div>
                        }
                        
                        
                    </div>
                </nav>
            </header>
        </div>
    )
}