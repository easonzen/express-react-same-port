const { RESTDataSource } = require("apollo-datasource-rest");

class RESTAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:5000/api";
  }

  async getUser(id) {
    return this.get(`/user/${encodeURIComponent(id)}`);
  }
}

module.exports = RESTAPI;
