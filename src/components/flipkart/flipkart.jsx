import { useEffect, useState } from "react"
import axios from "axios";

export function Flipkart(){

    const [product, setProduct] = useState({title:null, price:0, image:null, rating:{rate:0, ratings:0, reviews:0}, features:[]});

    function LoadData(){
        axios.get("product.json")
        .then(response=>{
             setProduct(response.data);
        })
    }

    useEffect(()=>{

            LoadData();

    },[])


    return(
        <div>
            <div className="mt-5 p-3 row">
                <div className="col-3">
                    <img src={product.image} width="100%" />
                </div>
                <div className="col-7">
                    <div className="fs-5 fw-bold">{product.title}</div>
                    <div className="mt-2">
                        <span className="badge bg-success text-white rounded"> {product.rating.rate} <span className="bi bi-star-fill"></span> </span>
                        <span className="fw-bold text-secondary ms-2">{product.rating.ratings.toLocaleString('en-in')} ratings & {product.rating.reviews.toLocaleString('en-in')} reviews</span>
                    </div>
                    <div className="mt-2">
                        <ul className="list-unstyled mt-4">
                            {
                                product.features.map(feature=><li className="my-3 bi bi-dot" key={feature}> {feature} </li>)
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-2">
                     <div className="fs-1 fw-bold">{product.price.toLocaleString('en-in',{style:'currency', currency:'INR', minimumFractionDigits:0, maximumFractionDigits:0})}</div>
                </div>
            </div>
        </div>
    )
}