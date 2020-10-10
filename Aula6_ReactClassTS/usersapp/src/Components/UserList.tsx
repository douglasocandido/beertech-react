import React, { Component } from "react";
import User from "../Repository/User";
import CardCollection from "../Components/CardCollection"

interface IUserListProps {
    users: User[]
}

export default class UsersList extends Component<IUserListProps> {

    constructor(props: IUserListProps) {
        super(props)
    }

    render() {
        return <CardCollection/>

        const users = this.props.users
        let userList = ''
        users.forEach(userElement => {
            userList += userElement.name
        });
        return userList
        
    }

}