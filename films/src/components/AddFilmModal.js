import React from 'react'
import Modal, { closeStyle } from 'simple-react-modal'
import { withRouter } from 'react-router-dom'
import FilmForm from './FilmForm'

class AddFilmModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filmAdded: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.film !== this.props.film) {
            this.setState({ filmAdded: true })
            this.props.history.push(`/movie/${nextProps.film.id}`)
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

        this.props.closeModal();
    }

    render() {
        const { showModal, closeModal } = this.props;
        return (
            <div align='center'>
                <Modal
                    show={showModal}
                    onClose={closeModal}
                    transitionSpeed={1}
                >
                    <a style={closeStyle} onClick={closeModal}>X</a>
                    <h2>Add New Film</h2>
                    <FilmForm handleSubmit={this.handleSubmit} />
                </Modal>
            </div>
        );

    }
}

export default withRouter(AddFilmModal);