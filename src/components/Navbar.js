import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [search, setSearch] = useState(null)
    const inputHandler = (e) => {
        setSearch(e.target.value)
    }

    return (
        <nav
            className="navbar navbar-desktop navbar-expand center"
            style={{ zIndex: "2" }}
        >
                <ul className=" navbar-nav align-items-center mx-auto">
                    <li className="nav-item ">
                        <Link className="navbar-brand nav-link" to="/">
                            GareCo
                        </Link>
                    </li>
                    <li className="nav-form">
                        <form className="form-inline w-100 my-lg-0">
                            <div className="form-group w-100 input-group has-search">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search"
                                    style={{ borderRadius: "50px", fontSize: "16px", padding: "20px", width: "75%" }}
                                    value={search}
                                    onChange={inputHandler}
                                />
                                <Link to={`/result/${search}`} style={{ marginBottom: "1.75rem" }} >
                                    <button type="submit" className="btn-search" style={{ fontSize: "18px" }}>
                                        <i className="fa fa-search"></i>
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </li>
                    {/* <li className="nav-item pl-3">
                        <Link className="navbar nav-link-about" to="/About">
                            About
                        </Link>
                    </li> */}
                </ul>
        </nav>
    )
}

export default Navbar
