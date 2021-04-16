import React from 'react';

export default function Card({ name, max, min, img, onClose }) {
	// acá va tu código

	return (
		<div>
			<span>
				{name}
			</span>
			<div>
				<span>Minima</span>
				<spa>{min}</spa>
				<button onClick={onClose}> X </button>
			</div>
			<div>
				<span>Maxima</span>
				<spa>{max}</spa>
			</div>
			<img src={img} alt="" />
		</div>
	);
}
