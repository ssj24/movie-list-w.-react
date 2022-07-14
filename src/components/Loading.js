import React from 'react';
import './Loading.css'
const Loading = () => {

  return (
    <div className="loadingPage">
      <span>
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </span>
      NOW LOADING
    </div>
  );
};

export default Loading;