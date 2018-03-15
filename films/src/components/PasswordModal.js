import React from 'react'
import Modal, { closeStyle } from 'simple-react-modal'

class PasswordModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            failMessage: '',
            changeSuccessful: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userToken !== this.props.userToken) {
            this.setState({ changeSuccessful: true });
        } else if (nextProps.error === 'Sign up failed. Passwords don\'t match.') {
            this.setState({ failMessage: 'Password does not match!' });
            this.props.resetError();
        } else if (nextProps.error === 'Authentication failed. Wrong password.') {
            this.setState({ failMessage: 'Old password incorrect!' });
            this.props.resetError();
        } else if (nextProps.error === 'Validation is on raw_password failed') {
            this.setState({ failMessage: 'Password must have at least one alphabet, one numerical, and no spaces!' });
            this.props.resetError();            
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        const userData = {
            oldPassword: e.target.oldPassword.value,
            newPassword1: e.target.newPassword1.value,
            newPassword2: e.target.newPassword2.value
        }

        this.props.changePassword(userData);
    }

    onClose() {
        this.setState({ failMessage: '' });
        this.props.closeModal();
    }

    render() {
        const { showModal } = this.props;
        return (
            <div align='center'>
                <Modal
                    show={showModal}
                    onClose={this.onClose}
                    transitionSpeed={1}
                >
                    <a style={closeStyle} onClick={this.onClose}>X</a>
                    <h2>Login</h2>
                    {this.state.changeSuccessful ? 
                        <p>Password changed succesfully!</p> :
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="oldPassword">Old Password:</label>
                            <input id="oldPassword" name="oldPassword" type="password" required />
                            <br />

                            <label htmlFor="newPassword1">New Password:</label>
                            <input id="newPassword1" name="newPassword1" type="password" required />
                            <br />

                            <label htmlFor="newPassword2">Re-enter Password:</label>
                            <input id="newPassword2" name="newPassword2" type="password" required />
                            <br />

                            <p className='failmsg'>{this.state.failMessage}</p>
                            <button type='submit'>Submit</button>
                        </form>
                    }
                </Modal>
            </div>
        );

    }
}

export default PasswordModal;