import React from 'react';
import FilmSearch from '../containers/FilmSearch';

import './styles.css';

export class FilmView extends React.Component {
    componentDidMount() {
        this.props.fetchFilm(this.props.id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.film !== this.props.film) {
            this.props.fetchFilm(nextProps.id)
        }
    }

    render() {
        const { film } = this.props;

        if (film.id === undefined) {
            return <p>loading</p>;
        }

        return (
            <div className="container">
                <FilmSearch />

                <div className="moviePage">
                    <div className="poster">
                        <img src={film.img_url === null ? 'https://via.placeholder.com/300x450?text=Placeholder+Image' : film.img_url} className="posterImg" />
                    </div>

                    <section className="movieDetails">
                        <h2 className="sectionTitle">{film.title}</h2>
                        <ul className="detailsList">
                            <li><span className="bold">Rating:</span> {film.average_score ? film.average_score.toFixed(2) : 'N/A'}</li>
                            <li><span className="bold">Vote count:</span> {film.ratings.length}</li>
                            <li><span className="bold">Year: </span> {film.year} </li>
                        </ul>

                        <p>{film.description}</p>
                    </section>
                </div>
            </div>
        );
    }
}

export default FilmView;