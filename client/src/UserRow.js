import React, { Component } from 'react';
import './App.css';

class userRow extends React.Component{

	render (){
		return (
			<div className="box-user">
				<h4>{this.props.name}</h4>
				<p>{this.props.username}</p>
				<p>{this.props.phone}</p>
				<p>{this.props.email}</p>
			</div>
		)
	}
}

export default userRow