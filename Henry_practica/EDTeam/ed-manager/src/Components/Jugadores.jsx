import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

// const Jugadores = ({jugadores}) => {
function Jugadores({ jugadores, agregarTitular, agregarSuplente }) {
	return (
		<section>
			<h2>Jugadores</h2>
			<div className="contenedor-jugadores">
				{jugadores.map((j) => (
					<article className = "jugador" key={j.id}>
						<img src={j.fotos}     alt={j.nombre} />
						<h3>{j.nombre} </h3>
						<div>
							<button onClick= {() => agregarTitular(j)}>Titular</button>
							<button onClick = {()=> agregarSuplente(j)}>Suplente</button>
						</div>
					</article>
				))}

			
			</div>
		</section>
	);
}

const mapStateToProps = (state) => ({
	jugadores: state.jugadores,
});

const mapDispatchToProps = (dispatch) => ({
	agregarTitular(jugadores) {
		dispatch({
			type: "AGREGAR_TITULAR",
			jugadores
		})
	},
	// agregarSuplente(jugadores) {
	// 	dispatch({
	// 		type: "AGREGAR_SUPLENTE",
	// 		jugadores
	// 	})
	// }

});

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);
