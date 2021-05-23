import React, { useState} from 'react'
import '../assets/css/searchpage.css'
import '../assets/css/navbar.css'
import { Link } from 'react-router-dom'

function SearchPage() {

    const [search, setSearch] = useState(null)

    const inputHandler = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
        {/* <Navbar></Navbar> */}
            <div id="search-page">
                <div className="main-container">
                    <h1>GareCo</h1>
                    <h6>Game Review Compilation</h6>
                    <form className="form-inline w-100 my-lg-0">
                        <div className="form-group w-100 input-group has-search">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                value={search}
                                onChange={inputHandler}
                                style={{ borderRadius: "50px", fontSize: "24px", padding: "20px" }}
                                onSubmit={<Link to="/result"></Link>}
                            />
                            <Link to={`/result/${search}`} style={{marginBottom: "2.375rem"}} >
                                <button type="submit" className="btn-search">
                                    <i classname="fa fa-search"></i>
                                </button>
                            </Link>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchPage
