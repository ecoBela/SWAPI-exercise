import React from 'react';

const Searchbox = ({ searchChange }) => {
	return(
			<div className='pa2'>
				<input
					className ='pa3, bg-lightest-blue' 
					type='search' 
					placeholder ='search planets'
					onChange={searchChange} 
				/>
			</div>
	);
}


export default Searchbox;