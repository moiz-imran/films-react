import React from 'react'
import Modal, { closeStyle } from 'simple-react-modal'
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
        if ((nextProps.film.id === this.props.film.id) && (nextProps.film.ratings !== this.props.film.ratings)) {
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
                >
                    <a style={closeStyle} onClick={this.onClose}>X</a>
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