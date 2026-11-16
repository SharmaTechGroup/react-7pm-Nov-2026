import { useState } from "react"

export function EmiCalculator(){


    const [loanAmount, setLoanAmount] = useState(100000);
    const [loanTenure, setLoanTenure] = useState(1);
    const [rate, setRate] = useState(10.45);
    const [emi, setEmi] = useState(0);


    function handleAmountChange(e){
        setLoanAmount(e.target.value);
        CalculateEMI();
    }
    function handleTenureChange(e){
        setLoanTenure(e.target.value);
         CalculateEMI();
    }
    function handleRateChange(e){
        setRate(e.target.value);
         CalculateEMI();
    }

    function CalculateEMI(){
         let  P = parseInt(loanAmount);
         let  r = parseFloat(rate)/12/100;
         let  n = parseInt(loanTenure) * 12; 
         let EMI = P * r * (Math.pow(1+r,n)) / (Math.pow(1+r,n)) - 1;
         setEmi(EMI);
    }

    function handleCalculateClick(){
         CalculateEMI();
    }

    return(
        <div className="container-fluid bg-secondary" style={{height:'100vh'}}>
            <div className="h2 text-center text-white pt-3">Personal Loan EMI Calculator</div>
            <div className="row">
                <div className="card p-3 col m-2" style={{height:'500px'}}>
                    <div className="row mt-3">
                        <div className="col">
                            <label>Loan Amount</label>
                        </div>
                        <div className="col">
                            <input value={loanAmount} onChange={handleAmountChange} className="float-end" type="text" />
                        </div>
                    </div>
                    <div className="row mt-3 p-3">
                        <input type="range" onChange={handleAmountChange} value={loanAmount} className="form-range" min={100000} max={1000000} step={10000} />
                       <div>
                        <span className="float-start">&#8377; 1,00,000/- </span>
                        <span className="float-end">&#8377; 10,00,000/- </span>
                       </div>
                    </div>


                     <div className="row mt-3">
                        <div className="col">
                            <label>Loan Tenure</label>
                        </div>
                        <div className="col">
                            <input className="float-end" onChange={handleTenureChange} value={loanTenure} size={2} type="text" />
                        </div>
                    </div>
                    <div className="row mt-3 p-3">
                        <input type="range" onChange={handleTenureChange} value={loanTenure} className="form-range" min={1} max={7} step={1} />
                       <div>
                        <span className="float-start">1 Year </span>
                        <span className="float-end"> 7 Years </span>
                       </div>
                    </div>

                     <div className="row mt-3">
                        <div className="col">
                            <label>Interst Rate</label>
                        </div>
                        <div className="col">
                            <input className="float-end" onChange={handleRateChange} value={rate} size={4} type="text" />
                        </div>
                    </div>
                    <div className="row mt-3 p-3">
                        <input type="range" onChange={handleRateChange} value={rate} className="form-range" min={10.45} max={19.45} step={0.01} />
                       <div>
                        <span className="float-start"> 10.45% </span>
                        <span className="float-end"> 19.45% </span>
                       </div>
                    </div>

                    <button onClick={handleCalculateClick} className="btn btn-primary">Calculate</button>

                </div>
                <div className="card col m-2">
                    <div className="card-header">
                        <span className="fs-3 fw-bold">Your Monthly EMI</span>
                    </div>
                    <div className="card-body">
                        <span className="fs-1 fw-bold text-primary"> {emi.toLocaleString('en-in', {style:'currency', currency:'INR', minimumFractionDigits:0, maximumFractionDigits:0})}</span>
                    </div>
                </div>
            </div>  
        </div>
    )
}