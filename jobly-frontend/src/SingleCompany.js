import JoblyApi from "./JoblyAPI"
import { useState, useEffect} from 'react'

const SingleCompany = () => {
  const [company, setCompany] = useState(null)
  

  useEffect(() => {
    async function getCompany() {
      const newCompany = await JoblyApi.getCompany('bauer-gallagher')
      setCompany(newCompany)
    }
    getCompany()
    
  }, []) 

  console.log(company)

  return (
      <div>
        <h1>Single Company</h1>
        <p>Company: {company}</p>
      </div>
    );
  };
  
  export default SingleCompany;
  