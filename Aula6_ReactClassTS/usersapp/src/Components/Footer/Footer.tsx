import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import './Footer.css';


export default class Footer extends Component { 
    
    render() {
        return (
            <footer>
            <Typography variant="h6" align="center" gutterBottom>
            Grupo 2 | BeerTech Talents
            </Typography>
            </footer>
            );
        }
        
    }