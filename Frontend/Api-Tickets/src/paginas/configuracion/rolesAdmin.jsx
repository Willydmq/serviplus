import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/contentHeader.jsx";
import Navbar from "../../componentes/navbar.jsx";
import SidebarContainer from "../../componentes/sidebarContainer.jsx";
import APIInvoke from "../../helpers/APIInvoke.js";
import { Link } from "react-router-dom";
import mensajeConfirmacion from "../../helpers/mensajes.js";

const RolesAdmin = () => {
  const [arregloRoles, setArregloRoles] = useState([]);

  const listadoRoles = async () => {
    const response = await APIInvoke.invokeGET(`/api/roles`);
    setArregloRoles(response);
    // console.log(response);
  };

  useEffect(() => {
    listadoRoles();
  }, []);

  const borrarRol = async (e, id) => {
    e.preventDefault();
    const response = await APIInvoke.invokeDELETE(`/api/roles/${id}`);

    if (response.ok === "SI") {
      mensajeConfirmacion("success", response.msg);
      listadoRoles();
    } else {
      mensajeConfirmacion("error", response.msg);
    }
  };

  return (
    <main id="main" className="main">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <ContentHeader
        titulo={"Roles"}
        breadCrumb1={"Configuración"}
        breadCrumb2={"Lista Roles"}
        breadCrumb3={""}
        ruta={"/roles-admin"}
      />
      {/* Main content */}
      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Listado Roles</h5>
                <div className="row mb-3">
                  <div className="col-lg-12">
                    <Link to={"/roles-crear"} className="btn btn-primary">
                      Crear
                    </Link>
                  </div>
                </div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th style={{ width: "15%", textAlign: "center" }}>Id</th>
                      <th style={{ width: "65%", textAlign: "center" }}>Rol</th>
                      <th style={{ width: "10%", textAlign: "center" }}>
                        Estado
                      </th>
                      <th style={{ width: "10%", textAlign: "center" }}>
                        Opciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {arregloRoles.map((elemento) => (
                      <tr key={elemento._id}>
                        <td style={{ textAlign: "center" }}>{elemento._id}</td>
                        <td style={{ textAlign: "center" }}>
                          {elemento.nombreRol}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {elemento.estadoRol === 1 ? (
                            <span className="text-success">Activo</span>
                          ) : (
                            <span className="text-danger">Inactivo</span>
                          )}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <Link
                            to={`/roles-editar/${elemento._id}`}
                            className="btn btn-primary btn-sm"
                          >
                            <i
                              className="bi bi-pencil-square"
                              title="Editar"
                            ></i>
                          </Link>
                          &nbsp;
                          <button
                            onClick={(e) => borrarRol(e, elemento._id)}
                            className="btn btn-danger btn-sm"
                          >
                            <i className="bi bi-trash-fill" title="Borrar"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RolesAdmin;
