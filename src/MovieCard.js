import React from 'react'

const MovieCard = (props) => {
  return (
    <div className="movie">
          <div>
            <p>{props.year}</p>
          </div>
          <div>
            <img src={props.poster !== 'N/A' ? props.poster:'https://via.placeholder.com/400'} alt={props.title}/>
          </div>
          <div>
            <span>{props.type}</span>
            <h3>{props.title}</h3>
          </div>
        </div>
  )
}

export default MovieCard
