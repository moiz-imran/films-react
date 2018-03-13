import React from 'react'
import FilmSearch from '../containers/FilmSearch'
import Header from './Header'
import EditFilm from '../containers/EditFilm'
import AddRating from '../containers/AddRating'
import './styles.css'

export class FilmView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditModal: false,
            showRatingModal: false
        }

        this.openEditModal = this.openEditModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
        this.openRatingModal = this.openRatingModal.bind(this);
        this.closeRatingModal = this.closeRatingModal.bind(this);
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
                        <h2 className="sectionTitle">{film.title}
                            <button className='editorButton' onClick={this.openEditModal}><img src='https://www.materialui.co/materialIcons/image/edit_black_18x18.png' /></button>
                        </h2>
                        <ul className="detailsList">
                            <li><span className="bold">Rating:</span> {film.average_score ? film.average_score.toFixed(2) : 'N/A'}</li>
                            <li><span className="bold">Vote count:</span> {film.ratings ? film.ratings.length : 0}
                                <button className='editorButton' onClick={this.openRatingModal}><img src='https://www.materialui.co/materialIcons/content/add_circle_black_18x18.png' /></button>
                            </li>
                            <li><span className="bold">Year: </span> {film.year ? film.year : 'N/A'} </li>
                        </ul>

                        <p>{film.description}</p>
                    </section>
                </div>
                <EditFilm showModal={this.state.showEditModal} closeModal={this.closeEditModal} />
                <AddRating showModal={this.state.showRatingModal} closeModal={this.closeRatingModal} />
            </div>
        );
    }
}

export default FilmView;