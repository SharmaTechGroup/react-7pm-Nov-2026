import { useRef, useState } from "react"

export function DebounceDemo(){

    const [volume, setVolume] = useState(1);
    const [msg, setMsg] = useState(null);
    let thread = useRef(null);

    function Level1(){
        setVolume(30);
        setMsg('Volume 30%');
    }
    function Level2(){
        setVolume(70);
        setMsg('Volume 70%');
    }
    function Level3(){
        setVolume(100);
        setMsg('Volume Full');
    }

    function VolumeClick(){
        setTimeout(Level1, 4000);
        thread.current = setTimeout(Level2, 8000);
        setTimeout(Level3,12000);
    }

    function CancelClick(){
        alert('Level 2 canceled');
        clearTimeout(thread.current);
    }

    return(
        <div className="container-fluid">

            <button onClick={VolumeClick} className="btn mt-4 btn-primary bi bi-volume-up-fill"></button>
            <button onClick={CancelClick} className="btn btn-danger mt-4 mx-2">Cancel Level2</button>
            <input type="range" min={1} max={100} value={volume} className="form-range" />
            <p>{msg}</p>
        </div>
    )
}