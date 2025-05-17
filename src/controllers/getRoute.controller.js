import { checkCrossing } from "../utils/checkCrossing.js";
import { getRouteFunc } from "../utils/getRouteFunc.js";
import Response from "../utils/Response.js";

export const getRoute = async (req, res) => {
  try {
    const { coordinates } = req.body;
    let resultCoords = [];
    let totalDistance = 0;
    let distanceUnit = null;
    let crossing = false;
    for (let i = 0; i < coordinates.length - 1; i++) {
      crossing = crossing || checkCrossing(coordinates[i], coordinates[i + 1]);
      const result = await getRouteFunc({
        origin: coordinates[i],
        destination: coordinates[i + 1],
      });

      resultCoords = [...resultCoords, ...result.data.geometry.coordinates];
      totalDistance += Number(result.data.properties.length).toFixed(2);
      if (i === 0) {
        distanceUnit = result.data.properties.units;
      }
    }
    const response = {
      route: resultCoords,
      distance: totalDistance,
      distance_unit: distanceUnit,
      internation_time_crossed : crossing
    };
    const msg = `Route(s) fetched successfully.`;
    return Response.success(res, response, msg);
  } catch (error) {
    return Response.error(res, error.message);
  }
};
