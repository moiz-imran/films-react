import { connect } from 'react-redux'
import { fetchFilteredFilms } from '../actions/films'
import FilterDropDown from '../components/FilterDropDown'

const mapStateToProps = state => {
    return {
        films: state.filteredFilms,
        error: state.filmsErrorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFilms: (data) => {
            dispatch(fetchFilteredFilms(data))
        },
    }
}

const FilterFilms = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterDropDown)

export default FilterFilms;