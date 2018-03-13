import React from 'react';
import FilmSearch from '../containers/FilmSearch';

import './styles.css';
import Header from './Header';

export class FilmView extends React.Component {
    componentDidMount() {
        this.props.fetchFilm(this.props.id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.id !== this.props.id) {
            this.props.fetchFilm(nextProps.id)
        }
    }

    render() {
        const { film } = this.props;

        if (!film.id) {
            return <p>loading</p>;
        }

        return (
            <div className="container">
                <Header />
                <FilmSearch />

                {}
                <div className="moviePage">
                    <div className="poster">
                        <img src={film.img_url === null ? 'https://via.placeholder.com/300x450?text=Placeholder+Image' : film.img_url} alt={`${film.title} poster`} className="posterImg" />
                    </div>

                    <section className="movieDetails">
                        <h2 className="sectionTitle">{film.title}</h2>
                        <ul className="detailsList">
                            <li><span className="bold">Rating:</span> {film.average_score ? film.average_score.toFixed(2) : 'N/A'}</li>
                            <li><span className="bold">Vote count:</span> {film.ratings ? film.ratings.length : 0}</li>
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