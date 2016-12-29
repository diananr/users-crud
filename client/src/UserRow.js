import React, { Component } from 'react';
import { Modal , Button } from 'react-bootstrap';
import './App.css';

const userRow = React.createClass({
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
      <div>

        <div className="box-user" onClick={this.open}>
        	<h4>{this.props.name}</h4>
        	<p>{this.props.username}</p>
        	<p>{this.props.phone}</p>
        	<p>{this.props.email}</p>
        </div>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <h4>{this.props.name}</h4>
            <p>{this.props.username}</p>
        	<p>{this.props.phone}</p>
        	<p>{this.props.email}</p>
        	<p>{this.props.website}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Edit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export default userRow