import { Component } from 'react';
import './style.css';

class CardList extends Component {
    render() {

        const { skaters } = this.props;

        return (
        <div className='card-list'>

            {skaters.map((skater) => {
                const { name, email, id } = skater;
                return (
                <div className='card-container' key={id}>
                <img alt={`skater ${name}`} src={`https://robohash.org/${id}?set=set1&size=180x180`} />
                <h2>{name}</h2>
                <p>{email}</p>
                </div>
            )})}
            </div>
        )
    }
}

export default CardList;