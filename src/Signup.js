import React from 'react';
import './Main.css';

class Signup extends React.Component
{
	constructor()
	{
		super();
		this.state={
			email:'',
			password:'',
			name:'',
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
	onNameChange=(event)=>
	{
		this.setState({name:event.target.value});
	}

	submit=()=>
	{
		fetch('http://localhost:3000/register', {
			method:'post',
			headers:{'Content-Type':'application/json'	},
			body:JSON.stringify({email:this.state.email,
				password:this.state.password,name:this.state.name})
			})
		.then(res=>res.json())
		.then(data=>{this.props.dataloader(data);
			this.props.sign();

		}
			)
	}



	render()
	{
		const {sign}=this.props;

	return(

		<div className='megad'>
		<div className='boxer'>
		<p className='Sign'>Register</p>
		<p className='email'>Email</p>
		<input onChange={this.onEmailChange} type='text' className='emaili'/>
		<p className='pass'>Password</p>
		<input onChange={this.onPasswordChange} type='password' className='passi'/>
		<p>Name</p>
		<input onChange={this.onNameChange} type='text' />
		<button onClick={this.submit}> Sign Up </button>
		</div>
		</div>


		);
	}

}

export default Signup;