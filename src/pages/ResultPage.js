import React, { useEffect, useState } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/resultpage.css'
import Navbar from '../components/Navbar'
import ResultCard from '../components/ResultCard'
import axios from 'axios'

function ResultPage(props) {
    const { search } = props.match.params
    const [title, setTitle] = useState([])
    const [category, setCategory] = useState([])
    const [description, setDescription] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:3100/api/reviews?title=${search}`)
            .then((response) => {
                console.log(response)
                setTitle(response.data.data)

            })
            .catch((err) => {
                console.log(err)
            })

        axios
            .get(`http://localhost:3000/api/reviewsByCategory/${search}`)
            .then((response) => {
                console.log(response)
                setCategory(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })

        axios
            .get(`http://localhost:3100/api/reviews?description=${search}`)
            .then((response) => {
                console.log(response)
                setDescription(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [search])

    return (
        <div style={{ backgroundColor: "#f0f0f0", height: "100%", width: "100%", minHeight: "100vh" }}>
            <Navbar></Navbar>
            <div className="container-fluid pt-3 pb-3">
                    <h5>Menampilkan pencarian "{search}"</h5>
                    <div>
                        {title.length || category.length || description.length !== 0 ? (
                            <div>
                                <div>
                                    {title.length !== 0 ? (
                                        <div>
                                            <p>Menampilkan judul "{search}" </p>
                                            <div className="row justify-content-left row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                                                {title.map((result) => (
                                                    <ResultCard title={result.title} cover={result.cover} id={result.id} ></ResultCard>
                                                ))}
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                                <div>
                                    {category.length !== 0 ? (
                                        <div>
                                            <p>Menampilkan kategori "{search}" </p>
                                            <div className="row justify-content-left row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                                                {category.map((result) => (
                                                    <ResultCard title={result.title} cover={result.cover} id={result.id} ></ResultCard>
                                                ))}
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                                <div>
                                    {description.length !== 0 ? (
                                        <div>
                                            <p>Menampilkan "{search}" dalam deskripsi</p>
                                            <div className="row justify-content-left row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                                                {description.map((result) => (
                                                    <ResultCard title={result.title} cover={result.cover} id={result.id} ></ResultCard>
                                                ))}
                                            </div>
                                        </div>
                                    ) : null}
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
    )
}

export default ResultPage