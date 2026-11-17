import axios from "axios";
import { useEffect, useState } from "react"
import './mouse-over-demo.css';

export function MouseOverDemo(){


    const [images,setImages] = useState([{img_src:null}]);
    const [previewImage, setPreviewImage] = useState('m1.png');

    function LoadImages(){
        axios.get('mobiles.json')
        .then(response=>{
            setImages(response.data);
        })
    }

    function handleMouseOver(e){
        setPreviewImage(e.target.src);
    }

    useEffect(()=>{
        LoadImages();
    },[])

    return(
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-1">
                    {
                        images.map(image=> <img onMouseOver={handleMouseOver} className="my-3" key={image} src={image.img_src} width="100%" height="100"/>)
                    }
                </div>
                <div className="col-11">
                    <img width="400" src={previewImage} height="400" />
                </div>
            </div>
        </div>
    )
}