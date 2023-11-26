import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import './Login.css';

function Login() {
  const [contraseña, setContraseña] = useState("");
  const [usuario, setUsuario] = useState("");

  const validarFormulario = () => {
    let formularioEsValido = true;

    if (!usuario.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formularioEsValido = false;
      setErrorUsuario("Usuario no válido");
    } else {
      setErrorUsuario("");
    }

    return formularioEsValido;
  };

  const enviarInicioSesion = async (e) => {
    e.preventDefault();
  
    if (validarFormulario()) {
      try {
        const response = await fetch(apiURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: usuario,
            password: contraseña,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          const token = data.token;
          localStorage.setItem('token', token);
  
          // Redirige a la página HomeAdm después de un inicio de sesión exitoso
          window.location.assign('/HomeAdm');
        } else {
          // La respuesta no es exitosa, muestra un mensaje en la consola
          console.error('Error al enviar la solicitud');
          return;
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    }
  };

  return (
    <>
        <div className="App" key={index}> 
          <div className="container h-100">
            <div className="row h-100 d-flex align-items-center justify-content-center">
              <div className="col-md-4 formulario">
                <form id="formularioLogin" onSubmit={enviarInicioSesion}>
                  <div className="form-group">
                    <label>{Data3.email}</label>
                    <input
                      type="email"
                      className="form-control"
                      id="InputUsuario"
                      name="InputUsuario"
                      aria-describedby="emailHelp"
                      placeholder={Data3.email}
                      onChange={(event) => setUsuario(event.target.value)}
                    />
                    <small id="emailHelp" className="text-danger form-text">
                      {errorUsuario}
                    </small>
                  </div>
                  <br />
                  <div className="form-group">
                    <label>{Data3.contraseña}</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder={Data3.contraseña} 
                      onChange={(event) => setContraseña(event.target.value)}
                    />
                    <small id="errorContraseña" className="text-danger form-text">
                    </small>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    {Data3.boton} 
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    
    </>
  );
}

export default Login;
