import React from 'react'
import FilmSearch from '../containers/FilmSearch'
import Header from './Header'
import EditFilm from '../containers/EditFilm'
import AddRating from '../containers/AddRating'
import ViewRatings from '../containers/ViewRatings';

export class FilmView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditModal: false,
            showRatingModal: false,
            showViewRatingsModal: false
        }

        this.openEditModal = this.openEditModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
        this.openRatingModal = this.openRatingModal.bind(this);
        this.closeRatingModal = this.closeRatingModal.bind(this);
        this.openViewRatingModal = this.openViewRatingModal.bind(this);
        this.closeViewRatingModal = this.closeViewRatingModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchFilm(this.props.id)
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.film.id) {
            this.props.history.push('/')
        } else if (nextProps.id !== this.props.id) {
            this.props.fetchFilm(nextProps.id)
        }
    }

    openEditModal() {
        this.setState({ showEditModal: true });
    }

    closeEditModal() {
        this.setState({ showEditModal: false });
    }

    openRatingModal() {
        this.setState({ showRatingModal: true });
    }

    closeRatingModal() {
        this.setState({ showRatingModal: false });
    }

    openViewRatingModal() {
        this.setState({ showViewRatingsModal: true });
    }

    closeViewRatingModal() {
        this.setState({ showViewRatingsModal: false });
    }

    render() {
        const { film } = this.props;

        if (!film.id) {
            return <p>loading</p>;
        }

        const count = film.ratings ?
            <a onClick={this.openViewRatingModal} className='ratingCount'>{film.ratings.length}</a> :
            0;

        return (
            <div className="container">
                <Header />
                <FilmSearch />

                <div className="moviePage">
                    <div className="poster">
                        <img src={film.img_url === null ? 'https://via.placeholder.com/300x450?text=Placeholder+Image' : film.img_url} alt={`${film.title} poster`} className="posterImg" />
                    </div>

                    <section className="movieDetails">
                        <h2 className="sectionTitle">{film.title}
                            <a className='svg' onClick={this.openEditModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
                            </a>
                        </h2>
                        <ul className="detailsList">
                            <li><span className="bold">Rating:</span> {film.average_score ? film.average_score.toFixed(2) : 'N/A'}</li>
                            <li><span className="bold">Vote count:</span> {count}
                                <a className='svg' onClick={this.openRatingModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" /></svg>
                                </a>
                            </li>
                        </ul>

                        <p>{film.description}</p>
                    </section>
                </div>
                <EditFilm showModal={this.state.showEditModal} closeModal={this.closeEditModal} />
                <AddRating showModal={this.state.showRatingModal} closeModal={this.closeRatingModal} />
                <ViewRatings showModal={this.state.showViewRatingsModal} closeModal={this.closeViewRatingModal} />
            </div>
        );
    }
}

export default FilmView;