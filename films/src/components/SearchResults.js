import React from 'react';
import { Link } from 'react-router-dom'

class SearchResults extends React.Component {
    render() {
        return (
            <div>
                <ul className='searchResults'>
                    {this.props.results.map(film => {
                        return (
                            <li key={film.id} onClick={this.props.onClick}>
                                <Link key={film.id} to={`/movie/${film.id}`}>
                                    <img src={film.img_url === null ? 'https://via.placeholder.com/300x450?text=Placeholder+Image' : film.img_url} alt={`${film.title} Poster`} className="resultPoster" />
                                    <div>
                                        <p>{film.title}</p>
                                        <p>{film.average_score ? film.average_score.toFixed(2) : 'N/A'}</p>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default SearchResults;