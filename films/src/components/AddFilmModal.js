import React from 'react'
import Modal, { closeStyle } from 'simple-react-modal'
import { withRouter } from 'react-router-dom'
import FilmForm from './FilmForm'

class AddFilmModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            failMessage: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.film !== this.props.film) {
            this.props.history.push(`/movie/${nextProps.film.id}`);
        } else if (nextProps.error === 'Validation isUrl on img_url failed') {
            this.setState({ failMessage: 'Image URL is invalid.' });
            this.props.resetError();
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        const filmData = {
            title: e.target.title.value,
            description: e.target.description.value,
            year: e.target.year.value,
            img_url: e.target.img_url.value
        }

        this.props.addFilm(filmData);
    }

    onClose() {
        this.props.closeModal();
        this.setState({ failMessage: '' });
    }

    render() {
        const { showModal, closeModal } = this.props;
        return (
            <div align='center'>
                <Modal
                    show={showModal}
                    onClose={this.onClose}
                    transitionSpeed={1}
                >
                    <a style={closeStyle} onClick={this.onClose}>X</a>
                    <h2>Add New Film</h2>
                    <FilmForm handleSubmit={this.handleSubmit} error={this.state.failMessage} />
                </Modal>
            </div>
        );

    }
}

export default withRouter(AddFilmModal);