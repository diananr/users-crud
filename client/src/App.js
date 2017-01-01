import React, { Component } from 'react';
import Header from './Header'
import UserList from './UserList'
import AddUser from './AddUser'
import './App.css';


class usersApp extends React.Component{
  constructor (props){
    super(props)
    this.state = { users: [], filter: ""}
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
    var updateUsers = this.updateUsers.bind(this);

    let users = [];

    if(this.state.filter.length > 0)
    {
      let filterRegExp = new RegExp(this.state.filter.toLowerCase());
      users = this.state.users.filter((user) =>
        filterRegExp.test(user.username.toLowerCase()) ||
        filterRegExp.test(user.email.toLowerCase())
      );
    }

    else
      users = this.state.users;
    var loadString = "Loading.."
    if(this.state.users.length > 0){
      return(
        <div>
          <Header />
          <div className="main">
            <div className="box-search">
              <input type="text" placeholder="Search" value={this.state.filter} onChange={this._onChange.bind(this)}/>
            </div>
            <UserList list={users} />
            <AddUser list={this.state.users} addUser={ updateUsers }/>
          </div>
        </div>
      )
    } else {
      return <p className="text-center">{ loadString }</p>
    }
  }

  updateUsers(user) {
    let users = this.state.users;
    users.push(user);
    this.setState({users: users});
  }

  deleteUser(name) {
    let users = this.state.users;
    users.indexOf()

  }

  _onChange(e) {
    this.setState({filter: e.target.value});
  }

}

export default usersApp
