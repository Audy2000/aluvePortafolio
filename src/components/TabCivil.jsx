import React from 'react'
import Card from './Card'

function TabCivil() {
  return (
    <div>


      <div className="p-5">

        <h2 className='text text-center mb-4'>Destrezas en la Ingeniería Civil</h2>
        
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
          <Card 
          url_imagen = "https://ingenieriaymas.com/wp-content/uploads/2016/04/sap-2000.png"
          titulo="CSI SAP2000"
          descripcion={"Modelado y diseño en el software SAP2000"}/>
          
          <Card 
          url_imagen = "https://www.geofumadas.com/wp-content/uploads/2019/07/Curso-especializacion-en-structuras-con-etabs.jpg"
          titulo="CSI ETABS"
          descripcion={"Modelado y diseño en el software ETABS"}/>
          
          <Card 
          url_imagen = "https://i.ytimg.com/vi/TDROXviGYEo/maxresdefault.jpg"
          titulo="PTC MathCAD"
          descripcion={"Automatización de memorias de cálculo con MathCAD"}/>
          
          <Card 
          url_imagen = "https://researchcomputing.princeton.edu/sites/g/files/toruqf7796/files/styles/freeform_750w/public/pages/matlab_r2015b.png?itok=VFKU9XeN"
          titulo="MATLAB"
          descripcion={"Automatización de cálculos con Matlab"}/>
          
          <Card 
          url_imagen = "https://static-wc.arcux.net/uploads/20200616114616/que-es-autocad.png"
          titulo="Autocad"
          descripcion={"Dibujo de Planos Estructurales en AutoCAD"}/>
        </div>
       
      
      
      </div>
    </div>
  )
}

export default TabCivil
