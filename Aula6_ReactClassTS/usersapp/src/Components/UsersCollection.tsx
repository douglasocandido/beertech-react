import React, { Component } from "react";
import UserList from './UserList'

export default class UsersCollection extends Component {

    searchUser(searchString: string) {
        console.log(searchString)
    }

    render() {
        return (
            <div>
                <input type="search" onChange={event => this.searchUser(event.target.value)} placeholder="Digite o nome do usuário" />
                
            </div>
        )
    }

}