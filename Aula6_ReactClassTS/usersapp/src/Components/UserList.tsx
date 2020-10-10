import React, { Component } from "react";
import User from "../Repository/User";

interface IUserListProps {
    users: User[]
}

export default class UsersList extends Component<IUserListProps> {

    constructor(props: IUserListProps) {
        super(props)
    }

    render() {
        const users = this.props.users
        let userList = ''
        users.forEach(userElement => {
            userList += userElement.name
        });
        return userList
    }

}