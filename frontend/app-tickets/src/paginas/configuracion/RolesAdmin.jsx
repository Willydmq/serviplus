import React from 'react';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';

const RolesAdmin = () => {
    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>

            <div className="content-wrapper">
                <ContentHeader></ContentHeader>

                <section className="content">
                    {/* Default box */}
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Listado de Roles</h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: '15%', textAlign: 'center' }}>Id</th>
                                        <th style={{ width: '65%', textAlign: 'center' }}>Rol</th>
                                        <th style={{ width: '10%', textAlign: 'center' }}>Estado</th>
                                        <th style={{ width: '10%', textAlign: 'center' }}>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>Update software</td>
                                        <td>
                                            <div className="progress progress-xs">
                                                <div className="progress-bar progress-bar-danger" style={{ width: '55%' }} />
                                            </div>
                                        </td>
                                        <td><span className="badge bg-danger">55%</span></td>
                                    </tr>
                                    <tr>
                                        <td>2.</td>
                                        <td>Clean database</td>
                                        <td>
                                            <div className="progress progress-xs">
                                                <div className="progress-bar bg-warning" style={{ width: '70%' }} />
                                            </div>
                                        </td>
                                        <td><span className="badge bg-warning">70%</span></td>
                                    </tr>
                                    <tr>
                                        <td>3.</td>
                                        <td>Cron job running</td>
                                        <td>
                                            <div className="progress progress-xs progress-striped active">
                                                <div className="progress-bar bg-primary" style={{ width: '30%' }} />
                                            </div>
                                        </td>
                                        <td><span className="badge bg-primary">30%</span></td>
                                    </tr>
                                    <tr>
                                        <td>4.</td>
                                        <td>Fix and squish bugs</td>
                                        <td>
                                            <div className="progress progress-xs progress-striped active">
                                                <div className="progress-bar bg-success" style={{ width: '90%' }} />
                                            </div>
                                        </td>
                                        <td><span className="badge bg-success">90%</span></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        {/* /.card-body */}
                    </div>
                    {/* /.card */}
                </section>

            </div>
            <Footer></Footer>
        </div>
    );
}

export default RolesAdmin;