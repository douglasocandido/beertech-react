import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Card.css';
import User from '../../Repository/User'


interface ICardProps {
    user: User
}

export default class CardCollection extends Component<ICardProps>{

    render(){
        const {name, address, email, id } = this.props.user
        const completeAddress = `${address?.street}, ${address?.suite}, ${address?.city} - ${address?.zipcode}`
        return (
            <Card className="cardContainer">
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h6">
                            {id} - {name} 
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="p">
                           {email}
                        </Typography>
                        <br/><Divider/><br/>
                        <Typography variant="body2" color="textSecondary" component="p">
                           {completeAddress}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }        
}

