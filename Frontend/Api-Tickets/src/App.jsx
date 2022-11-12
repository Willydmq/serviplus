import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CrearCuenta from "./paginas/auth/crearCuenta";
import Login from "./paginas/auth/login";
import RolesAdmin from "./paginas/configuracion/rolesAdmin";
import RolesCrear from "./paginas/configuracion/rolesCrear";
import RolesEditar from "./paginas/configuracion/rolesEditar";
import UsuariosAdmin from "./paginas/configuracion/usuariosAdmin";
import UsuariosCrear from "./paginas/configuracion/usuariosCrear";
import UsuariosEditar from "./paginas/configuracion/usuariosEditar";
import DashBoard from "./paginas/dashBoard";
import CategoriasAdmin from "./paginas/tickets/categoriasAdmin";
import CategoriasCrear from "./paginas/tickets/categoriasCrear";
import CategoriasEditar from "./paginas/tickets/categoriasEditar";
import TicketsAdmin from "./paginas/tickets/ticketsAdmin";
import TicketsCrear from "./paginas/tickets/ticketsCrear";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/crear-cuenta" exact element={<CrearCuenta />} />
          <Route path="/menu-principal" exact element={<DashBoard />} />
          <Route path="/roles-admin" exact element={<RolesAdmin />} />
          <Route path="/roles-crear" exact element={<RolesCrear />} />
          <Route path="/roles-editar/:id" exact element={<RolesEditar />} />
          <Route path="/usuarios-admin" exact element={<UsuariosAdmin />} />
          <Route path="/usuarios-crear" exact element={<UsuariosCrear />} />
          <Route path="/categorias-admin" exact element={<CategoriasAdmin />} />
          <Route path="/categorias-crear" exact element={<CategoriasCrear />} />
          <Route
            path="/categorias-editar/:id"
            exact
            element={<CategoriasEditar />}
          />
          <Route
            path="/usuarios-editar/:id"
            exact
            element={<UsuariosEditar />}
          />
          <Route path="/tickets-admin" exact element={<TicketsAdmin />} />
          <Route path="/tickets-crear" exact element={<TicketsCrear />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
