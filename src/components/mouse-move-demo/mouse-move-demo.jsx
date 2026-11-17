import { useState } from "react"

export function MouseMoveDemo(){

    const [styleObject, setStyleObject] = useState({position:null, left:null, top:null});

    function handleMouseMove(e){
        setStyleObject({
            position: 'fixed',
            left: e.clientX + 'px',
            top: e.clientY + 'px'
        })
    }

    return(
        <div onMouseMove={handleMouseMove}>
           <div style={{height:'1000px'}}>
              <p>Move your mouse pointer to test</p>
           </div>
           <img src="flag.gif" style={styleObject} width="50" height="50" />
        </div>
    )
}