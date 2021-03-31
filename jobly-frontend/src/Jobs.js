import JoblyApi from "./API/JoblyApi";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { Table } from 'reactstrap';
import JobCard from './JobCard'
import SearchBar from "./JobSearch";
import "./CSS/Jobs.css"

const Jobs = () => {
  const [jobs, setJobs] = useState("");

  useEffect(() => {
    async function getJobs() {
      const allJobs = await JoblyApi.getJobs();
      setJobs(allJobs);
      console.log(allJobs)
    }
    getJobs();
  }, []);

  if (!jobs) return <Loading />;

  return (
    <div className="Jobs">
      <h1>Avaialble Jobs!</h1>

      <br />
      <SearchBar setJobs={setJobs}/>
      <br />

      <Table striped>
        <tbody>
          {jobs.map(job => <JobCard key={job.id} title={job.title} salary={job.salary} equity={job.equity} companyName={job.companyName} />)}
        </tbody>
      </Table>
      
    </div>
  );
};

export default Jobs;
