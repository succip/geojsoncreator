import Toastify from "toastify-js";
import downloadGeoJSON from "../utils/downloadGeoJSON";

export default (pkg) => {
  if (pkg.pointsGeoJSON.features.length) downloadGeoJSON(pkg.pointsGeoJSON, "points");
  if (pkg.linesGeoJSON.features.length) downloadGeoJSON(pkg.linesGeoJSON, "lines");
  if (pkg.polygonsGeoJSON.features.length) downloadGeoJSON(pkg.polygonsGeoJSON, "polygons");
  if (!pkg.pointsGeoJSON.features.length && !pkg.linesGeoJSON.features.length && !pkg.polygonsGeoJSON.features.length) {
    Toastify({
      text: "No geometry found!",
      gravity: "bottom",
      position: "left",
    }).showToast();
  }
};
