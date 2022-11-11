import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import APIInvoke from "../../helpers/APIInvoke.js";
import mensajeConfirmacion from "../../helpers/mensajes.js";
import Logo from "../../../src/assets/img/Logo.png";

const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    usu: "",
    cla: "",
  });

  const { usu, cla } = login;

  const onChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    document.getElementById("usu").focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    iniciarSesion();
  };

  const iniciarSesion = async () => {
    const body = {
      usuarioAcceso: login.usu,
      claveAcceso: login.cla,
    };
    const response = await APIInvoke.invokePOST(`/api/usuarios/login`, body);
    if (response.ok === "NO_EXISTE") {
      mensajeConfirmacion("error", response.msg);
    } else if (response.ok === "CLAVE_ERRONEA") {
      mensajeConfirmacion("error", response.msg);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("iduser");
      localStorage.removeItem("username");
      localStorage.removeItem("rolusuario");

      // console.log(response);

      const token = response.tokenJwt;
      const idUsuario = response._id;
      const nombreUsuario = response.nombresUsuario;
      const rolUsuario = response.idRol;

      localStorage.setItem("token", token);
      localStorage.setItem("iduser", idUsuario);
      localStorage.setItem("username", nombreUsuario);
      localStorage.setItem("rol", rolUsuario);

      navigate("/menu-principal");
    }
  };

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <Link
                    to={"#"}
                    className="logo d-flex align-items-center w-auto"
                  >
                    <img
                      src={Logo}
                      alt="Logo"
                      style={{
                        opacity: ".8",
                        width: 75,
                        height: 200,
                        textAlign: "center",
                      }}
                    />
                    <span className="d-none d-lg-block">TicKets</span>
                  </Link>
                </div>
                {/* End Logo */}
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Inciar Seccion
                      </h5>
                      <p className="text-center small">
                        Bienvenido, ingrese sus credenciales
                      </p>
                    </div>
                    <form
                      className="row g-3 needs-validation"
                      onSubmit={onSubmit}
                    >
                      <div className="col-12">
                        <label htmlFor="usu" className="form-label">
                          Usuario
                        </label>
                        <div className="input-group has-validation">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            @
                          </span>
                          <input
                            type="email"
                            className="form-control"
                            id="usu"
                            name="usu"
                            value={usu}
                            onChange={onChange}
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your username.
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="cla" className="form-label">
                          Contraseña
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="cla"
                          name="cla"
                          value={cla}
                          onChange={onChange}
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">
                          Ingresar
                        </button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">
                          No tienes una cuenta?{" "}
                          <Link to={"/crear-cuenta"}> Crear cuenta</Link>
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

export default Login;
