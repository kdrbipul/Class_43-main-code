import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;