import React from 'react'
import Modal from 'simple-react-modal'
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

    handleSubmit(e) {
        e.preventDefault();

        const userData = {
            email: e.target.email.value,
            password: e.target.password.value,
        }

        const storageState = e.target.keeplog.checked ? 'local' : 'session';

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
                    containerStyle={{ width: '300px' }}
                >
                    <a className='modalClose' onClick={this.onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
                    </a>
                    <h2>Login</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input id="email" name="email" type="text" required />
                        <br />

                        <label htmlFor="password">Password:</label>
                        <input id="password" name="password" type="password" required />
                        <br />

                        <input id='keeplog' name='keeplog' type='checkbox' />
                        <label htmlFor="keeplog">Remember me</label>

                        <p className='failmsg'>{this.state.failMessage}</p>
                        <button type='submit'>Submit</button>                        
                    </form>
                </Modal>
            </div>
        );

    }
}

export default withRouter(LoginModal);