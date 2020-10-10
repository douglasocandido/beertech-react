import React, { Component } from "react";
import User from "../Repository/User";

interface IUserListProps {
    users: User[]
}

export default class UsersList extends Component<IUserListProps> {

    constructor(props: IUserListProps) {
        super(props)
    }

}