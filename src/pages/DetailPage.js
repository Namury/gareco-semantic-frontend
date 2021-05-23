import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/navbar.css'
import '../assets/css/detailpage.css'

import Navbar from '../components/Navbar'
import axios from 'axios'

function DetailPage(props) {
    const { id } = props.match.params
    const [detail, setDetail] = useState([])
    const [category, setCategory] = useState([])

    useEffect(() => {
        axios
            .get(`https://gareco-semantic-backend.herokuapp.com/api/reviews/${id}`)
            .then((response) => {
                console.log(response)
                setDetail(response.data.data)

            })
            .catch((err) => {
                console.log(err)
            })

        axios
            .get(`https://gareco-semantic-backend.herokuapp.com/api/categories?uri=http://example.com/${id}`)
            .then((response) => {
                console.log(response)
                setCategory(response.data.data)

            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    return (
        <div style={{ backgroundColor: "#f0f0f0", height: "100%", width: "100%", minHeight: "100vh" }}>
            <Navbar></Navbar>
            <div className="container-fluid pt-3 pb-3">
                <div className="container cards-container">
                    
                    <div>
                        {detail.length !== 0 ? (
                            <div className="d-flex details flex-sm-column flex-xl-row flex-lg-row flex-md-row">
                                <div className="px-5">
                                    <img src={detail.cover} alt="Cover"></img>
                                </div>  
                                <div className="p-2">
                                    <h5>{detail.title}</h5>
                                    <div>
                                    {category.length !== 0 ? (
                                        <div>
                                            <div className="row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                                                {category.map((result) => (
                                                    <div>
                                                        <Link className="px-2" to={'/result/'.concat(result.categoryName)}>
                                                            {result.categoryName}
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <p>Kategori tidak ditemukan</p>
                                        </div>
                                    )}
                                        
                                    </div>
                                    <p>{detail.description}</p>
                                    <div className="row pb-1">
                                        <a className="col btn btn-danger ign" href={detail.ign} rel="noreferrer" target="_blank">IGN</a>
                                    </div>
                                    <div className="row pb-1">
                                        <a className="col btn btn-secondary metacritic" href={detail.metacritic} rel="noreferrer" target="_blank">Metacritic</a>
                                    </div>
                                    <div className="row pb-1">
                                        <a className="col btn btn-warning gamespot" href={detail.gamespot} rel="noreferrer" target="_blank">Gamespot</a>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        ) : (
                            <div>
                                <p>Data tidak ditemukan</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage