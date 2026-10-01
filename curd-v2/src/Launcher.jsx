import { Routes ,Route,Link} from "react-router-dom";
import { Home } from "./Home";
import {Login} from "./Login.jsx"
import Product from "./Product";
import { About } from "./About";
import { Protected } from "./Protected";
export const Launcher = () => {

    return (

        <>
        <div className="container">
            
                <Link to="/home" className="btn btn-primary">Home</Link> |
                <Link to="/about" className="btn btn-primary">About</Link> |
                <Link to="/login" className="btn btn-primary">login</Link> |
                <Link to="/products" className="btn btn-primary">Product</Link> |
        </div>
                <Routes>
                    <Route path="/home"element={<Home/>}/>
                    <Route path="/"element={<Home/>}/>
                    <Route path="/login"element={<Login/>}/>
                    <Route path="/products"element={<Protected><Product/></Protected>}/>
                    <Route path="/About"element={<About/>}/>
                    <Route path="*"element={<h1>Page not Found !</h1>}/>
                </Routes>
            
        </>);
}