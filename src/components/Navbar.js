import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav
            className="navbar navbar-desktop navbar-expand center"
            style={{ zIndex: "2" }}
        >
            <div className="collapse navbar-collapse center" id="navbarTogglerDemo01">
                <ul className=" navbar-nav d-flex align-items-center mx-auto">
                    <li className="nav-item ">
                        <Link className="navbar-brand nav-link" to="/">
                            GareCo
                        </Link>
                    </li>
                    <li>
                        <form className="form-inline w-100 my-lg-0">
                            <div className="form-group w-100 input-group has-search">
                                <input
                                    type="sumbit"
                                    className="form-control"
                                    placeholder="Search"
                                    style={{ borderRadius: "50px", fontSize: "16px", padding: "20px", width: "600px" }}
                                    aria-label="Large"
                                    aria-describedby="inputGroup-sizing-sm"
                                    onSubmit={<Link to="/result"></Link>}
                                />
                                <span className=" fa fa-search form-control-feedback"></span>
                            </div>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
