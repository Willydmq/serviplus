import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import APIInvoke from '../../helpers/APIInvoke.js';
import mensajeConfirmacion from '../../helpers/Mensajes.js';

const Login = () => {

    //para redireccionar a un componente tipo pagina
    const navigate = useNavigate();

    const [login, setLogin] = useState({
        usu: '',
        cla: ''
    });

    const { usu, cla } = login;

    const onChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        document.getElementById('usu').focus();
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        iniciarSesion();
    }

    const iniciarSesion = async () => {
        const body = {
            usuarioAcceso: login.usu,
            claveAcceso: login.cla
        }

        const response = await APIInvoke.invokePOST(`/api/usuarios/login`, body);

        if (response.ok === "NO_EXISTE") {
            mensajeConfirmacion('error', response.msg);
        } else if (response.ok === "CLAVE_ERRONEA") {
            mensajeConfirmacion('error', response.msg);
        } else {
            //eliminar todos los datos del localstore
            localStorage.removeItem("token");
            localStorage.removeItem("iduser");
            localStorage.removeItem("username");

            //obtener el token
            const token = response.tokenJwt;

            //obtenemos otros datos adicionales
            const idUsuario = response._id;
            const nombreUsuario = response.nombresUsuario

            //guardar informacion en localstore de html5
            localStorage.setItem("token", token);
            localStorage.setItem("iduser", idUsuario);
            localStorage.setItem("username", nombreUsuario);

            //redireccionar al menu principal
            navigate("/menu-principal");
        }
    }

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <span className="h1"><b>Iniciar</b> Sesión</span>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Bienvenido, ingrese sus credenciales</p>
                        <form onSubmit={onSubmit}>

                            <div className="input-group mb-3">
                                <input type="email" className="form-control"
                                    placeholder="Email"
                                    id="usu"
                                    name="usu"
                                    value={usu}
                                    onChange={onChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input type="password" className="form-control"
                                    placeholder="Contraseña"
                                    id="cla"
                                    name="cla"
                                    value={cla}
                                    onChange={onChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
                                </div>
                                <div className="col-12 mt-2">
                                    <Link to={"/crear-cuenta"} className="btn btn-success btn-block">Crear Cuenta</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
