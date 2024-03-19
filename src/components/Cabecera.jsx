const styles_header = {
    backgroundColor: '#E1E1E1'
}

function Cabecera() {
    return (
        <>


            <header className="container">
                <div className="row align-items-center">
                    {/* Columna con la foto */}
                    <div className="col-md-3 d-flex justify-content-center">
                        <img src="https://github.com/audy2000.png" alt="Foto" className="img-fluid" style={{ maxWidth: '100%', '@media (max-width: 768px)': { maxWidth: '100px' } }} />
                    </div>
                    {/* Columna con la descripción */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="">
                            <div className="card-body">
                                <h2 className="card-title">AUDY WAGNER LUCAS VERA</h2>
                                <h4>Ingeniero Civil y Desarrollador de Software</h4>
                                <ul>
                                    <li>Investigativo. </li>
                                    <li>Fácil acoplamiento a equipos de Trabajo</li>
                                    <li>Graduado y Estudiante de la Universidad Técnica de Manabí</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    {/* Columna con los contactos */}
                    <div className="col-md-3 d-flex justify-content-center">
                        <div className="">
                            <h2>Contactos</h2>
                            <p>
                                <img src="https://cdn-icons-png.flaticon.com/128/3991/3991765.png" className="mx-3" width={'20px'} alt="email" />
                                <a href="https://wa.me/593988316840" target="_blank">098 831 6840</a>
                            </p>
                            <p>
                                <img src="https://img.icons8.com/?size=48&id=P7UIlhbpWzZm&format=png" className="mx-3" width={'20px'} alt="email" />
                                <a href="mailto:alucas2897@gmail.com">alucas2897@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/**
            <div className="card text-start" style={styles_header}>
                <div className="row row-cols-1 row-cols-xs-2 row-cols-md-2 g-2">

                    <div className="col-3">
                        <img className="card-img-top" src="https://github.com/audy2000.png" alt="Title" />
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h2 className="card-title">Audy Wagner Lucas Vera</h2>
                            <h4>Ingeniero Civil y Desarrollador de Software</h4>
                            <ul>
                                <li>Investigativo. </li>
                                <li>Fácil acoplamiento a equipos de Trabajo</li>
                                <li>Graduado y Estudiante de la Universidad Técnica de Manabí</li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-4">
                            <h4>Contacto Directo:</h4>
                            
                                <p>
                                    <img src="https://cdn-icons-png.flaticon.com/128/3991/3991765.png" className="mx-3" width={'20px'} alt="email" />
                                    <a href="https://wa.me/593988316840" target="_blank">098 831 6840</a>
                                </p>
                                <p>
                                    <img src="https://img.icons8.com/?size=48&id=P7UIlhbpWzZm&format=png" className="mx-3"  width={'20px'} alt="email" />
                                    <a href="mailto:alucas2897@gmail.com">alucas2897@gmail.com</a>
                                </p>

                        </div>


                    </div>
                </div>



            </div>

 */}


        </>
    )
}

export default Cabecera 