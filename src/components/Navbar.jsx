import React from 'react'
import ejemploImg from '../assets/LCAD.png';

function Navbar() {
    return (
        <div>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <a href="" class="navbar-brand d-flex align-items-center">
                        
                        <img src={ejemploImg} width={'100px'} className='mx-2' alt="" srcset="" />

                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Navbar