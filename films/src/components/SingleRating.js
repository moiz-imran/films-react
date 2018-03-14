import React from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class SingleRating extends React.Component {
    constructor(props) {
        super(props);

        this.onRating = this.onRating.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        const { onDelete, rating: { id }, filmId } = this.props;
        onDelete({ id: id, filmId: filmId });
    }

    onRating(value) {
        if (value.type === 'click') {
            this.props.onUpdate({
                id: this.props.rating.id,
                filmId: this.props.filmId,
                score: value.rating 
            });
        }
    }

    render() {
        const { rating, index } = this.props;

        return (
            <div>
                Rating no. {index + 1} <button onClick={this.clickHandler} className='delRating'>x</button>
                <div className='rating'>
                    <Rater total={10} rating={rating.score} onRate={this.onRating} />
                </div>
            </div>
        )
    }
}

export default SingleRating;
