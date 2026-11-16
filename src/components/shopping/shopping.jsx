import axios from "axios";
import { useEffect, useState } from "react"

export function Shopping(){


    const [categories, setCategories] = useState([{slug:null, name:null, url:null}]);
    const [productData, setProductData] = useState({products:[{id:0, title:null, thumbnail:null, price:0, category:null}]});

    function LoadCategories(){
        axios.get(`https://dummyjson.com/products/categories`)
        .then(response=>{
            setCategories(response.data);
        })
    }

    function LoadProducts(){
        axios.get(`https://dummyjson.com/products`)
        .then(response=>{
            setProductData(response.data);
        })
    }


    useEffect(()=>{
        LoadCategories();
        LoadProducts();
    },[])

    return(
        <div className="container-fluid">
            <header className="p-2 border border-1 bg-light d-flex justify-content-between align-items-center">
                <span className="bi bi-bag-fill fs-3 fw-bold"> Dummy Store</span>
                <div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Eg: brands, products" />
                        <button className="btn btn-warning bi bi-search"></button>
                    </div>
                </div>
                <button className="btn btn-warning bi bi-cart4"></button>
            </header>
            <section className="mt-3 row">
                <nav className="col-3 overflow-auto" style={{height:'500px'}}>
                  <ul className="list-group mt-2">
                    {
                        categories.map(category=><li key={category.slug} className="list-group-item my-1 list-group-item-warning"> {category.name} </li>)
                    }
                  </ul>
                </nav>
                <main className="col-9 d-flex flex-wrap flex-row overflow-auto" style={{height:'500px'}}>
                    {
                       productData.products.map(product=>
                         <div className="card m-2 p-2" style={{width:'200px'}} key={product.id}>
                            <img className="card-img-top" src={product.thumbnail} height="100" />
                            <div className="card-header overflow-auto" style={{height:'100px'}}>
                                {product.title}
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Category</dt>
                                    <dd>{product.category}</dd>
                                    <dt>Price</dt>
                                    <dd>{product.price}</dd>
                                </dl>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-warning w-100 bi bi-cart4">Add to Cart</button>
                            </div>
                         </div>
                       )
                    }
                </main>
            </section>
        </div>
    )
}