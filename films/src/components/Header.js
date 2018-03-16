import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import UserInfo from '../containers/UserInfo'

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showAddModal: false
        }
    }

    render() {
        const { isLoggedin } = this.props;
        const headerClass = isLoggedin ? 'loggedInHeader' : 'loggedOutHeader'
        return (
            <header className={headerClass}>
                <Link to={'/'}><h1>Tintash Movies</h1></Link>
                {isLoggedin && <UserInfo />}
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