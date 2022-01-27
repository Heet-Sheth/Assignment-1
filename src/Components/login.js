import classNames from "classnames";
import React from "react";
import { Component } from "react/cjs/react.production.min";
import "./login.css";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isValidate: true,
			responseMsg: "",
			address: "null",
			pic: "",
			age: 0,
			show: false,
		};
	}
	render() {
		const { isValidate, fname, lname, age, address, responseMsg, pic, show } =
			this.state;
		const colorClasses = classNames({
			"color-green": isValidate,
			"color-red": !isValidate,
		});
		const handleChange = (e) => {
			this.setState({
				[e.target.name]: e.target.value,
			});
			validate(e.target.name);
		};
		const validate = (e) => {
			var nameRegex = /^[a-zA-Z]{3,20}$/;
			var numberRegex = /^\d+$/;
			switch (e) {
				case "fname":
					if (!nameRegex.test(fname))
						this.setState({
							isValidate: false,
							responseMsg:
								"First name can only contain capital and small letters without space and minimum of 3 letters and maximum of 20 characters",
						});
					else
						this.setState({
							isValidate: true,
							responseMsg: "OK",
						});
					break;
				case "lname":
					if (!nameRegex.test(lname))
						this.setState({
							isValidate: false,
							responseMsg:
								"Last name can only contain capital and small letters without space and minimum of 3 letters and maximum of 20 characters",
						});
					else
						this.setState({
							isValidate: true,
							responseMsg: "OK",
						});
					break;
				case "age":
					let number = parseInt(age, 10);
					if (numberRegex.test(number) && number <= 100 && number >= 10) {
						this.setState({
							isValidate: true,
							responseMsg: "Ok",
						});
					} else {
						this.setState({
							isValidate: false,
							responseMsg: "Age should contain only numbers between 10 and 100",
						});
					}
					break;
				case "address":
					if (address.length <= 240) {
						this.setState({
							isValidate: true,
							responseMsg: "Ok",
						});
					} else {
						this.setState({
							isValidate: false,
							responseMsg: "More than 240 letters are not allowed",
						});
					}
					break;
				default:
					this.setState({
						isValidate: false,
						responseMsg: "Form Error",
					});
			}
		};
		const regImage = (e) => {
			var file = document.getElementById("pic").files;
			if (file.length > 0) {
				let fileReader = new FileReader();
				fileReader.readAsDataURL(file[0]);
				fileReader.onload = (event) => {
					this.setState({ pic: event.target.result });
				};
			}
		};
		return (
			<div>
				<form className="container">
					<label>
						First name:
						<input
							type="text"
							placeholder="First name"
							className="form-element"
							name="fname"
							onChange={handleChange}
						/>
					</label>
					<label>
						Last name:
						<input
							type="text"
							placeholder="Last name"
							className="form-element"
							name="lname"
							onChange={handleChange}
						/>
					</label>
					<label>
						Age:
						<input
							type="text"
							placeholder="Age"
							className="form-element"
							name="age"
							onChange={handleChange}
						/>
					</label>
					<label>
						Address:
						<textarea
							className="form-element"
							name="address"
							placeholder="Address"
							onChange={handleChange}
						></textarea>
					</label>
					<label>
						Profile Picture:
						<input
							type="file"
							accept="image/png, image/gif, image/jpeg"
							className="form-element"
							name="pic"
							id="pic"
							onChange={(e) => regImage(e)}
						/>
					</label>
					{isValidate ? (
						<div
							className="form-button"
							onClick={() => {
								this.setState({ show: !show });
							}}
						>
							Submit
						</div>
					) : null}
				</form>
				<div id="demo" className={colorClasses}>
					{responseMsg}
				</div>
				{show ? (
					<div className="card">
						<div className="no-addr">
							<div className="img">
								<img
									id="preview"
									src={pic}
									width="80"
									height="80"
									alt="Profile Pic"
								/>
							</div>
							<div className="text-cont">
								<p className="name">{fname + " " + lname}</p>
								<p className="age">{age} yr</p>
							</div>
						</div>
						<div className="addr">{address}</div>
					</div>
				) : null}
			</div>
		);
	}
}

export default Login;
