import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

function Titulares({ titulares, quitarTitular }) {
    
	return (
		<section>
			<h2>Titulares</h2>
			<div className="titulares">
				{titulares.map((j) => 
					 <article className="titular" key={j.id}>
						<div>
                            <img src={j.fotos} alt={ j.nombre}/>
							<button onClick = {() => quitarTitular(j)}>X</button>
                        </div>
                    
                         <p>{j.nombre}</p>
					 </article>
                )}
			</div>
		</section>
	);
}
const mapStateToProps = (state) => ({
	titulares: state.titulares,
});

const mapDispatchToProps = (dispatch) => ({

    quitarTitular(jugadores) {
        dispatch({
            type: "QUITAR_TITULAR",
            jugadores
        })
    }

});
export default connect(mapStateToProps, mapDispatchToProps)( Titulares);
