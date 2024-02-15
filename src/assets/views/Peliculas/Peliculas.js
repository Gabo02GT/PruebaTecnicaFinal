import React, { useState, useEffect } from "react";
import data from "../../../feed/sample.json";
import "./Peliculas.css";
import Carga from "../../components/Carga/Carga";
import fallbackImage from "../../images/not_found.png";

function Peliculas() {
  const [yearFilter, setYearFilter] = useState("");
  const [resultsPerPage, setResultsPerPage] = useState(5);
  const peliculas = data.entries
    .filter((item) => item.programType === "movie")
    .sort((a, b) => a.title.localeCompare(b.title));

  const yearsAvailable = Array.from(
    new Set(peliculas.map((item) => item.releaseYear))
  );
  const filteredMovies = peliculas.filter(
    (item) => yearFilter === "" || item.releaseYear === Number(yearFilter)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastMovie = currentPage * resultsPerPage;
  const indexOfFirstMovie = indexOfLastMovie - resultsPerPage;
  const currentMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );
  const totalPages = Math.ceil(filteredMovies.length / resultsPerPage);
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  function mostrarInformacion(pelicula) {
    setSelectedMovie(pelicula);
    setModalOpen(true);
  }

  if (isLoading) {
    return <Carga />;
  }

  return (
    <div className="bodyy">
      <select
        value={yearFilter}
        onChange={(e) => setYearFilter(e.target.value)}
      >
        <option value="">Filtrar por año</option>
        {yearsAvailable
          .sort((a, b) => a - b)
          .map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
      </select>
      <select
        value={resultsPerPage}
        onChange={(e) => setResultsPerPage(Number(e.target.value))}
      >
        <option value="5">Mostrar 5 resultados</option>
        <option value="10">Mostrar 10 resultados</option>
        <option value="20">Mostrar 20 resultados</option>
      </select>
      <div className="peliculas-container">
        {currentMovies.map((pelicula, index) => (
          <div
            key={index}
            className="card"
            onClick={() => mostrarInformacion(pelicula)}
          >
            <img
              src={pelicula.images["Poster Art"].url}
              alt={pelicula.title}
              onError={handleImageError}
            />
            <h2>{pelicula.title}</h2>
            <p>Año de lanzamiento: {pelicula.releaseYear}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(totalPages).keys()].map((number) => (
          <button key={number} onClick={() => setCurrentPage(number + 1)}>
            {number + 1}
          </button>
        ))}
      </div>
      {modalOpen && selectedMovie && (
        <div className="modal">
          <div className="modal-content">
            <img
              className="modal-image"
              src={selectedMovie.images["Poster Art"].url}
              alt={selectedMovie.title}
              onError={handleImageError}
            />
            <h2>{selectedMovie.title}</h2>
            <p>Año de lanzamiento: {selectedMovie.releaseYear}</p>
            <p>{selectedMovie.description}</p>
            <button onClick={() => setModalOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Peliculas;
