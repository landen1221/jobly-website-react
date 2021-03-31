import JoblyApi from "./API/JoblyApi";
import { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import { Table } from "reactstrap";
import "./CSS/Companies.css";
import Loading from "./Loading";
import CompanySearch from "./CompanySearch";

const Companies = () => {
  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    async function getCompanies() {
      const allCompanies = await JoblyApi.getCompanies();
      setCompanies(allCompanies);
    }
    getCompanies();
  }, []);

  if (!companies) return <Loading />;

  return (
    <div className="Companies">
      <h1>Companies Currently Hiring</h1>
      <br/>
      <CompanySearch setCompanies={setCompanies} />
      <br/>

      <Table striped>
        <tbody>
          {companies.map((company) => (
            <CompanyCard
              key={company.handle}
              handle={company.handle}
              name={company.name}
              numEmployees={company.num_employees}
              description={company.description}
              logoURL={company.logoUrl}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Companies;
