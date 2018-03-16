import React from 'react'
import Modal from 'simple-react-modal'
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
                    <h2>Add New Film</h2>
                    <FilmForm handleSubmit={this.handleSubmit} error={this.state.failMessage} />
                </Modal>
            </div>
        );

    }
}

export default withRouter(AddFilmModal);