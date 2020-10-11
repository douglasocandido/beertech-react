import React, { Component } from "react";
import './SearchInput.css';


interface SearchInputProps  {
    searchUser: (eventValue: string)=> void
}

export default class SearchInput extends Component<SearchInputProps> { 
    
    render() {
        return (
            <input type="search" 
            onChange={event => this.props.searchUser(event.target.value)}
             placeholder="Digite o nome do usuário" />
            );
        }
        
    }