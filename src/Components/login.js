import React, { Component } from 'react';
import "./login.css"

const id_password=[{
	"Name": "Jagat Vasveliya",
	"Email": "jagatvasveliya2000@gmail.com",
	"Password": "hey@jagat"
},
{
	"Name": "Priya Bhut",
	"Email": "priyabhut@gmail.com",
	"Password": "hey@priya"
},
{
	"Name": "Jenish Menpara",
	"Email": "jenish@gmail.com",
	"Password": "hey@jenish"
},
{
	"Name": "Arshit Khoshiya",
	"Email": "arshit@gmail.com",
	"Password": "hey@aarshit"
},
{
	"Name": "Heet Sheth",
	"Email": "heetsheth0000@gmail.com",
	"Password": "123"
}
]

const compare=()=>
{
	document.getElementById('disp-screen').style.color="red";
	var email=document.getElementById('email').value;
	var password=document.getElementById('pass').value;
	if(email === "")
	{
		if(password === "")
			document.getElementById('disp-screen').innerHTML="Please enter Email id and Password";
		else
			document.getElementById('disp-screen').innerHTML="Please enter Email id";
	}
	else if(email !== "" && password === "")
			document.getElementById('disp-screen').innerHTML="Please enter Password";
	else
	{
		id_password.forEach(element => {
			if(element.Email === email)
			{
				if(element.Password === password)
				{
					document.getElementById('disp-screen').style.color="green";
					document.getElementById('disp-screen').innerHTML=`Welcome ${element.Name} <br> Login Successful!!!!`;
				}
				else
					document.getElementById('disp-screen').innerHTML="Password Incorrect!";
			}
			else
				document.getElementById('disp-screen').innerHTML="User not found!";
		});
	}
};

class Login extends Component {
	render() {
		return (
			<div className='main-body'>
				<h2>LOGIN</h2>
				<form>
					<input className='form-content' type="email" placeholder="Email id" id="email" required />
					<br/>
					<input className='form-content' type="password" placeholder="Password" id="pass" required />
					<br/>
					<input className='form-content' type="button" value="submit" onClick={compare} />
				</form>
				<div id='disp-screen'></div>
			</div>
		);
	}
}

export default Login