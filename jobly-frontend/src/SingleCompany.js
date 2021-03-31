import JoblyApi from "./API/JoblyApi";
import { useState, useEffect, useContext } from "react";
import JobCard from "./JobCard";
import { Table, Row, Col } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import "./CSS/SingleCompany.css";
import userContext from "./context/UserContext";
import Loading from "./Loading";

const SingleCompany = () => {
  const { companyHandle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function getCompany() {
      const newCompany = await JoblyApi.getCompany(companyHandle);
      setCompany(newCompany);
    }
    getCompany();
  }, []);

  if (!company) return <Loading />;

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
