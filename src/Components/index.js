import React, { Component } from 'react';
import "./index.css"
class First extends Component {
	constructor(props)
	{
		super(props);
		this.state ={
			firstname: 'Heet',
			lastname: 'Sheth'
		};
	}
	handleClick=()=>
{
	this.setState({firstname:"Button Click"},()=>
	{
		console.log('firstname is :',this.state.firstname);
	});
};
	render() {
		const {name}=this.props;
		const {firstname , lastname}=this.state;
		return (
			<div>
				<p>This is for {firstname} @ state</p>
				<p>This is for {lastname} @ state</p>
				<p>This is for {this.state.myname} @ state</p>
				<p>This is for {name} @ props</p>
				<button onClick={this.handleClick}>CLICK!!!</button>
			</div>
		);
	}
}

export default First;