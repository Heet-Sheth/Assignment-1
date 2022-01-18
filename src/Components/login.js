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
		};
	}
	handleEmail = (e) => {
		this.setState({ Email: e.target.value });
	};
	handlePassword = (e) => {
		this.setState({ Password: e.target.value });
	};
	render() {
		const { Email, Password } = this.state || {};
		const compare = () => {
			document.getElementById("disp-screen").style.color = "red";
			if (Email === "") {
				if (Password === "")
					document.getElementById("disp-screen").innerHTML =
						"Please enter Email id and Password";
				else
					document.getElementById("disp-screen").innerHTML =
						"Please enter Email id";
			} else if (Email !== "" && Password === "")
				document.getElementById("disp-screen").innerHTML =
					"Please enter Password";
			else {
				id_password.forEach((element) => {
					if (element.Email === Email) {
						if (element.Password === Password) {
							document.getElementById("disp-screen").style.color = "green";
							document.getElementById(
								"disp-screen"
							).innerHTML = `Welcome ${element.Name} <br> Login Successful!!!!`;
						} else
							document.getElementById("disp-screen").innerHTML =
								"Password Incorrect!";
					} else
						document.getElementById("disp-screen").innerHTML =
							"User not found!";
				});
			}
		};
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
						onClick={compare}
					/>
				</form>
				<div id="disp-screen"></div>
			</div>
		);
	}
}

export default Login;
