import React, { Component } from "react";
import User from "../../Repository/User";
import Card from "../Card"

interface CardsListProps {
    users: User[]
}

export default class CardsList extends Component<CardsListProps> {
    render() {
        const {users} = this.props;
        const cardsList = []
        if(users.length > 0) {
            for(let i = 0; i < users.length; i++) {
                cardsList.push(<Card key={users[i].id} user={users[i]} />)
            }
            return cardsList
        }
        return <span>Sem resultados para a sua busca.</span>
    }

}