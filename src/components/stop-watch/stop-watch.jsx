import { useRef, useState } from "react"

export function StopWatch(){

    const [ms, setMs] = useState(0);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);

    let thread = useRef(null);

    var milliSeconds = 0;
    var seconds = 0;
    var minutes = 0; 
    function Watch(){
        milliSeconds++;
        setMs(milliSeconds);
        if(milliSeconds===999){
            milliSeconds = 0;
            seconds++;
            setSec(seconds);
            if(seconds===59){
                seconds = 0;
                minutes++;
                setMin(minutes);
            }
        }
    }   

    function Start(){
       thread.current  = setInterval(Watch,0);
    }

    function StopClick(){
        clearInterval(thread.current);
    }

    return(
        <div className="container-fluid d-flex justify-content-center">
             <div>
                <div className="row mt-5 mb-2 border border-1 p-4 fs-4">
                <div className="col">
                    00
                </div>
                <div className="col">
                    :
                </div>
                <div className="col">
                    {min}
                </div>
                <div className="col">
                    :
                </div>
                <div className="col">
                    {sec}
                </div>
                <div className="col">
                    :
                </div>
                <div className="col">
                    {ms}
                </div>
            </div>
              <button onClick={Start} className="btn btn-primary">Start</button>
              <button onClick={StopClick} className="btn btn-danger mx-2">Stop</button>
             </div>
        </div>
    )
}