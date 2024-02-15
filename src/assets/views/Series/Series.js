import React, { useState, useEffect } from "react";
import data from "../../../feed/sample.json";
import "./Series.css";
import Carga from "../../components/Carga/Carga";
import fallbackImage from "../../images/not_found.png";

function Series() {
  const [yearFilter, setYearFilter] = useState("");
  const [resultsPerPage, setResultsPerPage] = useState(5);
  const series = data.entries
    .filter((item) => item.programType === "series")
    .sort((a, b) => a.title.localeCompare(b.title));

  const yearsAvailable = Array.from(
    new Set(series.map((item) => item.releaseYear))
  );
  const filteredSeries = series.filter(
    (item) => yearFilter === "" || item.releaseYear === Number(yearFilter)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastSeries = currentPage * resultsPerPage;
  const indexOfFirstSeries = indexOfLastSeries - resultsPerPage;
  const currentSeries = filteredSeries.slice(
    indexOfFirstSeries,
    indexOfLastSeries
  );
  const totalPages = Math.ceil(filteredSeries.length / resultsPerPage);
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  function mostrarInformacion(serie) {
    setSelectedSeries(serie);
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
      <div className="series-container">
        {currentSeries.map((serie, index) => (
          <div
            key={index}
            className="card"
            onClick={() => mostrarInformacion(serie)}
          >
            <img
              src={serie.images["Poster Art"].url}
              alt={serie.title}
              onError={handleImageError}
            />
            <h2>{serie.title}</h2>
            <p>Año de lanzamiento: {serie.releaseYear}</p>
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
      {modalOpen && selectedSeries && (
        <div className="modal">
          <div className="modal-content">
            <img
              className="modal-image"
              src={selectedSeries.images["Poster Art"].url}
              alt={selectedSeries.title}
              onError={handleImageError}
            />
            <h2>{selectedSeries.title}</h2>
            <p>Año de lanzamiento: {selectedSeries.releaseYear}</p>
            <p>{selectedSeries.description}</p>
            <button onClick={() => setModalOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Series;
