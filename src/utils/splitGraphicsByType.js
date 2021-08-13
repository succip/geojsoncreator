import convertToGeoJSON from "./convertToGeoJSON";
import mergeGeoJSON from "./mergeGeoJSON";

export default async (gLayer) => {
  let points = [];
  let lines = [];
  let polygons = [];

  for (const item of gLayer.graphics.items) {
    const geoJSONItem = await convertToGeoJSON(item.geometry);
    const featureDefaults = {
      type: "Feature",
      geometry: geoJSONItem,
    };
    if (item.geometry.type === "point") {
      points.push({
        ...featureDefaults,
        properties: {},
      });
    } else if (item.geometry.type === "polyline") {
      lines.push({
        ...featureDefaults,
        properties: {},
      });
    } else {
      polygons.push({
        ...featureDefaults,
        properties: {},
      });
    }
  }

  return {
    pointsGeoJSON: mergeGeoJSON(points),
    linesGeoJSON: mergeGeoJSON(lines),
    polygonsGeoJSON: mergeGeoJSON(polygons),
  };
};
