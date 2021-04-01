import "./CSS/JobCard.css";
import { Button } from "reactstrap";
import { useEffect, useState } from "react";
import JoblyApi from "./API/JoblyApi";

const JobCard = ({ id, title, salary, equity, companyName }) => {
  let username = localStorage.getItem("username");
  const [applied, setApplied] = useState(false)

  const clickApply = () => {
    setApplied(!applied)
  }
 

  return (
    <tr className="JobCard">
      <td style={{ width: "30%" }}>
        <h6>
          Job Title: <br /> <span className="notBold">{title}</span>
        </h6>
      </td>
      <td style={{ width: "30%" }}>
        <h6>
          Company: <br /> <span className="notBold">{companyName}</span>
        </h6>
      </td>
      <td style={{ width: "25%" }}>
        <p className="m-1">Salary: {salary ? `$${salary}` : "n/a"}</p>{" "}
        {/* FIXME: convert to dollar display */}
        <p className="m-0">Equity: {equity > 0 ? equity : "n/a"}</p>
      </td>
      <td style={{ width: "15%" }}>
        {applied ? <Button color="secondary" className="button p-1" onClick={clickApply}>Applied</Button> 
        : <Button color="info" className="button p-1" onClick={clickApply}>One-Click Apply</Button>}
      </td>
    </tr>
  );
};

export default JobCard;
