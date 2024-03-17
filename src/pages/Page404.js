import { Link } from 'react-router-dom';
import ErrorMessage from "../components/errorMessage/ErrorMessage";

const Page404 = () => {

   return (
      <>
         <ErrorMessage/>
         <p style={{"textAlign": "center", "fontSize": "28px", "fontWeight": 700}}>Error: 404 - Page not found</p>
         <Link style={{"display": "block", "textAlign": "center", "fontSize": "18px", "fontWeight": 700}} to="/">Go to Home page</Link>
         
      </>
   )
}

export default Page404;