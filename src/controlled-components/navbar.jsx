
export function Navbar(props){
    if(props.layout==="navbar"){
        return(
        <nav className={`border ${props.theme} border-1 p-3 d-flex align-items-center justify-content-between`}>
            <div>
                <span className={`fs-4 fw-bold ${props.brandLogo} `}> {props.brandName} </span>
            </div>
            <div>
                {
                    props.navItems.map(item=> <span className="mx-4" key={item}> {item.toUpperCase()} </span>)
                }
            </div>
            <div>
                <span className="bi bi-person-fill"></span>
            </div>
        </nav>
        )
    } else {
        return(
            <nav className="d-flex flex-column" style={{width:'250px'}}>
                <div>
                <span className={`fs-4 fw-bold ${props.brandLogo} `}> {props.brandName} </span>
                </div>
                <ul className="list-group mt-3">
                  {
                    props.navItems.map(item=> <li key={item} className="list-group-item my-2 list-group-item-danger"> {item.toUpperCase()} </li>)
                  }
                </ul>
                <button className="btn btn-dark bi bi-person-fill"></button>
            </nav>
        )
    }
}