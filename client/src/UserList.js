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
										phone = {user.phone}
										email = {user.email} />
					})
				}
			</div>
		)
	}
}

export default userList