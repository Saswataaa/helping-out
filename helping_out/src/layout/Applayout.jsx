import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"

export const Applayout = () =>{
    return (
        <>
        <h1 style={{fontWeight:"bolder", color:"#FFFFFF", textDecoration:"underline", textDecorationColor:"black"}}>Choose from below!</h1>
        <div>
            <NavLink to={"/bmi"}>
            <button>BMI Calculator</button>
            </NavLink>

            <NavLink to={"/form"} >
            <button>Contact Form</button>
            </NavLink>

            <NavLink to={"/counter"}>
            <button>Word Counter</button>
            </NavLink>
        </div>
        <Outlet/>
        </>
    )
}