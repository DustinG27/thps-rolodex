import {  Component } from 'react';
import './card.css';


class Card extends Component {

    render() {
        const { id, email, name } = this.props.skater;
        return( <div className='card-list'>

      
            <div className='card-container' key={id}>
            <img alt={`skater ${name}`} src={`https://robohash.org/${id}?set=set1&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
       
        </div>)
    }

}

export default Card;