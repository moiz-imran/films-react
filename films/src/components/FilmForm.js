import React from 'react'

const FilmForm = ({ handleSubmit, film = {}, showDelete = false, onDelete, error = '' }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input id="title" name="title" type="text" defaultValue={film.title} required />
            <br />

            <label htmlFor="year">Year of release:</label>
            <input id="year" name="year" type="number" defaultValue={film.year} min={1800} max={2099} required />
            <br />

            <label htmlFor="img_url">Image URL:</label>
            <input id="img_url" name="img_url" type="url" defaultValue={film.img_url} />
            <br />

            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" defaultValue={film.description}/>
            <br />

            <p className='failmsg'>{error}</p>
            <button type='submit'>Confirm</button>
            {showDelete && <button onClick={onDelete}>Delete</button>}
        </form>        
    )
}

export default FilmForm;