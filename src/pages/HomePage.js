import React, { useEffect, useState } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/homepage.css'
import Navbar from '../components/Navbar'
import ResultCard from '../components/ResultCard'
import axios from 'axios'

function HomePage(props) {

    const { search } = props.match.params
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(`http://gareco-semantic-backend.herokuapp.com/api/reviews`)
            .then((response) => {
                console.log(response.data.data)
                setData(response.data.data)

            })
            .catch((err) => {
                console.log(err)
            })
    }, [search])

    return(
        <div style={{ backgroundColor: "#f0f0f0", height: "100%", width: "100%", minHeight: "100vh" }}>
            <Navbar></Navbar>
            <div className="container-fluid pt-3 pb-3">
                {data.length !== 0 ? (
                    <div>
                        <div className="row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                            {data.map((result) => (
                                <ResultCard title={result.title} cover={result.cover} id={result.id} ></ResultCard>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        <p>Data tidak ditemukan</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePage