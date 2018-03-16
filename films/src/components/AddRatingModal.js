import React from 'react'
import Modal from 'simple-react-modal'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class AddRatingModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ratingAdded: false,
        }

        this.onRating = this.onRating.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if ((nextProps.film.id === this.props.film.id) && (nextProps.film.ratings.length > this.props.film.ratings.length)) {
            this.setState({ ratingAdded: true })
        }
    }

    onRating(value) {
        if (value.type === 'click') {
            this.props.addRating({ filmId: this.props.film.id, score: value.rating});
        }
    }

    onClose() {
        this.props.closeModal();
        this.setState({ ratingAdded: false });
    } 

    render() {
        const { showModal } = this.props;
        return (
            <div align='center'>
                <Modal
                    show={showModal}
                    onClose={this.onClose}
                    transitionSpeed={1}
                    containerStyle={{ width: '300px' }}
                >
                    <a className='modalClose' onClick={this.onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
                    </a>
                    <h2>Add Rating</h2>
                        {this.state.ratingAdded ?
                        <p> Thanks for rating! </p> :
                        <div className='rating'>
                            <Rater total={10} onRate={this.onRating} />
                        </div>
                        }
                    
                </Modal>
            </div>
        );

    }
}

export default AddRatingModal;