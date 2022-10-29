import React from 'react';
import './Main.css';

function Rank(props)
{

	return(
		<div className='rank'>
		<div className='user'>
		 {`${props.name}, your current entry count is...`}
		</div>
		<div className='rankend'>{`${props.count}`}
		</div></div>







		);
}

export default Rank;