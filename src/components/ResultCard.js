import React from 'react'

function ResultCard(props) {
    return (
        <div className=" d-flex">
            <div className="result-card row">
                <div className="col">
                    <img src="https://s4.bukalapak.com/img/4798892882/large/Bunga_Mawar_Merah.jpg" alt="" />
                </div>
                <div className="details col pt-2">
                    <h5>{props.nama}</h5>
                    <h6>{props.namaIlmiah}</h6>
                    <p>{props.kategori}</p>
                </div>
            </div>
        </div>
    )
}

export default ResultCard
