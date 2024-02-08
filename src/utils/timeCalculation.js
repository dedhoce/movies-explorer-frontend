export default function timeCalculation(duration) {
  const hours = Math.floor(duration / 60);
  const minuts = duration - hours * 60;
  
  return hours !== 0 ? `${hours}ч ${minuts}м` : `${minuts}м`;
}
