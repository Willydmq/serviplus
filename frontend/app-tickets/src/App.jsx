import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CrearCuenta from './paginas/auth/CrearCuenta';
import Login from './paginas/auth/Login';
import RolesAdmin from './paginas/configuracion/RolesAdmin';
import DashBoard from './paginas/DashBoard';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/crear-cuenta' exact element={<CrearCuenta />} />
          <Route path='/menu-principal' exact element={<DashBoard />} />
          <Route path='/roles-admin' exact element={<RolesAdmin />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
