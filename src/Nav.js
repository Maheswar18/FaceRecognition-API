import React from 'react';

function Nav({signout ,status,signin,reg})
{
	if(status)
	{
		return(
			<div>
		<a style={{textDecoration :'underline',cursor:'pointer',width:'auto',
		display:'flex' ,flexDirection:'row',flexWrap : 'wrap', 
		justifyContent : 'flex-end', margin : '10px'}} onClick={signout}>log out</a>
		</div>
			);}
		else if(status===false)
		{
			return(<div>
		<a style={{textDecoration :'underline',cursor:'pointer',width:'auto',
		display:'flex' ,flexDirection:'row',flexWrap : 'wrap', 
		justifyContent : 'flex-end', margin : '10px'}} onClick={signout}>Sign IN</a>
		<a style={{textDecoration :'underline',cursor:'pointer',width:'auto',
		display:'flex' ,flexDirection:'row',flexWrap : 'wrap', 
		justifyContent : 'flex-end', margin : '10px'}} onClick={reg}>Register</a>
		</div>);
		}
	

	
		


		
}

export default Nav;