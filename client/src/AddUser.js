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
				<div className="text-center">
					<h3 className="text-center">Add User</h3>
					<form onSubmit={this.handleSubmit.bind(this)} id="editForm"className="center-block">
						<div className="form-group" id="cont">
							<input type="text" id="name" ref="name" className="form-control name" placeholder="Enter the name"/>
						</div>
						<div className="form-group" id="cont">
							<input type="text" ref="username" className="form-control" placeholder="Enter the username" />
						</div>
						<div className="form-group" id="cont">
							<input type="text" ref="phone" className="form-control" placeholder="Enter the phone" />
						</div>
						<div className="form-group" id="cont">
							<input type="text" ref="email" className="form-control" placeholder="Enter the email" />
						</div>
						<div className="form-group" id="cont">
							<input type="text" ref="website" className="form-control" placeholder="Enter the website" />
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
			phone: this.refs.phone.value.trim(),
			website: this.refs.website.value.trim()
		}

		if(newuser.name==''){
			alert('please enter name');
      		return;
      	}

	    this.props.addUser(newuser);
	    this.close();
  	}
}

export default AddUser
