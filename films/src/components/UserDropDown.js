import React from 'react'
import DropdownMenu from 'react-dd-menu'
import 'react-dd-menu/dist/react-dd-menu.css'
import 'react-dd-menu/dist/react-dd-menu.min.css'

class UserDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        };

        this.click = this.click.bind(this);
        this.toggle = this.toggle.bind(this);
        this.close = this.close.bind(this);
    }

    componentDidMount() {
        this.props.getUser();
    }

    toggle() {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    close() {
        this.setState({ isMenuOpen: false });
    }

    click() {
        console.log('You clicked an item');
    }

    render() {
        const menuOptions = {
            isOpen: this.state.isMenuOpen,
            close: this.close,
            toggle: 
            <a className='menuButton' type="button" onClick={this.toggle}>
                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" /></svg>
            </a>,
            align: 'right'
        };

        const { user } = this.props;

        return (
            <div className='userdropdown'>
                <DropdownMenu {...menuOptions}>
                    <li>
                        <a className='userinfo'>
                            Signed in as <strong>{user.username}</strong> <br />
                            {user.first_name && <small>{user.first_name} {user.last_name}<br /></small>}
                            <small>{user.email}</small>
                        </a>
                    </li>
                    <li role="separator" className="separator" />
                    <li><button type="button" onClick={this.click}>Add movie</button></li>
                    <li role="separator" className="separator" />
                    <li><button type="button" onClick={this.click}>Update Profile</button></li>
                    <li><button type="button" onClick={this.click}>Change Password</button></li>
                    <li><button type="button" onClick={this.click}>Logout</button></li>
                </DropdownMenu>
            </div>
        );
    }
}

export default UserDropDown;