import { useState } from "react";
import { Link } from "react-router-dom";
import JoblyApi from "./API/JoblyApi";
import { Button } from "reactstrap";
import "./CSS/Search.css";

const CompanySearch = ({ setCompanies }) => {
  const INITIAL_STATE = {company: ""}

  const [searchData, setSearchData] = useState(INITIAL_STATE);
  const [changedSearch, setChangedSearch] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData((searchData) => ({ ...searchData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    async function companySearch() {
      const companies = await JoblyApi.companySearch(searchData);
      setCompanies(companies);
    }
    companySearch();
    setChangedSearch(true);
  };

  const clearSearch = () => {
    async function companySearch() {
      const companies = await JoblyApi.companySearch(INITIAL_STATE);
      setCompanies(companies);
    }
    companySearch();

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
          value={searchData.company}
          id="company"
          name="company"
          placeholder="Company Name"
          onChange={handleChange}
        />&emsp;
       
        <button type="submit">Search</button>
        <br></br>
      </form>
    </div>
  );
};

export default CompanySearch;
