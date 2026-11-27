import { createContext, useContext, useState } from "react"

let UserContext = createContext(null);

export function Level2(){
    let context = useContext(UserContext);
    return(
        <div className="p-4 bg-warning text-danger">
            <h4>Level-2</h4>
            <p>{context}</p>
        </div>
    )
}

export function Level1(){
    let context = useContext(UserContext);
    return(
        <div className="p-4 bg-danger text-white">
            <h4>Level-1</h4>
            <p>{context}</p>
            <Level2 />
        </div>
    )
}


export function ContextDemo(){
   
    const [user,setUser] = useState(null);
    function handleNameChange(e){
        setUser(e.target.value)
    }
    return(
        <div className="bg-dark p-4 text-white">
            <h2>Parent Component <input type="text" onChange={handleNameChange} /> </h2>
            <UserContext value={user}>
                <Level1 />
            </UserContext>
        </div>
    )
}