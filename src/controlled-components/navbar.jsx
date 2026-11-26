
export function Navbar(props){
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
}