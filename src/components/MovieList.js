import React from 'react';
import { connect } from 'react-redux';
import { selectedMovie } from '../actions/index';

const MovieList = (props) => {
    const listitems = props.movies.map((movie) => {
        return (
            <div key={movie.title}>
                <span>{movie.title}</span>
                <button onClick={() => { props.selectedMovie(movie) }}>details</button>

            </div>
        )
    })
    return (
        <div>
            <h2>Movie List</h2>
            <ul>{listitems}</ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }

}

const mapDispatchtoProps = {
    selectedMovie: selectedMovie
}

export default connect(mapStateToProps, mapDispatchtoProps)(MovieList);