import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./CSS/CompanyCard.css";

const CompanyCard = ({ handle, name, numEmployees, description, logoURL }) => {
    let usableImg = '';

    if (logoURL) {
        usableImg = '.' + logoURL.substring(6)
    } else {
        usableImg = './logo5.png'
    }
    
  return (
    <tr className="CompanyCard">
        <td>
            <img src={usableImg ? usableImg : null} alt={`Logo for ${name}`}/>
        </td>
      <td className="centerColumn">
        <h5 className="m-0 p-0">{name}</h5>
        <br />
        <p className="m-0">{description}</p>
      </td>
      <td>
        <Link to={`companies/${handle}`}>
          <Button className="button p-1">View Jobs</Button>
        </Link>
      </td>
    </tr>
  );
};

export default CompanyCard;
