import axios from "axios";
import { useEffect, useState } from "react"


export function KeyDemo(){

    const [users, setUsers] = useState([{user_name:null}]);
    const [msg, setMsg] = useState(null);
    const [errorClass, setErrorClass] = useState(null);
    const [progressWidth, setProgressWidth] = useState({width:null});
    const [progressClass, setProgressClass] = useState(null);
    const [progressMsg, setProgressMsg] = useState(null);
    const [pan, setPan] = useState(null);
    const [panMsg, setPanMsg] = useState(null);
    const [clipMsg, setClipMsg] = useState(null);

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

    function handlePasswordChange(e){
        if(e.target.value.match(/^(?=.*[A-Z])\w{4,15}$/)){
            setProgressMsg('Strong');
            setProgressWidth({width: '100%'});
            setProgressClass('progress-bar text-white progress-bar-striped progress-bar-animated bg-success');
        } else {
            if(e.target.value.length<4){
                setProgressMsg('Poor');
                setProgressWidth({width: '40%'});
                setProgressClass('progress-bar text-white progress-bar-striped progress-bar-animated bg-danger');
            } else {
                setProgressMsg('Weak');
                setProgressWidth({width: '70%'});
                setProgressClass('progress-bar text-white progress-bar-striped progress-bar-animated bg-warning');
            }
        }
    }

    function handlePanFocus(){
        setPanMsg('eg: BVVPQ11HS');
    }
    function handlePanBlur(){
        setPanMsg('');
        setPan(pan.toUpperCase());
    }

    function handlePanChange(e){
        setPan(e.target.value);
    }

    function handleMobileCopy(e){
        setClipMsg(`Mobile ${e.target.value} Copied`);
    }

    useEffect(()=>{
        LoadUsers();
    },[])

    return(
        <div className="container-fluid">
            <h1>Register New User</h1>
            <dl className="w-25">
                <dt>User Name</dt>
                <dd><input className="form-control" type="text" onKeyUp={handleKeyUp}  /></dd>
                <dd className={errorClass}>{msg}</dd>
                <dt>Password</dt>
                <dd><input onKeyUp={handlePasswordChange} className="form-control" type="password"  /> </dd>
                <dd className="progress">
                   <div style={progressWidth} className={progressClass}>
                        {progressMsg}
                   </div>
                </dd>
                <dt>Your PAN Number</dt>
                <dd><input type="text" onChange={handlePanChange} onFocus={handlePanFocus} onBlur={handlePanBlur} value={pan} className="form-control" /></dd>
                <dd>{panMsg}</dd>
                <dt>Mobile</dt>
                <dd><input type="text" onCopy={handleMobileCopy} className="form-control" value="+919876543211" /></dd>
                <dd>{clipMsg}</dd>
            </dl>
        </div>
    )
}