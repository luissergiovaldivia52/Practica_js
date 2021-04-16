import React from 'react';

import { connect } from 'react-redux';

function Suplentes({ suplentes, quitarSuplente }) {
	return (
		<section>
			<h2>Suplentes</h2>
			<div className="suplentes">
				{suplentes.map((j) => (
                    <article className="suplentes" key={j.id}>
                         
						<div>
							<img src={j.fotos} alt={j.nombre} />

							<button onClick = {() => quitarSuplente(j)}>X</button>
                        </div>
                       <p>{j.nombre}</p>
					</article>
				))}
			</div>
		</section>
	);
}
const mapStateToProps = (state) => ({
	suplentes: state.suplentes,
});

const mapDispatchToProps = (dispatch) => ({
    quitarSuplente(jugadores) {
        dispatch({
            type: "QUITAR_SUPLENTE",
            jugadores
        })
    }
});
export default connect(mapStateToProps, mapDispatchToProps)( Suplentes);


