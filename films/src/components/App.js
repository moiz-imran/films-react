import React from 'react'
import { connect } from 'react-redux'
import FilmSearch from '../containers/FilmSearch'
import FilmCatalog from '../containers/FilmCatalog'
import Header from './Header'
import WelcomePage from './WelcomePage';

class App extends React.Component {
    render() {
        const { isLoggedin } = this.props;

        return (
            <div className='container'>
                <Header />
                {isLoggedin ? 
                <div>
                    <FilmSearch />
                    <FilmCatalog key={Math.random()} />
                </div> :
                <WelcomePage />}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedin: state.userToken !== ''
    }
}

App = connect(mapStateToProps)(App);

export default App;