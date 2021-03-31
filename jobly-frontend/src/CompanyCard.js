import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./CSS/CompanyCard.css";

const CompanyCard = ({ handle, name, numEmployees, description, logoURL }) => {
  let usableImg = "";

  logoURL
    ? (usableImg = "." + logoURL.substring(6))
    : (usableImg = "./logo5.png");

  return (
    <>
      <tr className="CompanyCard">
        <td>
          <img src={usableImg ? usableImg : null} alt={`Logo for ${name}`} />
        </td>
        <td className="centerColumn">
          <h5 className="m-0 p-0">{name}</h5>
          <br />
          <p className="m-0">{description}</p>
        </td>
        <td>
          <Link to={`companies/${handle}`}>
            <Button color="info" className="button p-2">View Jobs</Button>
          </Link>
        </td>
      </tr>
   </>
  );
};

export default CompanyCard;
