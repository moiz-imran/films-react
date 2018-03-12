import React from 'react';

export class SearchResults extends React.Component {
    render() {
        return (
            <div className='searchResults'>
                <ul>
                    {this.props.results.map(film => {
                        return (
                            <li key={film.id} onClick={this.handleClick}>
                                <img src={film.img_url === null ? 'https://via.placeholder.com/300x450?text=Placeholder+Image' : film.img_url} className="resultPoster" />
                                <div>
                                    <p>{film.title}</p>
                                    <p>{film.average_score ? film.average_score.toFixed(2) : 'N/A'}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default SearchResults;