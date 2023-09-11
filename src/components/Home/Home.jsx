import { NavLink } from 'react-router-dom';
import IMG from '../../assets/Group 12.jpg'
import './Home.css';

const Home = () => {
    return (
        <>
        <div className='home container'>
            <div className="home_content">
                <h4>Sale Up to 70% off</h4>
                <h1>New Collection For Fall</h1>
                <p>Discover all the new arrivals of ready-to-wear collection</p>
                <NavLink to='/product'><button className='btn btn_home'>Shop Now</button></NavLink>
            </div>
            <div className="home_img">
                <img src={IMG} alt="" />
            </div>
        </div>
        
            
        </>
    );
};

export default Home;