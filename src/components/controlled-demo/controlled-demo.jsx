import { useState } from "react"
import { Navbar } from "../../controlled-components/navbar"
import { DataGrid } from "../../controlled-components/data-grid"

export function ControlledDemo(){

    const [employees] = useState([
        {FirstName:'Raj', LastName:'Kumar', Designation:'Manager'},
        {FirstName:'Kiran', LastName:'Rao', Designation:'Developer'},
    ])

    return(
        <div className="container-fluid">
            <h3>Shopping</h3>
            <Navbar layout="sidebar" theme='bg-dark text-white' brandName='Shopping' brandLogo='bi bi-bag-fill' navItems={['Home', 'Shop', 'Offers', 'Brands', 'Business']} />
            <h3>Weather</h3>
            <Navbar layout="navbar" theme='bg-danger text-white' brandName='Weather App' brandLogo='bi bi-cloud-drizzle' navItems={['City', 'State', 'Country', 'Stats', 'History', 'Forecast']} />
            <h3>Employee Data</h3>
            <DataGrid caption='Employee Details' data={employees} />
            <h3>Products Data</h3>
            <DataGrid caption='Product Details' data={[{id:1, name:'TV', price:45000, rating:4.5}]} />
        </div>
    )
}