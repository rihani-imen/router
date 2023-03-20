import React from "react";

import ReactStars from "react-stars";

import { Card } from "react-bootstrap";

import "./MovieCard.css";
import {Link} from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <Card>
        <Card.Img variant="top" src={movie.img} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            value={movie.rating}
            edit={false}
          />
          <Link to={`/movie/${
            movie.id}`}>
            <h5>See more</h5>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
