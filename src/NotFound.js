import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
    <dic className="not-foound">
        <h2>Sorry</h2>
        <p>That page Cannot be Found</p>
        <Link to='/'>Back To The Home Page......</Link>
    </dic>
    );
}
 
export default NotFound;