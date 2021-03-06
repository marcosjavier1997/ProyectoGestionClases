import React from 'react'
import { Link } from 'react-router-dom';
import { TablaCatedras } from '../../TablaCatedras';

export const ListarCatedra = () => {
    return (
        <div>
        <h3 className="barra">Listado de Catedras</h3>
        <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Listado de Catedras:</h3>
                        </div>
                    </div>

                    <TablaCatedras/>
                <div className="espacioblanco">
                <div className="row">
                    <div className="col-sm-12">

                        <Link to="/"className="btn btn-success">Volver</Link>
                    </div>  
                </div> 
                </div>     
        </div>
    </div>
    )
}
