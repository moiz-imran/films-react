import React from 'react'
import Modal, { closeStyle } from 'simple-react-modal'
import { withRouter } from 'react-router-dom'

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            failMessage: '',
            rememberCheck: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userToken !== '') {
            this.props.history.push('/');
        } else if (nextProps.error === 'Authentication failed. Wrong password.') {
            this.setState({ failMessage: 'Password does not match!' });
            this.props.resetError();
        } else if (nextProps.error === 'Authentication failed. User not found.') {
            this.setState({ failMessage: 'User does not exist!' });
            this.props.resetError();
        }
    }

    onSelect() {
        this.setState({ rememberCheck: true });
    }

    handleSubmit(e) {
        e.preventDefault();

        const userData = {
            email: e.target.email.value,
            password: e.target.password.value,
        }

        const storageState = this.state.rememberCheck ? 'local' : 'session';

        this.props.setStorageState(storageState);
        this.props.logIn(userData);
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
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="email">email:</label>
                        <input id="email" name="email" type="text" required />
                        <br />

                        <label htmlFor="password">password:</label>
                        <input id="password" name="password" type="password" required />
                        <br />

                        <label><input id='keeplog' name='keeplog' type='checkbox' onChange={this.onSelect} />Remember me</label>

                        <p className='failmsg'>{this.state.failMessage}</p>
                        <button type='submit'>Submit</button>                        
                    </form>
                </Modal>
            </div>
        );

    }
}

export default withRouter(LoginModal);