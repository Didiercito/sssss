import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';

function Login() {
  const [contraseña, setContraseña] = useState("");
  const [usuario, setUsuario] = useState("");
  const [errorUsuario, setErrorUsuario] = useState(""); // Assuming this state is used for error handling

  const enviarInicioSesion = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    if (validarFormulario()) {
      // Perform login or further actions here
      console.log("Form is valid. Perform login.");
    } else {
      console.log("Form is not valid. Please correct errors.");
    }
  };

  const validarFormulario = () => {
    let formularioEsValido = true;

    if (!usuario.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formularioEsValido = false;
      setErrorUsuario("Usuario no válido");
    } else {
      setErrorUsuario("");
    }

    // Add more validation logic if needed

    return formularioEsValido;
  };

  return (
    <div className="App">
      <div className="container h-100">
        <div className="row h-100 d-flex align-items-center justify-content-center">
          <div className="col-md-4 formulario">
            <form id="formularioLogin" onSubmit={enviarInicioSesion}>
              <div className="form-group">
                <label>Correo electronico</label>
                <input
                  type="email"
                  className="form-control"
                  id="InputUsuario"
                  name="InputUsuario"
                  aria-describedby="emailHelp"
                  placeholder="Correo electronico"
                  value={usuario}
                  onChange={(event) => setUsuario(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {errorUsuario}
                </small>
              </div>
              <br />
              <div className="form-group">
                <label>Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Contraseña"
                  value={contraseña}
                  onChange={(event) => setContraseña(event.target.value)}
                />
                {/* You can add error handling for password here if needed */}
              </div>
              <button type="submit" className="btn btn-primary">
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
