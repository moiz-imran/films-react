import React from 'react'
import Modal from 'simple-react-modal'

class EditUserModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            failMessage: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const userData = {
            email: e.target.email.value,
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value
        }

        this.props.editUser(userData);
        this.props.closeModal();
    }

    onClose() {
        this.setState({ failMessage: '' });
        this.props.closeModal();
    }

    render() {
        const { userProfile, showModal } = this.props;
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
                    <h2>Update Profile for {userProfile.username}</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="first_name">First Name:</label>
                        <input id="first_name" name="first_name" type="text" defaultValue={userProfile.first_name} required />
                        <br />

                        <label htmlFor="last_name">Last Name:</label>
                        <input id="last_name" name="last_name" type="text" defaultValue={userProfile.last_name} required />
                        <br />

                        <label htmlFor="email">E-mail:</label>
                        <input id="email" name="email" type="email" defaultValue={userProfile.email} required />
                        <br />

                        <p className='failmsg'>{this.state.failMessage}</p>
                        <button type='submit'>Submit</button>
                    </form>
                </Modal>
            </div>
        );

    }
}

export default EditUserModal;