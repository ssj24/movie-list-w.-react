import React from 'react';
import left from '../assets/left.png';
import right from '../assets/right.png';


const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);
  return (
    <div>
      <nav>
        <button onClick={() => setPage(page - 1)} disabled = {page === 1} className="btn btn-prev">
          <img src={left} alt="이전" />
        </button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button
              key = {i + 1}
              onClick={() => setPage(i + 1)}
              aria-current = {page === i + 1 ? "page" : null}
              className="btn"
            >
              {i + 1}
            </button>
          ))
        }
        <button onClick={() => setPage(page + 1)} disabled={page === numPages} className="btn btn-next">
          <img src={right} alt="다음" />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;