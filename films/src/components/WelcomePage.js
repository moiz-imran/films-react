import React from 'react'
import Login from '../containers/Login'
import Signup from '../containers/Signup'

class WelcomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showLoginModal: false,
            showSignupModal: false
        }

        this.openLoginModal = this.openLoginModal.bind(this);
        this.closeLoginModal = this.closeLoginModal.bind(this);
        this.openSignupModal = this.openSignupModal.bind(this);
        this.closeSignupModal = this.closeSignupModal.bind(this);
    }

    openLoginModal() {
        this.setState({ showLoginModal:true });
    }

    closeLoginModal() {
        this.setState({ showLoginModal: false });
    }

    openSignupModal() {
        this.setState({ showSignupModal: true });
    }

    closeSignupModal() {
        this.setState({ showSignupModal: false });
    }

    render() {
        return (
            <div>
                <div className='logSignButtons'>
                    <button onClick={this.openSignupModal}>Signup</button>
                    <button onClick={this.openLoginModal}>Login</button>
                </div>
                <Login showModal={this.state.showLoginModal} closeModal={this.closeLoginModal} />
                <Signup showModal={this.state.showSignupModal} closeModal={this.closeSignupModal} />
            </div>
        );
    }
}

export default WelcomePage;