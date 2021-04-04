import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './header.css'
import DisplayIMG from  '../icons/Avatarface.png'
const Header = () => {
    const [userData] = useContext(UserContext)
    console.log(userData)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light header">
                <div className="logo">
                    <Link to="/home" className="fs-2 text-decoration-none" >Human bazar</Link>
                </div>
            <div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav navItem">
                    <Link to="/home" className="link fs-4">Home</Link>
                    <Link to="/orders" className="link fs-4">Orders</Link>
                    <Link to="/admin"  className="link fs-4">Admin</Link>
                    <Link to="/deals"  className="link fs-4">Deals</Link>
                    {userData.email ? <img src={DisplayIMG} style={{width:"50px"}} alt=""/>:
                    <Link to="/login" className="link fs-4">
                        Login
                    </Link>}
                </div>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Header;