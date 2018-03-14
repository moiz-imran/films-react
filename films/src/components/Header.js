import React from 'react';
import { Link } from 'react-router-dom';
import AddNewFilm from '../containers/AddNewFilm'

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showAddModal: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ showAddModal: true });
    }

    closeModal() {
        this.setState({ showAddModal: false });
    }
    render() {
        return (
            <header>
                <Link to={'/'}><h1>Tintash Movies</h1></Link>
                {this.props.isLoggedin && <button className='headerButton' onClick={this.openModal}>Add a Movie</button>}
                <AddNewFilm showModal={this.state.showAddModal} closeModal={this.closeModal} />
            </header>
        );
    }
}

export default Header;