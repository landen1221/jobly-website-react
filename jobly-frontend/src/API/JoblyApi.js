import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interacting with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // obviously, you'll add a lot here ...

  static async getCompanies() {
    let res = await this.request(`companies/`);
    console.log(res)
    return res.companies;
  }

  static async getJobs() {
    let res = await this.request(`jobs/`);
    console.log(res)
    return res.jobs;
  }

  // expects { username, password, firstName, lastName, email }
  static async registerUser(data) {
    let res = await this.request('auth/register', data, 'post')
    console.log(res)
    return res.token;  
  }

  // expects {username, password}
  static async loginUser(data) {
    let res = await this.request('auth/token', data, 'post')
    return res.token
  }

  static async jobSearch({title, hasEquity, minSalary}) {
    let url = 'jobs?'
    if (title) {
      url = url + `title=${title}&`
    }

    if (hasEquity) {
      url = url + `hasEquity=${hasEquity}&`
    }

    if (minSalary) {
      url = url + `minSalary=${minSalary}`
    }

    let res = await this.request(url)
    return res.jobs

  }

  static async companySearch({company}) {
    let url = 'companies?'
    if (company) {
      url = url + `name=${company}`
    }
    console.log(url)
    let res = await this.request(url)
    return res.companies
  }

  static async getUserDetails(username){
    let res = await this.request(`users/${username}`)
    return res.user
  }

  static async editUserDetails(username, data) {
    delete data.username
    delete data.isAdmin
    delete data.applications
    console.log(data)
    let res = await this.request(`users/${username}`, data, 'patch')
    alert('profile successfully updated')
    return res.user
    
  }

  static async applyToJob(username, jobID) {
    let res = await this.request(`/users/${username}/jobs/${jobID}`, {}, 'post')
    console.log(res)
    return res
  }

}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
