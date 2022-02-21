import React from 'react';
import logo from "./../Resources/logo.png"
import "./menu.css"

export default function Menu() {
	return <div className='container'>
		<img src={logo} alt="menu logo" className='menu-logo' />
		<div className='menu-name'>ToDo List</div>
	</div>;
}
