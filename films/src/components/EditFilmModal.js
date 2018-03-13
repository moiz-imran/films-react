import React from 'react'
import ReactDOM from 'react-dom'
import Modal, { closeStyle } from 'simple-react-modal'
import { withRouter } from 'react-router-dom'
import FilmForm from './FilmForm'

class EditFilmModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filmEditted: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
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

        this.props.closeModal();
    }

    render() {
        const { showModal, closeModal, film } = this.props;
        return (
            <div>
                <Modal
                    show={showModal}
                    onClose={closeModal}
                    transitionSpeed={1}
                >
                    <a style={closeStyle} onClick={closeModal}>X</a>
                    <h2>Edit Film</h2>
                    <FilmForm handleSubmit={this.handleSubmit} film={film}/>
                </Modal>
            </div>
        );

    }
}

export default withRouter(EditFilmModal);