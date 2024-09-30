import React from 'react'
import Card from './Card'

function TabTICS() {
    return (
        <>

            <div className="p-5">

                <h2 className='text text-center mb-4'>Destrezas en el Desarrollo de Sotware</h2>

                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>

                    
                <Card
                        url_imagen="https://lh3.googleusercontent.com/pw/AP1GczMa8sXrKukRQBjEtL54mjUnbi6xyJBpT_0uucMHjh9JgUVBV7l2jK64mlcHaXWbfbQiKV9b_ETVqY8kMzSjmtE_9aj_kOq4Us9Wh7MIQMqX93OPDmzNC30wo9Yrght9SSAoBVShPpvAEm4mQuJlFHg1=w1207-h651-s-no-gm"
                        titulo="Proyectos de Escritorio WinForms"
                        descripcion={"Proyecto para manejar XML de comprobantes electrónicos"} />

                   
                    <Card
                        url_imagen="https://onedrive.live.com/embed?resid=FFE8717E7A93C957%21210&authkey=%21ANmxrQnwYrhiMoI&width=660"
                        titulo="Extensión de Google Chrome"
                        descripcion={"Extensión de Google Chrome para la descarga de Documentos Electrónicos"} />

                    <Card
                        url_imagen="https://lh3.googleusercontent.com/pw/AP1GczOQOmUjjq3J2_AoKwQFVmTOrmYeUfyHf49Htdo7Cq7AIHxzZjswnOpyLpmRXBbya03TEv-QcWgZpeLAi-iS4qgzscy8meyJzantPVQ4qQ1xrMkYDfi6uqSCMhAdusEQMpWnMBSXj8BVLlsOqrBTwE6X=w957-h508-s-no-gm"
                        titulo="Desarrollo en ASP.NET CORE"
                        descripcion={"Api Rest de Facturación con .NET CORE"} />

                    <Card
                        url_imagen="https://lh3.googleusercontent.com/pw/AP1GczP7CMRsdn9RGxrIoc-M3hn8Ouk3I8sBd2Nfnrcm-XXZqFH_mUWOmmPN__AZhLC5OPbVjUcpPKzoCkFzVicNZpDD9TKQ2THByVKHVrFP4gz2dtgm8xSMHwmZX0-tAlJhnNcRU9G3-UcYdDgK7LY3yMFJ=w1006-h566-s-no-gm?authuser=0"
                        titulo="Desarrollo en JAVA- Spring Boot"
                        descripcion={"Sistema de Usuarios, roles y permisos en Spring Boot"} />

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
