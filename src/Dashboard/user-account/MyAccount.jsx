import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyBookings from "./MyBookings";
import ProfileSettings from "./ProfileSettings";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import defaultUser from "/user.png"

const MyAccount = () => {
  const { dispatch } = useAuth();
  const [tab, setTab] = useState("bookings");
  const [profile, setProfile] = useState(null);
  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/users/profile/me`
  );
  const { _id, photo, name, email, bloodType } = profile || {};

  useEffect(() => {
    if (data?.data) {
      setProfile(data?.data);
    }
  }, [data]);

  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  const handleUserDelete = async () => {
    try {
      const token = localStorage.getItem("token");

      await fetch(`${BASE_URL}/users/${_id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("token");
      handleLogout();
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error("Failed to Delete User");
    }
  };

  return (
    <section>
      <Helmet>
        <title>VitaCare | Patient Dashboard</title>
      </Helmet>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}

        {error && !loading && <Error errorMessage={error} />}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 lg:gap-10">
            <div 
            className="pb-[50px] py-4 px-[30px] rounded-md bg-[#f3f0f0a8]"
            >
              <div className="flex items-center justify-center">
                <img
                  src={photo || defaultUser}
                  alt=""
                  className="w-[100px] h-[100px] object-cover rounded-full border-2 border-solid
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
                {data?.data?.bloodType && (
                  <p className="text-textColor text-[15px] leading-4 font-medium ">
                    Blood Type:
                    <span className="text-primaryColor ml-1 font-semibold">
                      {bloodType}
                    </span>
                  </p>
                )}
              </div>
              <div className="mt-[50px] md:mt-[70px]">
                <button
                  onClick={handleLogout}
                  className="w-full rounded-md bg-[#181A1E] p-3 text-[16px]
             text-white font-semibold leading-7"
                >
                  Logout
                </button>
                <button
                  onClick={handleUserDelete}
                  className="w-full mt-4 rounded-md bg-red-600 p-3 text-[16px]
             text-white font-semibold leading-7"
                >
                  Delete Account
                </button>
              </div>
            </div>
            <div className="md:col-span-2 md:px-[30px] max-w-full overflow-hidden">
              <div className="mb-6 mt-8 md:mt-0">
                <button
                  onClick={() => setTab("bookings")}
                  className={`${
                    tab === "bookings" &&
                    "bg-primaryColor text-white font-normal"
                  } p-2 mr-5 px-5 rounded-md text-headingColor 
            font-semibold text-[16px] leading-7 border border-solid
             border-primaryColor`}
                >
                  My Bookings
                </button>
                <button
                  onClick={() => setTab("settings")}
                  className={`${
                    tab === "settings" &&
                    "bg-primaryColor text-white font-normal"
                  } p-2 px-5 rounded-md text-headingColor 
            font-semibold text-[16px] leading-7 border border-solid
             border-primaryColor`}
                >
                  Profile Settings
                </button>
              </div>
              {tab === "bookings" && <MyBookings />}
              {tab === "settings" && (
                <ProfileSettings
                  handleProfileUpdate={handleProfileUpdate}
                  user={data?.data}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyAccount;
