import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import APIInvoke from "../../helpers/APIInvoke.js";
import config from "../../config.js";
import mensajeConfirmacion from "../../helpers/mensajes.js";

const CrearCuenta = () => {
  const [usuario, setUsuario] = useState({
    idRol: "6366eb0b3a508233c3e90195",
    nombre: "",
    celular: "",
    correo: "",
    nombreusuario: "",
    clave: "",
    estado: config.api.estadoUsuarioActivo,
  });

  const { nombre, celular, correo, nombreusuario, clave } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    document.getElementById("nombre").focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    crearCuenta();
  };

  const crearCuenta = async () => {
    const body = {
      idRol: usuario.idRol,
      nombresUsuario: usuario.nombre,
      celularUsuario: usuario.celular,
      correoUsuario: usuario.correo,
      usuarioAcceso: usuario.nombreusuario,
      claveAcceso: usuario.clave,
      estadoUsuario: usuario.estado,
    };
    const response = await APIInvoke.invokePOST(
      `/api/usuarios/crear-cuenta`,
      body
    );

    if (response.ok === "SI") {
      mensajeConfirmacion("success", response.msg);

      setUsuario({
        nombre: "",
        celular: "",
        correo: "",
        nombreusuario: "",
        clave: "",
      });
    } else {
      mensajeConfirmacion("error", response.msg);
    }
  };

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                {/* <div className="d-flex justify-content-center py-4">
                <a
                  href="index.html"
                  className="logo d-flex align-items-center w-auto"
                >
                  <img src="assets/img/logo.png" alt />
                  <span className="d-none d-lg-block">NiceAdmin</span>
                </a>
              </div> */}
                {/* End Logo */}
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Crear Cuenta
                      </h5>
                      <p className="text-center small">
                        Ingrese los datos del usuario
                      </p>
                    </div>
                    <form
                      className="row g-3 needs-validation"
                      onSubmit={onSubmit}
                    >
                      <div className="col-12">
                        <label htmlFor="nombre" className="form-label">
                          Nombres
                        </label>
                        <div className="input-group has-validation">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese nombre completo"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            onChange={onChange}
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your username.
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="celular" className="form-label">
                          Celular
                        </label>
                        <div className="input-group has-validation">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese su celular"
                            id="celular"
                            name="celular"
                            value={celular}
                            onChange={onChange}
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your username.
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <div className="input-group has-validation">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Ingrese su Email"
                            id="correo"
                            name="correo"
                            value={correo}
                            onChange={onChange}
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your username.
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="nombreusuario" className="form-label">
                          Usuario Acceso
                        </label>
                        <div className="input-group has-validation">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Ingrese su usuario de Acceso"
                            id="nombreusuario"
                            name="nombreusuario"
                            value={nombreusuario}
                            onChange={onChange}
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your username.
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="clave" className="form-label">
                          Contraseña
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Contraseña"
                          id="clave"
                          name="clave"
                          value={clave}
                          onChange={onChange}
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">
                          Crear Cuenta
                        </button>
                      </div>
                      <div className="col-12 text-center">
                        <p className="small mb-0">
                          <Link to={"/"}> Regresar</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CrearCuenta;
