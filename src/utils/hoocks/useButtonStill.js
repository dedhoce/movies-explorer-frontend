import { useState, useEffect } from 'react';
import { useWindowDimensions } from './useWindowDimensions';

function useButtonStill(resultSearchedMovies) {
  const { width } = useWindowDimensions();
  // колличество отображаемых видео
  const [visibleMovies, setVisibleMovies] = useState(0);
  // колличество видео, добавляемых кнопкой "Еще"
  const [visibleMoviesStill, setVisibleMoviesStill] = useState(0);
  // активность кнопки "Еще", зависит от сравнения отрисованных видео с колличеством видео в объекте
  const [isActiveButtonStill, setIsActiveButtonStill] = useState(true);

  function handleVisibleMoviesStill() {
    setVisibleMovies(visibleMovies + visibleMoviesStill);
  }

  useEffect(() => {
    if (visibleMovies >= resultSearchedMovies.length) {
      setIsActiveButtonStill(false);
    } else {
      setIsActiveButtonStill(true);
    }
  }, [visibleMovies, resultSearchedMovies]);

  useEffect(() => {
    if (width < 500 && width >= 320) {
      setVisibleMovies(5);
      setVisibleMoviesStill(2);
    } else if (width <= 768 && width >= 500) {
      setVisibleMovies(8);
      setVisibleMoviesStill(3);
    } else {
      setVisibleMovies(12);
      setVisibleMoviesStill(4);
    }
  }, [width]);

  return {
    handleVisibleMoviesStill,
    isActiveButtonStill,
    visibleMovies,
    visibleMoviesStill,
  };
}

export { useButtonStill };
