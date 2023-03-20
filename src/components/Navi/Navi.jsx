import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import Button from "react-bootstrap/Button";

import ReactStars from "react-stars";

import Modal from "react-bootstrap/Modal";

import  { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import "./Navi.css";
import imgg from "./imgg.webp";

const Navi = ({ movies, setMovies, inputSearch, setInputSearch , setStars, stars }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setNewMovie] = useState({
    id: uuidv4(),
    img: "",
    description: "",
    title: "",
    rating: 1,
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
   
  };

  const handleSave = () => {
    setShow(false);
    setMovies([...movies, newMovie]);
  };

  const handleSearch = (e)=>{
    setInputSearch(e.target.value);
    
  }
  
  const handleStars = (new_rating)=>{
    setStars(new_rating)
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="img"
              src={imgg}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Movie App
          </Navbar.Brand>
          <input
            type="text"
            placeholder="Enter Movie Title"
            onChange={handleSearch}
          />
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            half={false}
            onChange={handleStars}
            value={stars}
          />
          <Button variant="warning" onClick={handleShow}>
            Add Movie
          </Button>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Movie Title</label>
          <input
            type="text"
            placeholder="Enter Movie Title"
            onChange={handleChange}
            name="title"
          />
          <label>Movie image</label>
          <input
            type="text"
            placeholder="Enter the URL image"
            onChange={handleChange}
            name="img"
          />
          <label>Movie Description</label>
          <input type="text" onChange={handleChange} name="description" />
          <label>Movie Rating</label>
          <input
            type="number"
            placeholder="Enter Movie Rating"
            onChange={handleChange}
            name="rating"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Navi
