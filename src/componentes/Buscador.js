import React from 'react';

class Buscador extends React.Component {
    
    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();

        //Tomamos el valor input
        const termino = this.busquedaRef.current.value;

        //Lo enviamos al componente principal
        this.props.datosBusqueda(termino);
    }
    
    render(){
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" 
                        placeholder="¡Busca algo genial!" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-outline-info btn-block" 
                        value="Buscar..." />
                    </div>

                </div>
            </form>
        );
    }
}


export default Buscador;
