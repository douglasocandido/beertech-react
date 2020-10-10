import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import UserList from './UserList'
import APIService from '../Services/APIService'
import IUsers from '../Interfaces/IUsers'
import AxiosHandler from '../Services/AxiosHandler'
import User from '../Repository/User'


interface IUsersCollectionState {
    usersData: User[]
    selectedUsers: User[]
}

interface IUsersCollectionProps {

}

export default class UsersCollection extends Component<IUsersCollectionProps, IUsersCollectionState> {

    constructor(props: IUsersCollectionProps) {
        super(props);

        this.state = {
            usersData : [],
            selectedUsers : []
        }
    }

    componentDidMount() {
        const apiService: APIService = new APIService(new AxiosHandler());
        apiService.getUsers().then((users: IUsers) => {
            this.setState({
                usersData : users.data,
                selectedUsers: users.data
            });
        });
    }

    searchUser(searchString: string) {
        const users = this.state.usersData
        let filteredUsers = [];
        for(let i = 0; i < users.length; i++) {
            if(users[i].name.indexOf(searchString) !== -1) {
                filteredUsers.push(users[i])
            }
        }
        this.setState({selectedUsers: filteredUsers})
    }

    render() {
        return (
            <div>
                <input type="search" onChange={event => this.searchUser(event.target.value)} placeholder="Digite o nome do usuário" />
                <Grid container spacing={4}>
                    <Grid container item xs={12} spacing={3}>
                    <UserList users={this.state.selectedUsers}/>
                    </Grid>
                </Grid>
            </div>
        )
    }

}