import { dataRef } from "../config/firebase";
import { FETCH_DATA } from "./types";

export const getData = () => dispatch => {
  //let data = [];
  dataRef.on("value", snap => {
    /*data = snap.val();
    data.sort(function(x, y) {
      if (x.Name > y.Name) {
        return 1;
      } else {
        return -1;
      }*/
    dispatch({
      type: FETCH_DATA,
      payload: snap.val()
    });
  });
};
