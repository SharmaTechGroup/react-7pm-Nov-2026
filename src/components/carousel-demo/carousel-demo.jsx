import axios from "axios";
import { useEffect, useRef, useState } from "react"


export function CarouselDemo(){

    const [recipie, setRecipe] = useState({id:0, name:null, image:null}); 
    const [status, setStatus] = useState('Slide Show - Manual');
    
    let recipieId = useRef(1);
    let thread = useRef(null);


    function LoadRecipieManually(id){
        axios.get(`https://dummyjson.com/recipes/${id}`)
        .then(response=>{
            setRecipe(response.data);
        })
    }

    function LoadRecipieAuto(){
        recipieId.current = recipieId.current + 1;
        LoadRecipieManually(recipieId.current);
    }

    function handlePlayClick(){
        thread.current =  setInterval(LoadRecipieAuto, 5000);
        setStatus('Slide Show - Running');
    }
    function handlePauseClick(){
        clearInterval(thread.current);
        setStatus('Slide Show - Paused');
    }

    function handleNextClick(){
        recipieId.current = recipieId.current + 1;
        LoadRecipieManually(recipieId.current);
    }
    function handlePrevClick(){
        recipieId.current = recipieId.current - 1;
        LoadRecipieManually(recipieId.current);
    }

    function handleSeekbarChange(e){
        recipieId.current = parseInt(e.target.value);
        LoadRecipieManually(recipieId.current);
    }

    useEffect(()=>{
        LoadRecipieManually(1);
    },[])

    return(
        <div className="d-flex justify-content-center">
            <div className="card mt-3 p-2 w-50">
                <div className="card-header text-center fw-bold">
                    <div className="fs-4">{recipie.name}</div>
                    <div>({status})</div>
                </div>
                <div className="card-body row">
                    <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                        <button onClick={handlePrevClick} className="btn btn-dark bi bi-chevron-left"></button>
                    </div>
                    <div className="col-10">
                        <img width="100%" src={recipie.image} height="400" />
                        <div className="mt-2">
                            <input onChange={handleSeekbarChange} type="range" min={1} max={30} value={recipieId.current} className="form-range" />
                        </div>
                    </div>
                    <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                        <button onClick={handleNextClick} className="btn btn-dark bi bi-chevron-right"></button>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button onClick={handlePlayClick} className="btn btn-success bi bi-play-fill"></button>
                    <button onClick={handlePauseClick} className="btn btn-warning mx-2 bi bi-pause-fill"></button>
                </div>
            </div>
        </div>
    )
}