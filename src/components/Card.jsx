import React from 'react'

function Card({ url_imagen,titulo,descripcion }) {
    return (
        <>
            <div class="card">
                <img class="card-img-top" src={url_imagen} alt="Title" />
                <div class="card-body">
                    <h4 class="card-title"> {titulo}</h4>
                    <p class="card-text">{descripcion}</p>
                </div>
            </div>
            
        </>
    )
}

export default Card