import React from 'react'
import Modal, { closeStyle } from 'simple-react-modal'

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
                >
                    <a style={closeStyle} onClick={this.onClose}>X</a>
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