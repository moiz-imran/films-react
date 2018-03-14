import React from 'react';
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'

import './styles.css'

class FilmsList extends React.Component {
    constructor(props) {
        super(props);
        this.loadNextData = this.loadNextData.bind(this);
    }

    componentWillUpdate(nextProps) {
        if (nextProps.allFilms !== this.props.allFilms) {
            this.props.fetchFilms({ limit: 10 })
        }
    }

    componentDidMount() {
        this.props.fetchFilms({ limit:10 })
    }

    loadNextData() {
        this.props.loadMore(this.props.films.next);
    }

    render() {
        const results = this.props.films.results ? this.props.films.results : [];
        return (
            <section>
                <h2>Browse Movies</h2>
                <InfiniteScroll
                    next={this.loadNextData}
                    hasMore={this.props.films.next !== null}
                >
                    <div className="FilmsList">
                        {results.map(film => {
                            return (
                                <Link className='movieLink' key={film.id} to={`/movie/${film.id}`}>
                                    <img src={film.img_url === null ? 'https://via.placeholder.com/300x450?text=Placeholder+Image' : film.img_url} alt={`${film.title} Poster`} className="imgResponsive" />

                                    <div className="movieInfo">
                                        <h3>{film.title}</h3>
                                        <p>{film.average_score ? film.average_score.toFixed(2) : 'N/A'}</p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </InfiniteScroll>
            </section>
        );
    }
}

export default FilmsList;