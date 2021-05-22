import React, { useEffect, useState } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/homepage.css'
import Navbar from '../components/Navbar'
import ResultCard from '../components/ResultCard'
import axios from 'axios'

function HomePage() {

    const [nama, setNama] = useState([])
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:3100/api/reviews`)
            .then((response) => {
                console.log(response.data.data)
                // setNama(response.data.data)

            })
            .catch((err) => {
                console.log(err)
            })
        })

    return(
        <div>
            <Navbar></Navbar>
            <ResultCard></ResultCard>
        </div>
    )
}

export default HomePage