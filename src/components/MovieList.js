import React, {useState, useEffect} from 'react';
import MovieCarousel from './MovieCarousel.js';
import MovieModal from './MovieModal.js';
import Pagination from './Pagination.js';
import sold from '../assets/soldout.png'
import axios from 'axios';
import './MovieList.css';
import Loading from './Loading.js';


const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [saleMovies, setSaleMovies] = useState([]);
  const [clickId, setClickId] = useState(1);
  const [disp, setDisp] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const limit = 5;
  const offset = (page - 1) * limit;
  useEffect(() => {
    setLoading(true);
    callData();
  }, []);
  useEffect(() => {
    let ans = disp ? ['hidden', 'no'] : ['auto', 'yes'];
    document.body.style.overflow = ans[0];
    document.body.scroll = ans[1];
  }, [disp])
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
  });
  const callData = async () => {
    await axios.get('../../db.json')
      .then(async response => {
        setMovies(response.data.Movies.map((movie) => 
          <div
            key={movie.id}
            className="movieContainer movie-shadow"
            onClick={() => { setClickId(movie.id); setDisp(true);}}
          >
            <img className="movieImg" src={movie.image} alt="movie" />
            <div className="movieDesc">
              <span className="descFirst">
                <p className="movieName">
                  {movie.title}
                </p>
                <div className="tooltip">{movie.title}</div>
              </span>
              <ul className="movieTags">
                <li className="tag" style={{color: `rgb(${movie.colors.slice(0, 3).join(", ")})`}}>primary</li>
                <li className="tag" style={{color: `rgb(${movie.colors.slice(3, 6).join(", ")})`}}>secondary</li>
              </ul>
              <p className="moviePrice">
                {formatter.format(Math.round(movie.curPrice / 100)*100)}원
                {movie.discount > 0 && <span className="specPrice">(-{movie.discount}%)</span>}
              </p>
              <p className="movieInfo">
                {movie.year} <br />
                {movie.genre}
              </p>
            </div>
          </div>
        ))
        setSaleMovies(response.data.Movies.filter((movie) => {
          if (movie.discount >= 50) {
            return true
          }
          return false
        }))
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      })
  }
  
  if (loading) return <Loading />
  else if (!movies.length) return (
    <>
      <img src={sold} alt="매진" width="100%" height="100%" />
      <p className="notiP">No movies are available for now...</p>
    </>
  );
  return (
    <>
      {saleMovies.length && <MovieCarousel saleMovieList={saleMovies} formatter={formatter} setClickId={setClickId} setDisp={setDisp}/>}
      {disp && <MovieModal setDisp={setDisp} id={clickId}/>}
      <div className="movieListContainer">
        <h1>All Movies</h1>
        {movies.slice(offset, offset + limit)}
        {movies.length > limit && 
          <Pagination
            total={movies.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        }
      </div>
    </>
  );
};

export default MovieList;