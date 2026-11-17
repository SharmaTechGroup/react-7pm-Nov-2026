import { useState } from 'react';
import './mouse-down-demo.css';

export function MouseDownDemo(){

    const [animationObject, setAnimationObject] = useState({animationName:'Spin', animationDuration:'5s', animationIterationCount:'infinite', animationTimingFunction:'linear'})

    function handleMouseDown(){
        setAnimationObject({
            animationName: 'Spin',
            animationDuration:'1s',
            animationTimingFunction:'linear',
            animationIterationCount:'infinite'
        })
    }
    function handleMouseUp(){
        setAnimationObject({
            animationName: 'Spin',
            animationDuration:'5s',
            animationTimingFunction:'linear',
            animationIterationCount:'infinite'
        })
    }

    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <img src="react.svg" onMouseDown={handleMouseDown}  onMouseUp={handleMouseUp} style={animationObject} width="200" height="200" />
        </div>
    )
}