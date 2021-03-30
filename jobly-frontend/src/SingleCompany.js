import JoblyApi from "./API/JoblyApi";
import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { Table, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./CSS/SingleCompany.css";

const SingleCompany = () => {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function getCompany() {
      const newCompany = await JoblyApi.getCompany("bauer-gallagher");
      setCompany(newCompany);
    }
    getCompany();
  }, []);

  if (!company) return <p>Loading!</p>;

  return (
    
    <div className="SingleCompany">
      <Row>
        <Col sm="2">
          <Link to="/companies">
            <button id="backButton">Go back</button>
          </Link>
        </Col>
        <Col sm="8">
          <h1>Careers at {company.name}</h1>
          <br />
        </Col>
      </Row>
      <div className="Jobs">
        <Table striped>
          <tbody>
            {company.jobs.map((job) => (
              <JobCard
                key={job.id}
                title={job.title}
                salary={job.salary}
                equity={job.equity}
                companyName={company.name}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default SingleCompany;
