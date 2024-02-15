import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import peliculasImage from '../../images/peliculas.jpg';
import seriesImage from '../../images/series.jpg';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <Link to="/peliculas" className="box" style={{ backgroundImage: `url(${peliculasImage})` }}>
          <h2 className="image-title">Peliculas</h2>
        </Link>
        <Link to="/series" className="box" style={{ backgroundImage: `url(${seriesImage})` }}>
          <h2 className="image-title">Series</h2>
        </Link>
      </div>
    </div>
  );
}

export default Home;