import { useState } from "react"

export function EventDemo(){

    const [uname, setUname] = useState('John');
    
    function handleNameChange(e){
        setUname(e.target.value);
    }

    return(
        <div className="container-fluid">
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={handleNameChange} value={uname} /></dd>
            </dl>
            <h3>Hello ! {uname}</h3>
        </div>
    )
}