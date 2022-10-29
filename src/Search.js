import React from 'react';
import './Main.css';


function Search({link ,click})
{

	return(

		<div className='mega'>

		<p className='desc'>welcome this is a cool app </p>
		<div className='border'>
		
		
		<input type='text' className='text' placeholder='enteruRl' onChange={link}/>
		<button className='but' onClick={click}>enter</button>
</div>
		</div>








		);

}

export default Search;