import React, { useEffect, useState } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/resultpage.css'
import Navbar from '../components/Navbar'
import ResultCard from '../components/ResultCard'
import axios from 'axios'

function ResultPage(props) {
    const { search } = props.match.params
    const [nama, setNama] = useState([])
    const [kategori, setKategori] = useState([])
    const [nIlmiah, setNIlmiah] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/cariman/?nama=${search}`)
            .then((response) => {
                console.log(response)
                setNama(response.data.data)

            })
            .catch((err) => {
                console.log(err)
            })

        axios
            .get(`http://localhost:5000/api/cariman/?kategori=${search}`)
            .then((response) => {
                console.log(response)
                setKategori(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })

        axios
            .get(`http://localhost:5000/api/cariman/?nama_ilmiah=${search}`)
            .then((response) => {
                console.log(response)
                setNIlmiah(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [search])

    return (
        <div style={{ backgroundColor: "#f0f0f0", height: "100%", width: "100%", minHeight: "100vh" }}>
            <Navbar></Navbar>
            <div className="container-fluid pt-3 pb-3">
                <div className="container cards-container">
                    <h5>Menampilkan pencarian {search}</h5>
                    <div>
                        {nama.length || kategori.length || nIlmiah.length !== 0 ? (
                            <div>
                                <div>
                                    {nama.length !== 0 ? (
                                        <div>
                                            <p>Menampilkan {search} dalam nama tanaman</p>
                                            {nama.map((hasil) => (
                                                <ResultCard nama={hasil.nama} namaIlmiah={hasil.nama_ilmiah} kategori={hasil.kategori} ></ResultCard>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                                <div>
                                    {kategori.length !== 0 ? (
                                        <div>
                                            <p>Menampilkan {search} dalam kategori</p>
                                            {kategori.map((hasil) => (
                                                <ResultCard nama={hasil.nama} namaIlmiah={hasil.nama_ilmiah} kategori={hasil.kategori} ></ResultCard>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                                <div>
                                    {nIlmiah.length !== 0 ? (
                                        <div>
                                            <p>Menampilkan {search} dalam nama ilmiah tanaman</p>
                                            {nIlmiah.map((hasil) => (
                                                <ResultCard nama={hasil.nama} namaIlmiah={hasil.nama_ilmiah} kategori={hasil.kategori} ></ResultCard>
                                            ))}
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
        </div>
    )
}

export default ResultPage