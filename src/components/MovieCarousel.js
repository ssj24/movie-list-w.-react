import React, { useState } from 'react';
import './MovieCarousel.css';
import left from '../assets/left.png';
import right from '../assets/right.png';


const MovieCarousel = ({saleMovieList = [], formatter, setClickId, setDisp }) => {
  const [current, setCurrent] = useState(0);
  const [leftAble, setLeftAble] = useState(false);
  const [rightAble, setRightAble] = useState(false);

  const nextSlide = () => {
    const length = saleMovieList.length;
    if (current + 1 < length) {
      setCurrent(current + 1);
      setLeftAble(false);
    } else {
      setRightAble(true);
    }
  }

  const prevSlide = () => {
    if (current - 1 >= 0) {
      setCurrent(current - 1);
      setRightAble(false);
    } else {
      setLeftAble(true);
    }
  }

  if (!saleMovieList.length) return null;
  return (
    <div>
      <h1>Special Price!!</h1>
      <div className="carouselContainer"
      >
        {saleMovieList.map((movie, index) =>
          <div
            key={movie.id}
            className={`movieContainer movie-shadow`}
            onClick={() => {setClickId(movie.id); setDisp(true);}}
            style={{
              transform: `translateX(-${current * 103}%)`,
              transition: 'transform 500ms ease-in-out',
            }}
          >
            <img className="movieImg" src={movie.image} alt="movie" />
            <div className="movieDesc">
              <p className="movieName">
                {movie.title}
              </p>
              <p className="moviePrice">
                {formatter.format(Math.round(movie.curPrice / 100)*100)}원
                {movie.discount > 0 && <span className="specPrice">(-{movie.discount}%)</span>}
              </p>
              <p className="movieInfo">
                {movie.year}년 |&nbsp;
                {movie.genre}
              </p>
            </div>
          </div>
        )}
      </div>
      <button onClick={prevSlide} className="btn btn-next" disabled={leftAble}>
        <img src={left} alt="이전" />
      </button>
      <button onClick={nextSlide} className="btn btn-next" disabled={rightAble}>
        <img src={right} alt="다음" />
      </button>
    </div>
  );
};

export default MovieCarousel;