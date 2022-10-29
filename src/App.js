import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import Search from './Search';
import Signin from './Signin.js';
import Face from './Face';
import Clarifai from 'clarifai';
import Rank from './Rank';
import Signup from './Signup';

const app = new Clarifai.App({
 apiKey: '727bd2bca0f140b79ff9a2412e8844b5'
});




class App extends React.Component 
{
	constructor()
	{
		super();
		this.state=
		{
			input:'',url:'',size:{},route:'signin',status:false,
			users:{
				id:'',
				email:'',
				password:'',
				name:'',
				count:0,

			}
		}
	}

	dataLoader=(data)=>
	{
		this.setState(
			{users:{id:data.id,
				email:data.email,
				password:data.password,
				name:data.name,
				count:data.count,


			}
			}

			)
		console.log(data,data.id);

	}

	sign=()=>
	{
		this.setState({route:''});
		this.setState({status:true})

	}
	signout=()=>
	{
		this.setState({route:'signin'});
		this.setState({status:false})
	}

	Box=(size)=>
	{
		
		const img=document.getElementsByClassName('imagek');
		const height=Number(img[0].height);
		const width=Number(img[0].width);
		const leftcol=size.left_col*width;
		const toprow=size.top_row*height;
		const rightcol=width-(size.right_col*width);
		const bottomrow=height-(size.bottom_row*height);
		console.log(leftcol,toprow,rightcol,bottomrow);
		const x={leftcol,toprow,rightcol,bottomrow};
		this.setState({size:x});
		
	}

    onInputChange=(event)=>
    {
    		this.setState({input:event.target.value})
    }

    onButtonSubmit=()=>
    {
    	this.setState({url:this.state.input});
    	app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input )

    	.then(response=>{
    		if(response)
    		{    		fetch(`http://localhost:3000/update/${this.state.users.id}`,{method:'put'})
    	.then(res=>res.json()).then(data=>{console.log(data);
    		this.setState(Object.assign(this.state.users,{count:data.count}))});
}

    		console.log(response);response.outputs[0].data.regions.map(d=>{this.Box(d.region_info.bounding_box)})})


    		
    	

    }
    register=()=>
    {
    	this.setState({route:'reg'});
    	
    }

    
	render()
	{
		return(
    	
<div>
<Nav signout={this.signout} status={this.state.status} signin={this.sign} reg={this.register}/>
			{this.state.route===''?

			<div>
			<Rank name={this.state.users.name} count={this.state.users.count}/>
			<Search link={this.onInputChange} click={this.onButtonSubmit}/>
			<Face url={this.state.url} size={this.state.size}/>
		</div>
			
			
			
			:(this.state.route==='reg'?
				<Signup dataloader={this.dataLoader} sign={this.sign}/>
			
			:<Signin sign={this.sign} reg={this.register}/>
);



}

</div>






			);
	}
}


export default App;