import React, { Component } from "react";
import "./login.css";

const id_password = [
	{
		Name: "Jagat Vasveliya",
		Email: "jagatvasveliya2000@gmail.com",
		Password: "hey@jagat",
	},
	{
		Name: "Priya Bhut",
		Email: "priyabhut@gmail.com",
		Password: "hey@priya",
	},
	{
		Name: "Jenish Menpara",
		Email: "jenish@gmail.com",
		Password: "hey@jenish",
	},
	{
		Name: "Arshit Khoshiya",
		Email: "arshit@gmail.com",
		Password: "hey@aarshit",
	},
	{
		Name: "Heet Sheth",
		Email: "heetsheth0000@gmail.com",
		Password: "123",
	},
];

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Email: "",
			Password: "",
			errorMsg: "",
			isValidate: true
		};
	}
	handleEmail = (e) => {
		this.setState({ Email: e.target.value });
	};
	handlePassword = (e) => {
		this.setState({ Password: e.target.value });
	};
	compare = () => {
		const { Email, Password } = this.state || {};
		document.getElementById('disp-screen').style.color = 'red';
		if (Email === '') {
			if (Password === '') this.setState({ errorMsg: 'Please enter Email id and Password' });
			else this.setState({ errorMsg: 'Please enter Email id',isValidate: false });
		} else if (Email !== '' && Password === '') {
			this.setState({ errorMsg: 'Please enter Password' });
		} else {
			id_password.forEach((element) => {
				if (element.Email === Email) {
					if (element.Password === Password) {
						document.getElementById('disp-screen').style.color = 'green';
						this.setState({errorMsg: "Welcome, "+element.Name+" Login Successfull !!!"});
					} else {
						this.setState({ errorMsg: 'Password Incorrect!' });
					}
				} else {
					this.setState({ errorMsg: 'User not found!' });
				}
			});
		}
	};
	render() {
		const { Email, Password,errorMsg } = this.state || {};
		return (
			<div className="main-body">
				<h2>LOGIN</h2>
				<form>
					<input
						className="form-content"
						onChange={(e) => this.handleEmail(e)}
						value={Email}
						type="email"
						placeholder="Email id"
						id="email"
						required
					/>
					<br />
					<input
						className="form-content"
						onChange={(e) => this.handlePassword(e)}
						value={Password}
						type="password"
						placeholder="Password"
						id="pass"
						required
					/>
					<br />
					<input
						className="form-content"
						type="button"
						value="submit"
						onClick={this.compare}
					/>
				</form>
				<div id="disp-screen">{errorMsg}</div>
			</div>
		);
	}
}

export default Login;
