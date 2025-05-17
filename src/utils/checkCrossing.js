export const checkCrossing = (origin, destination) => {
  const [originLon, originLat] = origin;
  const [destinationLon, destinationLat] = destination;
  return Math.abs(originLon - destinationLon) > 180;
};
