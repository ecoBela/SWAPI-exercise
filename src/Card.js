import React from 'react';


const Card =({ name, climate, terrain}) => {

	return (
		<div className = 'tc bg-light-blue dib blue br3 pa3 grow bw2 shadow-5'>
			<img alt="robots" src={`https://robohash.org/${name}`}/>
			<div>
				<h2>{name}</h2>
				<p>Climate: {climate}</p>
				<p>Terrain: {terrain}</p>
			</div>
		 </div>	
	);
}

export default Card;