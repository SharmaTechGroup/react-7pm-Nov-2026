import "./login.css";

function Login(){
    return(
         <div className="d-flex justify-content-center mt-3">
            <form className="form-container alert alert-dismissible alert-warning">
             <h4 className="bi bi-person-fill"> User Login</h4>
             <button className="btn btn-close" data-bs-dismiss="alert"></button>
             <dl>
                <dt>User Name</dt>
                <dd><input type="text" className="form-control" /></dd>
                <dt>Password</dt>
                <dd><input type="password" className="form-control" /></dd>
             </dl>
             <button className="btn btn-warning w-100">Login</button>
         </form>
         </div>
    )
}

export default Login;