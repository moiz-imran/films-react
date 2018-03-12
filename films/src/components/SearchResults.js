import React from 'react';
import { Link } from 'react-router-dom'

export class SearchResults extends React.Component {
    render() {
        return (
            <div className='searchResults'>
                <ul>
                    {this.props.results.map(film => {
                        return (
                            <Link key={film.id} to={`/movie/${film.id}`}>
                                <li key={film.id} onClick={this.props.onClick}>
                                    <img src={film.img_url === null ? 'https://via.placeholder.com/300x450?text=Placeholder+Image' : film.img_url} className="resultPoster" />
                                    <div>
                                        <p>{film.title}</p>
                                        <p>{film.average_score ? film.average_score.toFixed(2) : 'N/A'}</p>
                                    </div>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default SearchResults;