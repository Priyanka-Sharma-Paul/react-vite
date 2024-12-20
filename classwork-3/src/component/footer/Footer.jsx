import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";




const Footer = () => {
    return (
        <>
        <div>
        <div>
            <img src=""></img>
        </div>
        <div>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p> 
        </div>
        <div>
            <a href="">About</a>
            <a href="">Careers</a>
            <a href="">History</a>
            <a href="">Services</a>
            <a href="">Projects</a>
            <a href="">Blog</a>
        </div>
        <div>
            <a><FaFacebook /></a>
            <a><FaInstagram /></a>
            <a><FaTwitter /></a>
            <a><FaGithub /></a>
            <a><CiBasketball /></a>
        </div>
        </div>
        
        
        </>
    )

};
export default Footer;