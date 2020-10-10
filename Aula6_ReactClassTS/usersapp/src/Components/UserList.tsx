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
        const users = this.props.users
        let cardList = []
        for(let i = 0; i < users.length; i++) {
            cardList.push(<CardCollection key={users[i].id} user={users[i]} />)
        }
        return cardList
    }

}