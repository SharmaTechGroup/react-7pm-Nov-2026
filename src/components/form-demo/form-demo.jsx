import { useRef, useState } from "react"

export function FormDemo(){

    let nameRef = useRef(null);
    let ageRef = useRef(0);
    let cityRef = useRef(null);
    
    function handleSubmit(e){
        e.preventDefault();
        console.log({UserName:nameRef.current.value, Age:parseInt(ageRef.current.value), City: cityRef.current.value});
    }

    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" ref={nameRef} name="UserName" /></dd>
                    <dt>Age</dt>
                    <dd><input type="number" ref={ageRef} name="Age" /></dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" ref={cityRef}>
                            <option>Select City</option>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
}