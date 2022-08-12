import React, { useState, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import './slick-theme.css';
import './MovieCarousel.css';
import Slider from 'react-slick';


const MovieCarousel = ({saleMovieList = [], formatter, setClickId, setDisp }) => {
  const [width, setWidth] = useState(0);
  const [movieList, setMovieList] = useState(saleMovieList);
  const [maxIdx, setMaxIdx] = useState(movieList.length);
  const [dot, setDot] = useState(false);
  const slider = useRef(null);

  const updateIdx = (e) => {
    const x = e.pageX - e.target.getBoundingClientRect().left;
    const clickedValue = x / e.target.offsetWidth;
    slider.current.slickGoTo(Math.round((maxIdx * clickedValue)));
  }

  const filterMovies = () => {
    if (dot) {
      setMovieList(saleMovieList);
      setMaxIdx(saleMovieList.length);
      setDot(false);
      document.querySelector('.filter').textContent = 'TOP 5';
    } else {
      const topMovies = saleMovieList.sort((a,b) => b.discount-a.discount).slice(0,5);
      setMovieList(topMovies);
      setMaxIdx(4);
      setDot(true);
      document.querySelector('.filter').textContent = 'ALL';
    }
    slider.current.slickGoTo(0);
  }

  if (!saleMovieList.length) return null;
  return (
    <div className="carouselWrapper">
      <h1>Special Price!!</h1>
      <button onClick={() => filterMovies()} className="filter movie-shadow">TOP 5</button>
      <div className="carouselContainer"
      >
        <Slider ref={slider} className="container"
          centerMode={true}
          slidesToShow={1}
          dots={dot}
          autoplay={true}
          autoplaySpeed={2000}
          afterChange={(event) => {
            setWidth(Math.round((event / maxIdx)*100));
          }}
        >
          {movieList.map((movie, index) =>
            <div
              key={movie.id}
              className={`movieContainer movie-shadow slider`}
              onClick={() => {setClickId(movie.id); setDisp(true);}}
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
        </Slider>
      </div>
      {!dot && <div className="progressBar" onClick={(e) => updateIdx(e)}>
        <div className="innerBar" style={{width: `${width}%`}}></div>
      </div>}
    </div>
  );
};

export default MovieCarousel;