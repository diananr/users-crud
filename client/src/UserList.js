import React, { Component } from 'react';
import UserRow from './UserRow';
import AddUser from './AddUser';
import './App.css';

class userList extends React.Component{
	render (){
		return (
			<div className="box-list">
				{
					this.props.list.map((user) =>{
						return <UserRow
                    				key = {user.email}
                    					name = {user.name}
										username = {user.username}
										email = {user.email}
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
