import { useState, useEffect } from "react"
import moment from "moment";

export function DataBinding(){
    
    const [regEx] = useState(/^(?=.*[A-Z])\w{4,15}$/);   
    const [password] = useState('adMin123');

    return(
        <div className="container-fluid">
            <p> 
              {
                (password.match(regEx))? "Login Success": "Invalid Password at least 1 uppercase required"
              }    
             </p>
        </div>
    )
}