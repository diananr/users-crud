import React, { Component } from 'react';
import UserRow from './UserRow'
import './App.css';

class userList extends React.Component{

	render (){
		return (
			<div>
				{
					this.props.list.map((user) =>{
						return <UserRow name = {user.name}
										username = {user.username}
										email = {user.email}
										address = {user.address} 
										phone = {user.phone}
										website = {user.website}
										company = {user.company} />
					})
				}
			</div>
		)
	}
}

export default userList