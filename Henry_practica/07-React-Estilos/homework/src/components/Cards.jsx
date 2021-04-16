import React from 'react';
import Card from './Card';
import StCards from './Cards.module.scss';

export default function Cards({ cities }) {
	// acá va tu código
	// tip, podés usar un map
	
	return (
		<div className = {StCards.tarjetas}>
			{cities.map((city, i) => (
				<Card
          key = {i}
					max={city.main.temp_max}
					min={city.main.temp_min}
					name={city.name}
					img={'http://openweathermap.org/img/03n@2x.png'}
					onClose={() => alert(city.name)}
				/>
			))}
		</div>
	);
}
