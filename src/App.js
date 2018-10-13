import React, { Component } from 'react';
import './App.css';


import UserList from "./UserList";


class App extends Component {
    constructor() {
        super()
        this.state = {
            users: ["GrahamCampbell","fabpot","weierophinney","rkh","josh"]
        }
    }
    
    componentWillUpdate() {
        fetch(`https://api.github.com/users/${this.state.users[0]}`)
        .then(response => response.json())
        .then(results => this.setState({users: results.results}));
    }
    
    render() {
        const { users } = this.state;
        return (
            <div>
                <h1>Top 5 Github Users</h1>
                <UserList users={users} />
            </div>
        );
    }
}

export default App;
