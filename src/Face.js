import React from 'react';
import './Main.css';

function Face({url,size})
{
	return(
		<div className='center' >
		<div className='fg'>
		<img  src={url} alt='piss offff' className='imagek' width='500px' height='auto'/>
		<div className='box' style={{top:size.toprow, right:size.rightcol , bottom:size.bottomrow, left:size.leftcol}}>
		{console.log('df',size)}
		</div>
		</div>
		</div>	
		




		);
}

export default Face;