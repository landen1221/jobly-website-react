import "./CSS/JobCard.css";
import { Button } from "reactstrap";

const JobCard = ({ title, salary, equity, companyName }) => {
  return (
    <tr className="JobCard">
      <td style={{width: '25%'}}>
        <h6>Job Title: <br/> <span className="notBold">{title}</span></h6>
      </td>
      <td style={{width: '25%'}}>
      <h6>Company: <br/> <span className="notBold">{companyName}</span></h6>
      </td>
      <td style={{width: '35%'}}>
        <p className="m-1">Salary: ${salary}</p> {/* FIXME: convert to dollar display */}
        <p className="m-0">Equity: {equity > 0 ? equity : "n/a"}</p>
      </td>
      <td style={{width: '15%'}}>
        <Button className="button p-1">One-Click Apply</Button>
      </td>
    </tr>
    
  );
};

export default JobCard;
