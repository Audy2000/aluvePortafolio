import React from 'react'
import Card from './Card'

function TabTICS() {
    return (
        <>

            <div className="p-5">

                <h2 className='text text-center mb-4'>Destrezas en el Desarrollo de Sotware</h2>

                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>

                    <Card
                        url_imagen="https://onedrive.live.com/embed?resid=FFE8717E7A93C957%21212&authkey=%21ACGzHPO2C5dfUHw&width=1366&height=768"
                        titulo="Proyectos WinForms"
                        descripcion={"Proyecto Windows Forms para la gestion de Comprobantes Electrónicos"} />

                    <Card
                        url_imagen="https://onedrive.live.com/embed?resid=FFE8717E7A93C957%21210&authkey=%21ANmxrQnwYrhiMoI&width=660"
                        titulo="Estensión de Google Chrome"
                        descripcion={"Extensión de Google Chrome para la descarga de Documentos Electronicos"} />

                    <Card
                        url_imagen="https://www.ictacademy.in/pages/assets/base/img/content/stock/asp.jpg"
                        titulo="ASP"
                        descripcion={"Creacion de APIs Rest con ASP.NET"} />

                    <Card
                        url_imagen="https://www.qindel.com/wp-content/uploads/2023/04/spring-boot.jpeg"
                        titulo="JAVA- Spring Boot"
                        descripcion={"Creacion de APIs Rest con Java Spring Boot"} />

                    <Card
                        url_imagen="https://onedrive.live.com/embed?resid=FFE8717E7A93C957%21211&authkey=%21AE2pQFm32Jq48Io&width=660"
                        titulo="Diseño y Mantenimiento de Bases de Datos"
                        descripcion={"Diseño y Mantenimiento de Bases de Datos: Mysql, PostgreSQL, Microsoft SQL  Server"} />



                </div>



            </div>

        </>
    )
}

export default TabTICS