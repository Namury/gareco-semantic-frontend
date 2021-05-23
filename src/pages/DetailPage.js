import React, { useEffect, useState } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/detailpage.css'
import Navbar from '../components/Navbar'
import axios from 'axios'

function DetailPage(props) {
    const { id } = props.match.params
    const [detail, setDetail] = useState([])

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:3100/api/reviews/${id}`)
            .then((response) => {
                console.log(response)
                setDetail(response.data.data)

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