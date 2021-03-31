import { useState } from "react";
import { Link } from "react-router-dom";
import JoblyApi from "./API/JoblyApi";
import { Button } from "reactstrap";
import "./CSS/Search.css";

const JobSearch = ({ setJobs }) => {
  const INITIAL_STATE = {
    title: "",
    minSalary: "",
    hasEquity: false,
  };
  const [searchData, setSearchData] = useState(INITIAL_STATE);
  const [changedSearch, setChangedSearch] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData((searchData) => ({ ...searchData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchData);
    async function jobSearch() {
      const jobs = await JoblyApi.jobSearch(searchData);
      setJobs(jobs);
    }
    jobSearch();
    setChangedSearch(true);
  };

  const clearSearch = () => {
    async function jobSearch() {
      const jobs = await JoblyApi.jobSearch(INITIAL_STATE);
      setJobs(jobs);
    }
    jobSearch();

    setSearchData(INITIAL_STATE);
    setChangedSearch(false);
  };

  return (
    <div className="Search">
      {changedSearch ? (
        <Button color="link" id="clearSearch" onClick={clearSearch}>
          <u>Clear Search</u> &emsp;
        </Button>
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchData.title}
          id="title"
          name="title"
          placeholder="Job Title/Keyword"
          onChange={handleChange}
        />
        &emsp;
        <input
          type="text"
          value={searchData.minSalary}
          id="minSalary"
          name="minSalary"
          placeholder="Minimum Salary"
          onChange={handleChange}
        />
        &emsp;
        <input
          type="checkbox"
          id="hasEquity"
          name="hasEquity"
          value="true"
          onChange={handleChange}
        />
        <label for="hasEquity">&emsp;Equity Offered</label>&emsp;
        <button type="submit">Search</button>
        <br></br>
      </form>
    </div>
  );
};

export default JobSearch;
