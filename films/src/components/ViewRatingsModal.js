import React from 'react'
import Modal, { closeStyle } from 'simple-react-modal'
import SingleRating from './SingleRating'

class ViewRatingsModal extends React.Component {
    render() {
        const { showModal, film, editRating, deleteRating, closeModal } = this.props;
        const ratings = film.ratings.slice().sort(function (a, b) { return a.id > b.id })
        return (
            <div align='center'>
                <Modal
                    show={showModal}
                    onClose={closeModal}
                    transitionSpeed={1}
                >
                    <a style={closeStyle} onClick={closeModal}>X</a>
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

export default ViewRatingsModal;