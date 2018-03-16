import React from 'react'
import Modal from 'simple-react-modal'
import SingleRating from './SingleRating'
import { withRouter } from 'react-router-dom'

class ViewRatingsModal extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.error === 'Network Error') {
            this.props.history.push('/error');
        }
    }

    render() {
        const { showModal, film, editRating, deleteRating, closeModal } = this.props;
        const ratings = film.ratings ? 
            film.ratings.slice().sort(function (a, b) { return a.id > b.id }) :
            []

        return (
            <div align='center'>
                <Modal
                    show={showModal}
                    onClose={closeModal}
                    transitionSpeed={1}
                    containerStyle={{ width: '300px' }}
                >
                    <a className='modalClose' onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
                    </a>
                    <h2>Ratings</h2>
                    {ratings.length > 0 ?
                        <div>
                            {ratings.map((rating, index) => {
                                return (
                                    <SingleRating
                                        key={rating.id}
                                        index={index}
                                        filmId={film.id}
                                        rating={rating}
                                        onUpdate={editRating}
                                        onDelete={deleteRating}
                                    />
                                )
                            })} 
                        </div> :
                        <span> No ratings! </span>
                    }
                </Modal>
            </div>
        );

    }
}

export default withRouter(ViewRatingsModal);