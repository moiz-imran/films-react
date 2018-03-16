import React from 'react'
import Modal from 'simple-react-modal'
import { withRouter } from 'react-router-dom'

class SignupModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            failMessage: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.error === 'Network Error') {
            this.props.history.push('/error');
        }

        if (nextProps.userToken !== '') {
            this.props.history.push('/');
        } else if (nextProps.error === 'username must be unique') {
            this.setState({ failMessage: 'Username taken!' });
            this.props.resetError();
        } else if (nextProps.error === 'email must be unique') {
            this.setState({ failMessage: 'Email already registered' });
            this.props.resetError();
        } else if (nextProps.error === 'Validation is on raw_password failed') {
            this.setState({ failMessage: 'Password must have at least one alphabet, one numerical and no spaces.' })
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        if (e.target.password1.value === e.target.password2.value) {
            const userData = {
                email: e.target.email.value,
                username: e.target.username.value,
                password1: e.target.password1.value,
                password2: e.target.password2.value
            }

            this.props.signUp(userData);
        } else {
            this.setState({ failMessage: 'Passwords do not match!' });
        }
    }

    onClose() {
        this.props.closeModal();
        this.setState({ failMessage: '' });
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
                    <h2>Signup</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input id="email" name="email" type="email" required />
                        <br />

                        <label htmlFor="username">Username:</label>
                        <input id="username" name="username" type="text" required />
                        <br />

                        <label htmlFor="password1">Password:</label>
                        <input id="password1" name="password1" type="password" minLength={8} required />
                        <br />

                        <label htmlFor="password2">Re-enter password:</label>
                        <input id="password2" name="password2" type="password" minLength={8} required />
                        <br />

                        <p className='failmsg'>{this.state.failMessage}</p>
                        <button type='submit'>Submit</button>
                    </form>
                </Modal>
            </div>
        );

    }
}

export default withRouter(SignupModal);