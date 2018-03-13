import React from 'react'
import ReactDOM from 'react-dom'
import Modal, { closeStyle } from 'simple-react-modal'
import { Redirect, withRouter } from 'react-router-dom'

const customStyles = {
    content: {
        width: '30%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

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
        const { openModal, closeModal, film } = this.props;
        return (
            <div>
                <Modal
                    show={openModal}
                    onClose={closeModal}
                    style={customStyles}
                    transitionSpeed={1}
                >
                    <a style={closeStyle} onClick={closeModal}>X</a>
                    <h2>Add New Film</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="title">Title:</label>
                        <input id="title" name="title" type="text" required/>
                        <br />

                        <label htmlFor="year">Year of release:</label>
                        <input id="year" name="year" type="number" min={1800} max={2099}/>
                        <br />

                        <label htmlFor="img_url">Image URL:</label>
                        <input id="img_url" name="img_url" type="text" />
                        <br />

                        <label htmlFor="description">Description:</label>
                        <textarea id="description" name="description" />
                        <br />

                        <button type='submit'>Add</button>
                    </form>
                </Modal>
            </div>
        );

    }
}

export default withRouter(AddFilmModal);