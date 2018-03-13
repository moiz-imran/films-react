import React from 'react'

const FilmForm = ({ handleSubmit, film = {}, showDelete = false, onDelete }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input id="title" name="title" type="text" defaultValue={film.title} required />
            <br />

            <label htmlFor="year">Year of release:</label>
            <input id="year" name="year" type="number" defaultValue={film.year} min={1800} max={2099} />
            <br />

            <label htmlFor="img_url">Image URL:</label>
            <input id="img_url" name="img_url" type="text" defaultValue={film.img_url} />
            <br />

            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" defaultValue={film.description}/>
            <br />

            <button type='submit'>Confirm</button>
            {showDelete && <button onClick={onDelete}>Delete</button>}
        </form>        
    )
}

export default FilmForm;