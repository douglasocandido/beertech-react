import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';


export default class Footer extends Component { 
    
    render() {
        return (
            <footer>
            <Typography variant="h6" align="center" gutterBottom>
            Grupo 2
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Beertech
            </Typography>
            </footer>
            );
        }
        
    }