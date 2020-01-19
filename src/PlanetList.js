import React from 'react';
import Card from './Card';


const PlanetList = ({ planets }) => {
	return(
		<div>{
			planets.map((planet, i) => {
				return (
					<Card 
						key={i} 
						name={planets[i].name}
						climate={planets[i].climate}
						terrain={planets[i].terrain}
					/>
				);
			})
		}</div>
	);
}


export default PlanetList;