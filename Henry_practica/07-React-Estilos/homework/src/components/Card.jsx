import React from 'react';
import sCard from './Card.module.scss'

export default function Card({ min, max, name, img, onClose }) {
	// acá va tu código
	return (
		<div className = {sCard.tarjeta} >
			<span >{name} </span>
					<button className={sCard.boton} onClick={onClose}> X </button>
			<div className ={sCard.dato} >
				<section>
					<span > Min </span>
					<span>{`${min}°` }</span>
				</section>
				<section >
					<span> Max </span>
					<span>{`${max}°`}</span>
				</section>
					<img src= {'http://openweathermap.org/img/wn/02d@2x.png'} alt=" " />
				</div>
			</div>
	);
}
