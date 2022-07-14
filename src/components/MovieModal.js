import React, {useState, useEffect} from 'react';
import './MovieModal.css';
import axios from 'axios';
import Loading from './Loading.js';

const MovieModal = ({setDisp, id}) => {
  const [loading, setLoading] = useState(true);
  const [dir, setDir] = useState({});

  useEffect(() => {
    setLoading(true);
    loadDir();
  }, []);
  const loadDir = () => {
    axios.get(`http://localhost:8080/Movies/${id}`)
      .then(response => {
        setDir(response.data[0]);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log(err)
      })
  }
  if (loading) return <Loading />
  return (
    <div className="modal" onClick={() => {setDisp(false)}}>
      <div className="modalContainer" onClick={e => e.stopPropagation()}>
        <div className="modalInner">
          <button onClick={() => {setDisp(false)}}>X</button>
          <img className="movieImg" src={dir.image} alt="movie" />
          <h1>{dir.director}</h1>
          <div className="movieDesc">
            <p>born: {dir.year}</p>
            <p>{dir.director} is {dir.genre}.</p>
            <p>{dir.description}</p>
          </div>
          <h2>best movies</h2>
          <ul className="titles">
            {dir.title.map((movie, index) => <p key={'s'+index} className="check">{movie}</p>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;