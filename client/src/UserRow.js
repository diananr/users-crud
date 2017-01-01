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
        <div onClick={this.open}>
        	<h4>{this.props.name}</h4>
        	<p>{this.props.username}</p>
        	<p>{this.props.phone}</p>
        	<p>{this.props.email}</p>
        </div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
          	<Button className="btn-back" onClick={this.close}>Back</Button>
          	<Button className="btn-delete" onClick={this.close}>Delete</Button>
          </Modal.Header>
          <Modal.Body>
            <h4>{this.props.name}</h4>
            <div>
            	<label>Username: </label>
            	<span>{this.props.username}</span>
            </div>
            <div>
            	<label>Phone: </label>
        		<span>{this.props.phone}</span>
            </div>
        	<div>
        		<label>Email: </label>
        		<span>{this.props.email}</span>
        	</div>
        	<div>
        		<label>Website: </label>
        		<span>{this.props.website}</span>
        	</div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
});

export default userRow