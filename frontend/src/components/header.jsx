import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <Navbar className="border-b-2">
            <Link to='/' className="self-center whitespace-nowrap">
                <span>Vuthy's</span>
                Blog
            </Link>
        </Navbar>
     );
}
 
export default Header;