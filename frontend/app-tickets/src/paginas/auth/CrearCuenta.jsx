import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import APIInvoke from '../../helpers/APIInvoke.js';

const CrearCuenta = () => {

    //definir estado inicial con useState
    const [usuario, setUsuario] = useState({
        idrol: '6352e9c4739c97a436abb091',
        nombre: '',
        celular: '',
        correo: '',
        nombreusuario: '',
        clave: ''
    })

    const { nombre, celular, correo, nombreusuario, clave } = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        document.getElementById('nombre').focus();
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        crearCuenta();
    }

    const crearCuenta = async () => {
        const body = {
            
        }
        const response = await APIInvoke.invokePOST(`/api/usuarios/crear-cuenta`, body);
    }

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <span className="h1"><b>Crear</b> Cuenta</span>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Bienvenido, ingrese sus credenciales</p>
                        <form onSubmit={onSubmit}>

                            <div className="input-group mb-3">
                                <input type="text" className="form-control"
                                    placeholder="Ingrese su nombre completo"
                                    id="nombre"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input type="text" className="form-control"
                                    placeholder="Ingrese su celular"
                                    id="celular"
                                    name="celular"
                                    value={celular}
                                    onChange={onChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-phone" />
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input type="email" className="form-control"
                                    placeholder="Ingrese su email"
                                    id="correo"
                                    name="correo"
                                    value={correo}
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
                                <input type="email" className="form-control"
                                    placeholder="Ingrese su usuario de acceso"
                                    id="nombreusuario"
                                    name="nombreusuario"
                                    value={nombreusuario}
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
                                    id="clave"
                                    name="clave"
                                    value={clave}
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
                                    <button type="submit" className="btn btn-primary btn-block">Crear Cuenta</button>
                                </div>
                                <div className="col-12 mt-2">
                                    <Link to={"/"} className="btn btn-info btn-block">Regresar</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CrearCuenta;