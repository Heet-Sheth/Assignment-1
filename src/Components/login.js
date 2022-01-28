import classNames from "classnames";
import { useState } from "react/cjs/react.development";
import "./login.css";

export default function Login() {
	const [data, setData] = useState({
		fname: "",
		lname: "",
		age: "",
		address: "",
		pic: "",
	});
	const [okfnm, setfnmOK] = useState();
	const [oklnm, setlnmOK] = useState();
	const [okage, setageok] = useState();
	const [okaddr, setaddrok] = useState();
	const [condition, setCondition] = useState(false);
	const [isValidate, setColorValidation] = useState();
	const [responseMsg, setResponse] = useState("");
	const colorClasses = classNames({
		"color-green": isValidate,
		"color-red": !isValidate,
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		name !== "pic"
			? setData((prev) => ({ ...prev, [name]: value }))
			: setData((prev) => ({ ...prev, [name]: e.target.files[0] }));
		validate(name, value);
	};
	const validate = (name, value) => {
		var nameRegex = /^[a-zA-Z]{3,20}$/;
		var numberRegex = /^\d+$/;
		switch (name) {
			case "fname":
				if (nameRegex.test(value) && value !== null) {
					setColorValidation(true);
					setfnmOK(true);
					setResponse("OK");
				} else {
					setColorValidation(false);
					setfnmOK(false);
					setResponse(
						"First name can only contain capital and small letters without space and minimum of 3 letters and maximum of 20 characters"
					);
				}
				break;
			case "lname":
				if (nameRegex.test(value) && value !== null) {
					setColorValidation(true);
					setlnmOK(true);
					setResponse("OK");
				} else {
					setColorValidation(false);
					setlnmOK(false);
					setResponse(
						"Last name can only contain capital and small letters without space and minimum of 3 letters and maximum of 20 characters"
					);
				}
				break;
			case "age":
				if (
					numberRegex.test(value) &&
					value <= 100 &&
					value >= 10 &&
					value !== null
				) {
					setColorValidation(true);
					setageok(true);
					setResponse("OK");
				} else {
					setColorValidation(false);
					setageok(false);
					setResponse("Age should contain only numbers between 10 and 100");
				}
				break;
			case "address":
				if (value.length <= 240 && value !== null) {
					setColorValidation(true);
					setaddrok(true);
					setResponse("OK");
				} else {
					setColorValidation(false);
					setaddrok(false);
					setResponse("Address is allowed maximum up to 240 characters");
				}
				break;
			default:
		}
	};
	const finalSubmit = (event) => {
		event.preventDefault();
		if (okfnm && oklnm && okage && okaddr) {
			setCondition(true);
		} else {
			alert("Please enter all the details correctly...");
			setCondition(false);
		}
	};
	return (
		<div>
			<form className="container" onSubmit={finalSubmit}>
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
						accept="image/*"
						className="form-element"
						onChange={handleChange}
						name="pic"
						id="pic"
					/>
				</label>
				<input type="submit" className="form-button" value="submit" />
			</form>
			<div id="demo" className={colorClasses}>
				{responseMsg}
			</div>
			{condition ? (
				<div className="card">
					<div className="no-addr">
						<div className="img">
							<img
								id="preview"
								src={URL.createObjectURL(data.pic)}
								alt="Profile"
								width="80"
								height="80"
							/>
						</div>
						<div className="text-cont">
							<p className="name">{data.fname + " " + data.lname}</p>
							<p className="age">{data.age} yr</p>
						</div>
					</div>
					<div className="addr">{data.address}</div>
				</div>
			) : null}
		</div>
	);
}
