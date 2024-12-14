import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AdminTab = ({ tab, setTab, photo, name, email }) => {
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });

    navigate("/login");
  };

  return (
    <div
      className=" w-full md:w-[280px] lg:w-[400px] mx-auto lg:flex flex-col 
    p-[30px] bg-white shadow-panelShadow lg:ml-[-80px]
    items-center h-max rounded-md"
    >
      <div className=" mb-8 lg:mb-12">
        <div className="flex items-center justify-center">
          <img
            src={photo}
            alt="admin-photo"
            className="w-[150px] h-[150px] object-cover rounded-full border-2 border-solid
                 border-primaryColor"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-[18px] leading-[30px] text-headingColor font-bold ">
            {name}
          </h3>
          <p className="text-textColor text-[15px] leading-6 font-medium ">
            {email}
          </p>
        </div>
      </div>
      <button
        onClick={() => setTab("allPatients")}
        className={`${
          tab === "allPatients"
            ? "bg-indigo-100 text-primaryColor"
            : "bg-transparent text-textColor"
        } w-full btn mt-0 rounded-md`}
      >
        All Patients
      </button>
      <button
        onClick={() => setTab("allDoctors")}
        className={`${
          tab === "allDoctors"
            ? "bg-indigo-100 text-primaryColor"
            : "bg-transparent text-textColor"
        } w-full btn mt-0 rounded-md `}
      >
        All Doctors
      </button>
      <div className=" mt-10 md:mt-6 lg:mt-10 w-full">
        <button
          onClick={handleLogout}
          className="w-full rounded-md bg-[#181A1E] p-3 text-[16px]
           text-white font-semibold leading-7"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminTab;
