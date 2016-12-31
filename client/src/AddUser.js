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
 	      	<button className="add" onClick={this.open.bind(this)}></button>
 	        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
 	          <Modal.Body>
				<div className="text-center">
					<h3 className="text-center">Add User</h3>
					<form onSubmit={this.handleSubmit.bind(this)} id="editForm"className="center-block">
						<div className="form-group" id="cont">
							<input type="text" id="name" ref="name" className="form-control name" placeholder="Enter the name"/>
						</div>
						<div className="form-group" id="cont">
							<input type="text" ref="phone" className="form-control" placeholder="Enter the contact number" />
						</div>
						<div className="form-group" id="cont">
							<input type="text" ref="email" className="form-control" placeholder="Enter the E-mail address" />
						</div>
						<div className="form-group" id="cont">
							<input type="text" ref="photo" className="form-control" placeholder="Enter the URL for contact image" />
						</div>
						<button type="submit" className="btn btn-primary">Save</button>
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
			phone:this.refs.phone.value.trim(),
			email:this.refs.email.value.trim(),
			photo: this.refs.photo.value.trim()
		}

		if(newuser.name==''){
			alert('please enter name');
      return;
		}

    this.props.addUser(newuser);
    this.close();
  }

	/*handleSubmit: function(e){
		e.preventDefault();

		var newuser = {
			name:this.refs.name.value.trim(),
			phone:this.refs.phone.value.trim(),
			email:this.refs.email.value.trim(),
			photo: this.refs.photo.value.trim()
		}

		if(newuser.name==''){
			alert('please enter name');
		}

	    console.log(newuser);

 	    const array = this.props.list;
 	    const newArray = update(array, {$push: [newuser]});

 	    console.log(array);
 	    console.log(newArray);
	}*/
}

export default AddUser
