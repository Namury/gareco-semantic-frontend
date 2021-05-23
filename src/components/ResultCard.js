import React from 'react'
import { Link } from 'react-router-dom'

function ResultCard(props) {
    return (
        <div class="col">
            <Link class="card result-card card-link" to={props.id}>
                <img src={props.cover} alt="Cover"/>
                <div class="card-body details">
                    <h5>{props.title}</h5>
                </div>
            </Link>
        </div>
    )
}

export default ResultCard
