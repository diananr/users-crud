import React, { Component } from 'react';
import { Modal , Button } from 'react-bootstrap';
import './App.css';

var userRow = React.createClass({

	getInitialState() {
    	return { showModal: false };
  	},

  	close() {
    	this.setState({ showModal: false });
  	},

  	open() {
    	this.setState({ showModal: true });
  	},

  	render() {
	    return (
	      <div className="box-user">
	        <div>
	        	<h4>{this.props.name}</h4>
	        	<p>{this.props.username}</p>
	        	<p>{this.props.phone}</p>
	        	<p>{this.props.email}</p>
	        	<button className="btn btn-default" onClick={this.open}>View details</button>
	        	<button className="btn btn-delete" onClick={this.delete}>Delete</button>
	        </div>
	        <Modal show={this.state.showModal} onHide={this.close}>
	          <Modal.Header>
	          	<Button className="btn-back" onClick={this.close}>Back</Button>
	          </Modal.Header>
	          <Modal.Body>
	            <h4>{this.props.name}</h4>
	            <div>
	            	<label>Username: </label>
	            	<span>{this.props.username}</span>
	            </div>
	        	<div>
	        		<label>Email: </label>
	        		<span>{this.props.email}</span>
	        	</div>
	        	<div>
	        		<label>Address: </label>
	        		<span>{this.props.address.street},
	        			  {this.props.address.suite},
	        			  {this.props.address.city}</span>
	        	</div>
	            <div>
	            	<label>Phone: </label>
	        		<span>{this.props.phone}</span>
	            </div>
	            <div>
	            	<label>Company: </label>
	        		<span>{this.props.company.name}</span>
	            </div>
	        	<div>
	        		<label>Website: </label>
	        		<span>{this.props.website}</span>
	        	</div>
	          </Modal.Body>
	        </Modal>
	      </div>
	    );
  	},

  	delete(e){
  		e.preventDefault();
  		var padreBox = e.target.parentElement.parentElement;
  		padreBox.remove();
  	}
});

export default userRow