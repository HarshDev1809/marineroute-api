import Response from "../utils/Response.js";

export const validateCoordinates = (req, res, next) => {
  try {
    const { coordinates } = req.body;

    if (!Array.isArray(coordinates)) {
      const error = `Invalid coordinates array. Expected format: [[originLon, originLat], [destinationLon, destinationLat]]`;
      const msg = `Api was rejected due to invalid payload. Kindly check the payload.`;
      return Response.reject(res, error, msg);
    }
    if (coordinates.length < 2) {
      const error = `Invalid coordinates array length. Requires at least 2 Coordinates,but got ${coordinates.length} coordinates.`;
      const msg = `Api was rejected due to invalid payload. Kindly check the payload.`;
      return Response.reject(res, error, msg);
    }
    for (let i = 0; i < coordinates.length; i++) {
      const coordinate = coordinates[i];

      if (!Array.isArray(coordinate) || coordinate.length !== 2) {
        const error = `Invalid coordinate at index ${i}. Expected format: [lon, lat], got ${JSON.stringify(
          coordinate
        )} instead`;
        const msg = `Api was rejected due to invalid payload. Kindly check the payload.`;
        return Response.reject(res, error, msg);
      }

      const [lon, lat] = coordinate;

      if (
        typeof lon !== "number" ||
        isNaN(lon) ||
        typeof lat !== "number" ||
        isNaN(lat)
      ) {
        const error = `Invalid number in coordinate at index ${i}. Got [${lon}, ${lat}]`;
        const msg = `Api was rejected due to invalid payload. Kindly check the payload.`;
        return Response.reject(res, error, msg);
      }

      if (lon < -180 || lon > 180 || lat < -90 || lat > 90) {
        const error = `Coordinate out of range at index ${i}. Longitude must be between -180 and 180, latitude between -90 and 90. Got [${lon}, ${lat}]`;
        const msg = `Api was rejected due to invalid payload. Kindly check the payload.`;
        return Response.reject(res, error, msg);
      }
    }
    next();
  } catch (error) {
    return Response.error(res, error.message);
  }
};
