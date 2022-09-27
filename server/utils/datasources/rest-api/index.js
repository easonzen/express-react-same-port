const { RESTDataSource } = require("apollo-datasource-rest");

class RESTAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:5000/api";
  }

  async getUser(id) {
    const {
      id: userId,
      name,
      age,
      companyId,
    } = await this.get(`/user/${encodeURIComponent(id)}`);

    const { name: companyName } = await this.get(
      `/company/${encodeURIComponent(companyId)}`
    );

    return {
      id: userId,
      name,
      age,
      company: {
        id: companyId,
        name: companyName,
      },
    };
  }
}

module.exports = RESTAPI;
