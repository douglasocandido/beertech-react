import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';


export default class Header extends Component { 
    
    render() {
        return (
            <div>
            <Typography className="top" component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Pesquisa de usuários
            </Typography>            
            </div>
            )
        }
        
    }