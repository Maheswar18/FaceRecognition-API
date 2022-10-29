import React from 'react';
import './Main.css';

class Signin extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={
			email:'',
			password:'',
			ch:0
		}


	}

	onEmailChange=(event)=>
	{
		this.setState({email:event.target.value});

	}
	onPasswordChange=(event)=>
	{
		this.setState({password:event.target.value});
	}

	submit=()=>
	{
		
		
		fetch('http://localhost:3000/signin', {
			method:'post',
			headers:{'Content-Type':'application/json'	},
			body:JSON.stringify({email:this.state.email,
				password:this.state.password,})
			})
		.then(res=>res.json())
		.then(data=>{if(data==='success')
		{
			this.props.sign();
		}
		else
		{
			this.setState({ch:1});
		}
	})
		
			
	

	}


	render()
	{
		const {sign,reg}=this.props;
		

	return(

		<div className='megad'>
		<div className='boxer'>
		<p className='Sign'>Sign In</p>
		<p className='email'>Email</p>
		<input onChange={this.onEmailChange} type='text' className='emaili'/>
		<p className='pass'>Password</p>
		<input onChange ={this.onPasswordChange} type='password' className='passi'/>
		<button className='signup' onClick={this.submit}>Sign In</button>

		{(this.state.ch===1)?'wr':''}


		<button onClick={reg}> Sign Up </button>
		</div>
		</div>


		);
	}

}

export default Signin;