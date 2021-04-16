import React from 'react';
import {connect} from 'react-redux';


function Jugadores({jugadores}) {
    
    return (
        
        <section>

            <h2>Jugadores</h2>
            <div className="contenedor de jugadores">
                    {

                    jugadores.map((j) => (
                        <article className="jugador">
                              <img src={j.fotos} alt={j.nombre} />
                    <h3>{j.nombre}</h3>
                    <div>
                        <button>Titulr</button>
                        <button>Suplentes</button>
                    </div>
                </article>
                        
                    ))}
                  

            </div>
        </section>
    );
}

const mapStatetoProps = state => ({
    jugadores: state.jugadores
})

 const mapDispatchToProps = dispatch =>{}





export default  connect(mapStatetoProps, mapDispatchToProps)( Jugadores)