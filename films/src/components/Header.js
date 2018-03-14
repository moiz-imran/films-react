import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import AddNewFilm from '../containers/AddNewFilm'
import UserInfo from '../containers/UserInfo'

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
        const { isLoggedin } = this.props;
        return (
            <header>
                <Link to={'/'}><h1>Tintash Movies</h1></Link>
                {isLoggedin && <UserInfo />}
                <AddNewFilm showModal={this.state.showAddModal} closeModal={this.closeModal} />
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedin: state.userToken !== ''
    }
}

Header = connect(mapStateToProps)(Header);

export default Header;