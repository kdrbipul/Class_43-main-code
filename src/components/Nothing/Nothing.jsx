import { Link } from 'react-router-dom';
import './Nothing.css'

const Nothing = () => {
    return (
        <div className="container">
            <h2>404 <span>Nothing There to see</span></h2>
            
            <Link to='/home'><button className='btn btn-outline-warning'>Go Back</button></Link>
        </div>
    );
};

export default Nothing;