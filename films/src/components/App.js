import React from 'react';
import FilmSearch from '../containers/FilmSearch'

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
            <div>
                {isLoggedin && <FilmSearch />}
            </div>
        );
    }
}

export default App;