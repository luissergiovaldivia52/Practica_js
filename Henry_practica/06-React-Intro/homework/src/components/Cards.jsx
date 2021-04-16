import React from 'react';

import Card from './Card.jsx';

export default function Cards({ cities }) {
	// acá va tu código
	// tip, podés usar un map

	return (
    <div>
      {cities.map((city, i) => (
				<Card
					key={i}
					max={city.main.temp_max}
					min={city.main.temp_min}
					name={city.name}
					img={city.img}
					onClose={() => alert(city.name)}
				/>
			))}
		</div>
	);
}
