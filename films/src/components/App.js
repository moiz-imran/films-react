import React from 'react';
import FilmSearch from '../containers/FilmSearch'
import FilmCatalog from '../containers/FilmCatalog';
import Header from './Header';

import './styles.css'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedin: true
        }
    }

    render() {
        const { isLoggedin } = this.state;

        return (
            <div className="container">
                <Header />
                {isLoggedin && <FilmSearch />}
                {isLoggedin && <FilmCatalog/> }                
            </div>
        );
    }
}

export default App;