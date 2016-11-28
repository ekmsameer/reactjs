import axios from "axios";
// fetch data from server
export function fetchDataFromServer() {
  return function(dispatch) {
    axios.get("http://localhost:3001/api")
      .then((response) => {
        dispatch({type: "FETCH_DATA_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_DATA_REJECTED", payload: err})
      })
  }
}

// delete data from server with id
export function deleteData(id) {
  return function(dispatch){
    axios.delete("http://localhost:3001/api/"+id)
      .then((response) => {
        dispatch({type: "FETCH_DATA_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_DATA_REJECTED", payload: err})
      })
  }
}
