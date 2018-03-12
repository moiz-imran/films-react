import React from 'react';

import './styles.css'

export class FilmsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchFilms({ limit:20 })
    }

    render() {
        return (
            <section>
                <h2>Browse Movies</h2>
                <div className="FilmsList">
                    {this.props.films.map(film => {
                        return (
                            <div className='movieLink'>
                                <img src={film.img_url === null ? 'https://via.placeholder.com/300x450?text=Placeholder+Image' : film.img_url} className="imgResponsive" />

                                <div className="movieInfo">
                                    <h3>{film.title}</h3>
                                    <p>{film.average_score ? film.average_score.toFixed(2) : 'N/A'}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        );
    }
}

export default FilmsList;