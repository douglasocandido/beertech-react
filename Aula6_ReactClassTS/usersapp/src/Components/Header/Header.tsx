import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';


export default class Header extends Component { 
    render() {
        return (
            <Typography className="top" component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Desafio 1 | BeerTech Talents 
            </Typography>            
            )
        }
    }