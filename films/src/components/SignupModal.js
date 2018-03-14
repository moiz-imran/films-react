import React from 'react'
import Modal, { closeStyle } from 'simple-react-modal'
import { withRouter } from 'react-router-dom'

class SignupModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            failMessage: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userToken !== '') {
            this.props.history.push('/');
        } else if (nextProps.error === 'username must be unique') {
            this.setState({ failMessage: 'Username taken!' });
        } else if (nextProps.error === 'email must be unique') {
            this.setState({ failMessage: 'Email already registered' });
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
                    <h2>Signup</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input id="email" name="email" type="email" required />
                        <br />

                        <label htmlFor="username">Username:</label>
                        <input id="username" name="username" type="text" required />
                        <br />

                        <label htmlFor="password1">Password:</label>
                        <input id="password1" name="password1" type="password" required />
                        <br />

                        <label htmlFor="password2">Re-enter password:</label>
                        <input id="password2" name="password2" type="password" required />
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