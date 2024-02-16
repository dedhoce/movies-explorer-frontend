import { useState, useEffect } from 'react';
import { useWindowDimensions } from './useWindowDimensions';
import {
  VISIBLE_MOVIES_IN_ROW_320_500,
  VISIBLE_ROW_MOVIES_320_500,
  VISIBLE_ADD_ROW_MOVIES_320_500,
  VISIBLE_MOVIES_IN_ROW_501_768,
  VISIBLE_ROW_MOVIES_501_768,
  VISIBLE_ADD_ROW_MOVIES_501_768,
  VISIBLE_MOVIES_IN_ROW_769_1280,
  VISIBLE_ROW_MOVIES_769_1280,
  VISIBLE_ADD_ROW_MOVIES_769_1280,
} from '../../constants/visibleMovies';

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
    if (width < 768 && width >= 320) {      
      setVisibleMovies(VISIBLE_MOVIES_IN_ROW_320_500*VISIBLE_ROW_MOVIES_320_500);
      setVisibleMoviesStill(
        VISIBLE_MOVIES_IN_ROW_320_500*VISIBLE_ADD_ROW_MOVIES_320_500);
    } 
    if (width <= 1137 && width >= 768) {      
      setVisibleMovies(VISIBLE_MOVIES_IN_ROW_501_768*VISIBLE_ROW_MOVIES_501_768);
      setVisibleMoviesStill(
        VISIBLE_MOVIES_IN_ROW_501_768*VISIBLE_ADD_ROW_MOVIES_501_768);
    }
    if (width >= 1138) {      
      setVisibleMovies(VISIBLE_MOVIES_IN_ROW_769_1280*VISIBLE_ROW_MOVIES_769_1280);
      setVisibleMoviesStill(
        VISIBLE_MOVIES_IN_ROW_769_1280*VISIBLE_ADD_ROW_MOVIES_769_1280);
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
