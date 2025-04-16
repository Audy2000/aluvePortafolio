import urlImg from '../assets/leonardo.png';

const styles_header = {
  backgroundColor: "#E1E1E1",
};

function Cabecera() {
  const imgRoute = '../assets/leonardo.png';
  return (
    <>
      <header className="container">
        <div className="row align-items-center">
          {/* Columna con la foto */}
          <div className="col-md-3 d-flex justify-content-center">
            <img
              src= {urlImg}
              alt="Foto"
              className="img-fluid"
              style={{
                maxWidth: "100%",
                "@media (max-width: 768px)": { maxWidth: "100px" },
              }}
            />
          </div>
          {/* Columna con la descripción */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="">
              <div className="card-body">
                <h2 className="card-title">LEONARDO GUSTAVO CADENA MACÍAS</h2>
                <h4>Ingeniero Civil y Desarrollador de Software</h4>
                <ul>
                  <li>Investigativo. </li>
                  <li>Fácil acoplamiento a equipos de Trabajo</li>
                  <li>
                    Graduado y Estudiante de la Universidad Técnica de Manabí
                  </li>
                </ul>
                <h6 className="text-center">
                  <em>
                    "El esfuerzo de hoy es la semilla del éxito de mañana"
                  </em>
                </h6>

                <div className="row d-flex justify-content-center text-center">
                  <div className="col-sm-6 my-1">
                    <a class="btn btn-warning" target="_blank" href="https://drive.google.com/drive/folders/1GPZnfOLQf9dZWG5dDeGcLMojf6a-DNBg?usp=sharing" role="button">
                      <i class="fa-solid fa-helmet-safety mx-2"></i>
                      HV - Ing. Civil
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Columna con los contactos */}
          <div className="col-md-3 d-flex justify-content-center">
            <div className="">
              <h2>Contactos</h2>
              <p>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3991/3991765.png"
                  className="mx-3"
                  width={"20px"}
                  alt="email"
                />
                <a href="https://wa.me/593994972525" target="_blank">
                  099 497 2525
                </a>
              </p>
              <p>
                <img
                  src="https://img.icons8.com/?size=48&id=P7UIlhbpWzZm&format=png"
                  className="mx-3"
                  width={"20px"}
                  alt="email"
                />
                <a href="mailto:leocadmacxd@gmail.com">leocadmacxd@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      
    </>
  );
}

export default Cabecera;
