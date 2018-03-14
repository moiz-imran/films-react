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
                Rating no. {index + 1}
                <a onClick={this.clickHandler} className='svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg>
                </a>
                <div className='rating'>
                    <Rater total={10} rating={rating.score} onRate={this.onRating} />
                </div>
            </div>
        )
    }
}

export default SingleRating;
