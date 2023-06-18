class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }
  //Get all list
  getFullList() {
    return axios
      .get(`${this.BASE_URL}/characters`)
      .then((response) => {
        // console.log("Response data====>>>>", response.data);
        return response.data;
      })
      .catch((err) => console.log(err));
  }
  //Get one user with ID
  getOneRegister(characterId) {
    return axios
      .get(`${this.BASE_URL}/characters/${characterId}`)
      .then((response) => {
        // console.log("Response data====>>>>", response.data);

        return response.data;
      })
      .catch((err) => console.log(err));
  }
  //Create a user with data
  createOneRegister(characterInfo) {
    return axios
      .post(`${this.BASE_URL}/characters`, characterInfo)
      .then((response) => {
        // console.log("Response data====>>>>", response.data);
        return response.data;
      })
      .catch((err) => console.log(err));
  }

  updateOneRegister(characterId, characterInfo) {
    return axios
      .put(`${this.BASE_URL}/characters/${characterId}`, characterInfo)
      .then((response) => {
        if (response.data.id !== characterId) {
          return "Character not found";
        } else {
          return response.data;
        }
      })
      .catch((err) => console.log(err));
  }

  deleteOneRegister(characterId) {
    return axios
      .delete(`${this.BASE_URL}/characters/${characterId}`)
      .then((response) => {
        if (!response.data) {
          return "Character not found";
        } else {
          return "Character has been successfully deleted";
        }
      })
      .catch((err) => console.log(err));
  }
}

// module.exports = APIHandler;
