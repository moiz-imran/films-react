import React from 'react'
import DropdownMenu from 'react-dd-menu'
import 'react-dd-menu/dist/react-dd-menu.css'
import 'react-dd-menu/dist/react-dd-menu.min.css'
import { withRouter } from 'react-router-dom'

class FilterDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            max_year: '',
            min_year: '',
            searchString: ''
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.error === 'Network Error') {
            this.props.history.push('/error');
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { max_year, min_year, searchString } = this.state;

        const data = { max_year, min_year, searchString };

        this.props.fetchFilms(data);
        this.setState({ isMenuOpen: false });
    }

    toggleMenu() {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    closeMenu() {
        this.setState({ isMenuOpen: false });
    }

    render() {
        const { max_year, min_year, searchString } = this.state;
        const menuOptions = {
            isOpen: this.state.isMenuOpen,
            close: this.closeMenu,
            toggle:
                <a className='filterButton' type="button" onClick={this.toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 18 18"><path d="M5 8l4 4 4-4z" /></svg>
                    filter
                </a>,
            align: 'right',
            className: 'filterDropdown',
            closeOnInsideClick: false,
        };

        return (
            <DropdownMenu {...menuOptions}>
                <form onSubmit={this.handleSubmit}>
                    <li className='filterOptions'>
                        <label>Min Year: <input name='min_year' className='dropdownInput' type='number' value={min_year} onChange={this.handleChange} min={1800} max={2099} /></label>
                    </li>
                    <li className='filterOptions'>
                        <label>Max Year: <input name='max_year' className='dropdownInput' type='number' value={max_year} onChange={this.handleChange} min={1800} max={2099} /></label>
                    </li>
                    <li className='filterOptions'>
                        <label>Keywords: <input name='searchString' className='dropdownInput' type='text' value={searchString} onChange={this.handleChange} /></label>
                    </li>
                    <button type='submit' className='filterSearch'>Search</button>
                </form>
            </DropdownMenu>
        );
    }
}

export default withRouter(FilterDropDown);