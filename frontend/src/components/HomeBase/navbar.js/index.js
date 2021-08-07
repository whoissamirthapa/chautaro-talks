import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import classes from './navbar.module.css';

const Navbar = (props) => {

    const [nav, setNav] = useState(false);
    const token = localStorage.getItem("cUser_token");

    const handleLogOut = () =>{
        localStorage.removeItem("cUser_token");
    }

    return (
        <nav>
            <div className={classes.logo__navbar}>
               <span>चौतारो <span>Talks</span> </span>
               { nav ? 
               <button className={classes.navbar_menu_btn} onClick={()=>setNav(!nav)}>&times;</button>: 
               <button className={classes.navbar_menu_btn} onClick={()=>setNav(!nav)}>&#8801;</button> }
            </div>
            <div className={classes.list_nav_container}>
                <ul className={classes.list__navbar}>
                    <NavLink activeClassName={classes.hover__nav} to="/home">
                        <li>Home</li>
                    </NavLink>
                    <NavLink activeClassName={classes.hover__nav} to="/how-it-works">
                        <li>How it works</li>
                    </NavLink>
                    { token && <NavLink activeClassName={classes.hover__nav}  to="/talks">
                        <li>Let us Talk</li>
                    </NavLink> }
                    { token && <NavLink activeClassName={classes.hover__nav}  to="/chautaro-meet">
                        <li>Let us meet</li>                        
                    </NavLink> }
                    <NavLink activeClassName={classes.hover__nav}  to="/pricing">
                        <li>Pricing</li>
                    </NavLink>
                    { !token && <li className={classes.nav_btn_signin}>
                        <Link to="/sign-in">
                            <button>Sign In</button>
                        </Link>
                    </li> }
                    { !token && <li className={classes.nav_btn_signin}>
                        <Link to="/sign-in">
                            <button>Sign Up</button>
                        </Link>
                    </li> }
                    { token && <li className={classes.nav_btn_signin}>
                        <Link to="/">
                            <button onClick={handleLogOut}>Log Out</button>
                        </Link>
                    </li> }
                </ul>

                {/*-------------- For small width of devices------------ */}

                { nav && 
                <ul className={classes.list_navbar_sec}>
                    <li>
                        <NavLink activeClassName={classes.hover__nav} to="/home"> Home </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.hover__nav} to="/how-it-works">
                            How it works
                        </NavLink>
                    </li>
                    { token && <li>
                        <NavLink activeClassName={classes.hover__nav}  to="/talks">
                            Let us Talk
                        </NavLink>
                    </li> }
                    { token && <li>
                        <NavLink activeClassName={classes.hover__nav}  to="/chautaro-meet">
                            Let us meet                   
                        </NavLink>
                    </li> }
                    <li>
                        <NavLink activeClassName={classes.hover__nav}  to="/pricing">Pricing</NavLink>
                    </li>
                    { !token && <li className={classes.nav_btn_signin}>
                        <Link to="/sign-in">
                            <button>Sign In</button>
                        </Link>
                    </li> }
                    { !token && <li>
                        <li className={classes.nav_btn_signin}>
                        <Link to="/sign-in">
                            <button>Sign up</button>
                        </Link>
                    </li>
                    </li> }
                    { token && <li className={classes.nav_btn_signin}>
                        <Link to="/">
                            <button onClick={handleLogOut}>Log Out</button>
                        </Link>
                    </li> }
                </ul> 
                }

            </div>
        </nav>
    )
}

export default Navbar
