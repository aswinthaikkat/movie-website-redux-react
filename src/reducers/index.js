import { combineReducers } from 'redux';

const movieReducer = () => {
    return [
        { title: "Shawnshank Redmeption", year: "1996", rating: 9.8 },
        { title: "Forrest Gump", year: "1997", rating: 9.7 },
        { title: "The Dark Knight", year: "2011", rating: 9.6 },
    ]

}

const selectMovieReducer = (state = null, action) => {
    switch (action.type) {
        case 'MOVIE_SELECTED':
            return action.payload
        default:
            return state
    }

}

export default combineReducers({
    movies: movieReducer,
    selection: selectMovieReducer
})