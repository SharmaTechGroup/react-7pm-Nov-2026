import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react"

export function Weather(){


    const [weatherObj, setWeatherObj] = useState({name:null, main:{temp:0, humidity:0}, wind:{speed:0}, weather:[{description:null}] });
    const [today] = useState(new Date());
    const [cityName, setCityName] = useState('Delhi');
    const [txtCityName, setTxtCityName] = useState(null);

    function LoadWeatherData(){
        let api_key = "f2b822a7d4639704800c2645720c6dbc";
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`)
        .then(response=>{
             setWeatherObj(response.data);
        })
    }

    function handleSearchChange(e){
        setTxtCityName(e.target.value);
    }

    function handleSearchClick(){
        setCityName(txtCityName);
        LoadWeatherData();
    }

    function PopularCityClick(city){
        setCityName(city);
        LoadWeatherData();
    }

    useEffect(()=>{
        LoadWeatherData();
    },[cityName])


    return(
        <div className="container-fluid d-flex justify-content-center align-items-center bg-secondary" style={{height:'100vh'}}>
            <div className="card bg-light w-50 p-2" style={{height:'400px'}}>
                <div className="card-header d-flex justify-content-between align-items-center">
                    <div className="fs-4 fw-bold">{weatherObj.name}</div>
                    <div className="input-group w-50">
                        <input type="text" onChange={handleSearchChange} className="form-control"  placeholder="Search by city name"/>
                        <button onClick={handleSearchClick} className="btn btn-warning bi bi-search"></button>
                    </div>
                    <div>
                       {moment(today).format('ddd DD MMM, YYYY')}
                    </div>
                </div>
                <div className="card-body">
                    <div className="my-2">
                        <button name="London" onClick={()=> PopularCityClick('London')} className="btn btn-link">London</button>
                        <button name="Delhi" onClick={()=> PopularCityClick('Delhi')} className="btn btn-link">Delhi</button>
                        <button name="Hyderabad" onClick={()=> PopularCityClick('Hyderabad')} className="btn btn-link">Hyderabad</button>
                        <button name="Mumbai" onClick={()=> PopularCityClick('Mumbai')} className="btn btn-link">Mumbai</button>
                    </div>
                    <div className="fs-1 fw-bold">{weatherObj.main.temp.toFixed(0)}&deg;C</div>
                    <div className="fs-5 fst-italic"> {weatherObj.weather[0].description} </div>
                </div>
                <div className="card-footer d-flex">
                    <div className="bg-dark mx-4 text-white rounded p-3" style={{height:'60px', width:'100px'}}>
                        {weatherObj.main.humidity} <span className="bi bi-droplet-fill"></span>
                    </div>
                    <div className="bg-dark text-white rounded p-3" style={{height:'60px', width:'100px'}}>
                        {weatherObj.wind.speed} <span className="bi bi-wind"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}