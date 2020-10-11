import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import CardsList from './CardsList'
import APIService from '../Services/APIService'
import IUsers from '../Interfaces/IUsers'
import AxiosHandler from '../Services/AxiosHandler'
import User from '../Repository/User'
import SearchInput from "../Components/SearchInput/"


interface IUsersCollectionState {
    usersData: User[]
    selectedUsers: User[]
    isLoading: boolean
}


export default class UsersCollection extends Component<{}, IUsersCollectionState> {

    constructor(props:{}) {
        super(props);
        this.state = {
            usersData : [],
            selectedUsers : [],
            isLoading: true
        }
    }

    componentDidMount() {
        const apiService: APIService = new APIService(new AxiosHandler());
        apiService.getUsers().then((users: IUsers) => {
            this.setState({
                usersData : users.data,
                selectedUsers: users.data,
                isLoading:false
            });
        });
    }

    normalizeTextToSearch(searchText: string) {
        return searchText.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLocaleLowerCase();
    }

    searchUser(searchString: string) {
        const users = this.state.usersData
        let filteredUsers = [];
        for(let i = 0; i < users.length; i++) {
            if(this.normalizeTextToSearch(users[i].name).indexOf(this.normalizeTextToSearch(searchString)) !== -1) {
                filteredUsers.push(users[i])
            }
        }
        this.setState({selectedUsers: filteredUsers})
    }

    render() {
        return (
            <>
                <SearchInput searchUser={(event)=>this.searchUser(event)}/>
                {this.state.isLoading ? 
                    <div className="loading-spinner-wrapper">
                        <CircularProgress /> 
                    </div>
                    : 
                    <Grid  justify='center' alignItems= 'center' container spacing={4}>
                        <CardsList users={this.state.selectedUsers}/>
                    </Grid>
                }
            </>
        )
    }

}