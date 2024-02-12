import { useState, useEffect } from 'react';
import { useWindowDimensions } from './useWindowDimensions';
import {
  VISIBLE_MOVIES_320_500,
  VISIBLE_MOVIES_STILL_320_500,
  VISIBLE_MOVIES_500_768,
  VISIBLE_MOVIES_STILL_500_768,
  VISIBLE_MOVIES_768_1280,
  VISIBLE_MOVIES_STILL_768_1280,
} from '../../constants/visibleMovies'

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
      setVisibleMovies(VISIBLE_MOVIES_320_500);
      setVisibleMoviesStill(VISIBLE_MOVIES_STILL_320_500);
    } else if (width <= 768 && width >= 500) {
      setVisibleMovies(VISIBLE_MOVIES_500_768);
      setVisibleMoviesStill(VISIBLE_MOVIES_STILL_500_768);
    } else {
      setVisibleMovies(VISIBLE_MOVIES_768_1280);
      setVisibleMoviesStill(VISIBLE_MOVIES_STILL_768_1280);
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
