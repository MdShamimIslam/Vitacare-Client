import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/images/logoImg.png";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import defaultUser from "/user.png";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/about-us",
    display: "About Us",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token, logout } = useAuth();

  const { data } = useFetchData(`${BASE_URL}/users/profile/me`);
  const { data:doctorData } = useFetchData(`${BASE_URL}/doctors/profile/me`);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (headerRef.current) {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          headerRef.current.classList.add("sticky__header");
        } else {
          headerRef.current.classList.remove("sticky__header");
        }
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header flex items-center" ref={headerRef}>
      {/* container */}
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link to="/home" className="flex items-center">
            <img
              className="w-[60px] md:w-[70px] lg:w-[80px] ml-[-20px] md:ml-[-20px] lg:ml-[-20px] "
              src={logo}
              alt="logo"
            />
            <h3 className="text-xl md:text-2xl ml-[-10px] lg:text-3xl font-bold">
              VitaCare
            </h3>
          </Link>
          {/* menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor "
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* nav right */}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div className="flex items-center gap-4">
                <button
                  className=" hover:text-primaryColor text-textColor"
                  onClick={logout}
                >
                  Logout
                </button>
                <Link
                  to={`${
                    role === "doctor"
                      ? "/doctors/profile/me"
                      : role === "patient"
                      ? "/users/profile/me"
                      : "admin/profile/me"
                  }`}
                >
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img
                      title={user?.name}
                      className="w-full h-full object-cover rounded-full"
                      src={data?.data?.photo || doctorData?.data?.photo || defaultUser}
                      alt="user-image"
                    />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]"
              >
                Login
              </Link>
            )}

            <span className="lg:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
