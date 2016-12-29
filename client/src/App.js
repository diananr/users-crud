import React, { Component } from 'react';
import Header from './Header'
import UserList from './UserList'
import './App.css';

class usersApp extends React.Component{
  constructor (props){
    super(props)
    this.state = { users: []}
  }

  componentWillMount(){
    fetch ("http://localhost:8080/users")
      .then((response) => {
        return response.json()
      })
      .then ((users) => {
        this.setState({users: users})
      })
  }

  render(){
    if(this.state.users.length > 0){
      return(
        <div>
          <Header />
          <div className="main">
            <div className="box-search">
              <input type="text" placeholder="Search"/>
              <button>X</button>
            </div>
            <UserList list={this.state.users} />
          </div>
        </div>
      )
    } else {
      return <p className="text-center">Loading</p>
    }
  }
}

export default usersApp



