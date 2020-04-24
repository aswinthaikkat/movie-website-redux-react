import React from 'react';
import { connect } from 'react-redux';

const MovieDetails = (props) => {
    if (!props.selection) {
        return (<div style={{ width: '70%' }}>
            <h2>
                Movie
            </h2>
            <div>
                <p>Select movie</p>
            </div>
        </div>)
    }
    else {
        return (<div style={{ width: '70%' }}>
            <h2>
                Movie
            </h2>
            <div>
                <p>{props.selection.title}</p>
                <p>{props.selection.year}</p>
                <p>{props.selection.rating}</p>
            </div>
        </div>)
    }
}

const MapStatetoProps = (state) => {
    return {
        selection: state.selection
    }


}

export default connect(MapStatetoProps)(MovieDetails);