
import { BASE_URL } from "../../config";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Tabs = ({ tab, setTab }) => {
  const { dispatch, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });

    navigate("/login");
  };

  const handleDeleteDoctor = async () => {
    try {
      const token = localStorage.getItem("token");

      await fetch(`${BASE_URL}/doctors/${user?._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("token");
      handleLogout();
      toast.success("Doctor deleted successfully");
    } catch (error) {
      toast.error("Failed to Delete Doctor");
    }
  };



  return (
    <div
      className=" md:w-[400px] mb-6 lg:w-[400px] mx-auto lg:flex flex-col 
      p-[30px] bg-white shadow-panelShadow lg:ml-[-80px]
      items-center h-max rounded-md"
    >
      <button
        onClick={() => setTab("overview")}
        className={`${
          tab === "overview"
            ? "bg-indigo-100 text-primaryColor"
            : "bg-transparent text-textColor"
        } w-full btn mt-0 rounded-md `}
      >
        Overview
      </button>
      <button
        onClick={() => setTab("appointments")}
        className={`${
          tab === "appointments"
            ? "bg-indigo-100 text-primaryColor"
            : "bg-transparent text-textColor"
        } w-full btn mt-0 rounded-md `}
      >
        Appointments
      </button>
      <button
        onClick={() => setTab("settings")}
        className={`${
          tab === "settings"
            ? "bg-indigo-100 text-primaryColor"
            : "bg-transparent text-textColor"
        } w-full btn mt-0 rounded-md `}
      >
        Profile
      </button>
      <div className="mt-[50px] w-full">
        <button
          onClick={handleLogout}
          className="w-full rounded-md bg-[#181A1E] p-3 text-[16px]
             text-white font-semibold leading-7"
        >
          Logout
        </button>
        <button
        onClick={handleDeleteDoctor}
          className="w-full mt-4 rounded-md bg-red-600 p-3 text-[16px]
             text-white font-semibold leading-7"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Tabs;
