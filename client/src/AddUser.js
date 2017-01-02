import React, { Component } from 'react';
import update from 'react-addons-update';
import { Modal , Button } from 'react-bootstrap';
import './App.css';


class AddUser extends React.Component{
  	constructor (props){
    	super(props);
    	this.state = { showModal: false };
  	}

 	close() {
 		this.setState({ showModal: false });
 	}

 	open() {
 	  this.setState({ showModal: true });
  	}

	render (){
		return(
			<div className="add-user">
 	      	<button className="add" onClick={this.open.bind(this)}>+</button>
 	        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
 	          <Modal.Body>
				<div>
					<h3 className="text-center">Add User</h3>
					<form onSubmit={this.handleSubmit.bind(this)} id="editForm"className="center-block">
						<div className="form-group" id="cont">
							<label>Name:</label>
							<input type="text" id="name" ref="name" className="form-control name" placeholder="Enter the name *"/>
						</div>
						<div className="form-group" id="cont">
							<label>Username:</label>
							<input type="text" ref="username" className="form-control" placeholder="Enter the username *" />
						</div>
						<div className="form-group" id="cont">
							<label>Email:</label>
							<input type="text" ref="email" className="form-control" placeholder="Enter the email *" />
						</div>
						<div className="form-group" id="cont">
							<label>Address:</label>
							<input type="text" ref="street" className="form-control" placeholder="Enter the street" />
							<input type="text" ref="suite" className="form-control" placeholder="Enter the suite" />
							<input type="text" ref="city" className="form-control" placeholder="Enter the city" />				
						</div>
						<div className="form-group" id="cont">
							<label>Phone:</label>
							<input type="text" ref="phone" className="form-control" placeholder="Enter the phone *" />
						</div>
						<div className="form-group" id="cont">
							<label>Company:</label>
							<input type="text" ref="company" className="form-control" placeholder="Enter the company" />
						</div>
						<div className="form-group" id="cont">
							<label>Website:</label>
							<input type="text" ref="website" className="form-control" placeholder="Enter the website *" />
						</div>
						<button type="submit" className="btn btn-default">Save</button>
					</form>
				</div>
			  </Modal.Body>
 	        </Modal>
 	       </div>
		);
	}

  	handleSubmit (e) {
    	e.preventDefault();

		var newuser = {
			name:this.refs.name.value.trim(),
			username:this.refs.username.value.trim(),
			email:this.refs.email.value.trim(),
			address : {
				street: this.refs.street.value.trim(),
				suite: this.refs.suite.value.trim(),
				city: this.refs.suite.value.trim()
			},
			phone: this.refs.phone.value.trim(),
			company :{
				name : this.refs.company.value.trim()
			},
			website: this.refs.website.value.trim()
		}

		if(newuser.name=='' || newuser.username=='' ||
		   newuser.email== '' || newuser.phone=='' ||
		   newuser.website==''){
			alert('please complete the form');
      		return;
      	}
      	else{
      		this.props.addUser(newuser);
	    	this.close();
      	}
  	}
}

export default AddUser
