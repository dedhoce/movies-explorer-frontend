import './ButtonStill.css';

export default function ButtonStill({onClick, isActiveButtonStill}) {
  
  return (
    <div className={`still ${!isActiveButtonStill ? 'still_unvisible' : ''}`}>
      <button onClick={onClick} className="still__button">Еще</button>
    </div>
  );
}
