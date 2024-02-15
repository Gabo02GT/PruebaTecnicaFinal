import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies, setSeries } from './programSlice';
import data from '../../../../feed/sample.json';
function Program() {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.program.movies);
  const series = useSelector(state => state.program.series);

  useEffect(() => {
    dispatch(setMovies(data.movies));
    dispatch(setSeries(data.series));
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => console.log(movies)}>Películas</button>
      <button onClick={() => console.log(series)}>Series</button>
    </div>
  );
}

export default Program;