import React from 'react';

export default function SearchBar({ onSearch }) {
	// acá va tu código
	const BarStyling = { width: '20rem', background: '#F2F1F9', border: 'none', padding: '0.5rem' };
	return (
		<div>
			<input style={BarStyling} type="text" placeholder={'Buscar ciudad... '} />
			<button onClick={() => onSearch('ciudad')}> Buscar</button>
		</div>
	);
}
