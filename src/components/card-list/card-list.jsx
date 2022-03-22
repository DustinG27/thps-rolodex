import { Component } from 'react';
import Card from './card/card';
import './style.css';

class CardList extends Component {
    render() {

        const { skaters } = this.props;

        return (
        <div className='card-list'>

            {skaters.map((skater) => {
                
                return (
                <Card skater={skater} />
            )})}
            </div>
        )
    }
}

export default CardList;