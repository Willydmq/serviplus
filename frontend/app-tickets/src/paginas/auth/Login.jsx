import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <span className="h1"><b>Iniciar</b> Sesión</span>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Bienvenido, ingrese sus credenciales</p>
                        <form action="../../index3.html" method="post">

                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" id="usu" name="usu" required/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Contraseña" id="cla" name="cla" required/>
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
