import { Link } from "react-router-dom";
import logo from "../../assets/images/logoImg.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";

const socialLinks = [
  {
    path: "https://github.com/MdShamimIslam",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/mdshamimslam1897/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.facebook.com/md.shamim.islam.660450",
    icon: <AiFillFacebook className="group-hover:text-white w-4 h-5" />,
  },
];
const quickLink01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about-us",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
];
const quickLink02 = [
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/contact",
    display: "Find a Location",
  },
];


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10 bg-[#8accd71c]">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
          <Link to="/home" className="flex items-center" >
            <img className="w-[60px] md:w-[70px] lg:w-[80px] ml-[-20px] md:ml-[-20px] lg:ml-[-20px] " src={logo} alt="logo" />
            <h3 className="text-xl md:text-2xl ml-[-10px] lg:text-3xl font-bold">VitaCare</h3>
          </Link>

            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4 ">
              Copyright @ {year} developed by Md. Shamim Islam all right
              reserved.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link 
                to={link.path}
                key={index} 
                className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
              <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor ">
                Quick Links
              </h2>
              <ul>
                {quickLink01.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link
                      to={item.path}
                      className="text-[16px] leading-7 font-[400] hover:text-primaryColor  text-textColor"
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          <div>
              <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor ">
              Support
              </h2>
              <ul>
                {quickLink02.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link
                      to={item.path}
                      className="text-[16px] leading-7 font-[400] hover:text-primaryColor  text-textColor"
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
        </div>
      </div>
    </footer>
  );
};

export default Footer;
