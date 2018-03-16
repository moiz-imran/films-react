import React from 'react'
import Modal from 'simple-react-modal'
import { withRouter } from 'react-router-dom'
import FilmForm from './FilmForm'

class EditFilmModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deleting: false,
            failMessage: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onDeletePrompt = this.onDeletePrompt.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.film !== this.props.film) {
            this.props.closeModal();
        } else if (nextProps.error === 'Validation isUrl on img_url failed') {
            this.setState({ failMessage: 'Image URL is invalid.' });
            this.props.resetError();
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        const filmData = {
            id: this.props.film.id,
            title: e.target.title.value,
            description: e.target.description.value,
            year: e.target.year.value,
            img_url: e.target.img_url.value
        }

        this.props.editFilm(filmData);
    }

    onDeletePrompt() {
        this.setState({ deleting: true });
    }

    onDelete() {
        const { deleteFilm, film } = this.props;
        deleteFilm(film.id);
    }

    onCancel() {
        this.setState({ deleting: false });
    }

    onModalClose() {
        this.props.closeModal();
        this.setState({ deleting: false });
    }

    render() {
        const { showModal, film } = this.props;
        return (
            <div align='center'>
                <Modal
                    show={showModal}
                    onClose={this.onModalClose}
                    transitionSpeed={1}
                    containerStyle={{ width: '300px' }}
                >
                    <a className='modalClose' onClick={this.onModalClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
                    </a>
                    <h2>Edit Film</h2>
                    {this.state.deleting ?
                    <div>
                        <p> Are you sure? </p>
                        <button onClick={this.onDelete}>Delete</button>
                        <button onClick={this.onCancel}>Cancel</button> 
                    </div> :
                    <FilmForm handleSubmit={this.handleSubmit} film={film} showDelete={true} onDelete={this.onDeletePrompt} error={this.state.failMessage} /> }
                </Modal>
            </div>
        );

    }
}

export default withRouter(EditFilmModal);