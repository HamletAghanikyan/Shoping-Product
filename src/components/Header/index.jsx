import { NavLink } from "react-router-dom"
import './style.scss'

export const Header = () => {
    return <div className="all-menu">
        <div className="menu">
            <a href=""><h1>MULTI <span>SHOP</span></h1></a>
            <ul className="menu-title">
                <li><NavLink to={'/home'}>Home</NavLink></li>
                <li><NavLink to={'/shop'}>Shop</NavLink></li>
                <li><NavLink to={'/shop-details'}>Shop detail</NavLink></li>
                <li><NavLink to={'/shoping-card'}>Shoping-Card</NavLink></li>
                <li><NavLink to={'/checkout'}>Checkout</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
            </ul>
        </div>
        <div className="menu-right">
            <ul className="G-flex">
                <li className="G-align-center">
                    <span className="icon-heart"></span>
                    <a href="">0</a>
                </li>
                <li className="G-align-center">
                    <span className="icon-cart"></span>
                    <a href="">0</a>
                </li>
            </ul>
        </div>
    </div>
}