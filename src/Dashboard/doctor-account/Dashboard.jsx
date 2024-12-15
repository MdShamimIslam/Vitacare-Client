import { useEffect, useState } from "react";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Tabs from "./Tabs";
import { FaInfoCircle } from "react-icons/fa";
import startIcon from "../../assets/images/Star.png";
import DoctorAbout from "../../pages/Doctors/DoctorAbout";
import DoctorProfile from "./DoctorProfile";
import Appointments from "./Appointments";
import { Helmet } from "react-helmet-async";
import defaultImg from "/user.png";

const Dashboard = () => {
  const [tab, setTab] = useState("overview");
  const [profile, setProfile] = useState(null);

  const { data, loading, error } = useFetchData(
    `${BASE_URL}/doctors/profile/me`
  );

  const { photo, specialization, name, averageRating, totalRating, bio } =
    profile || {};

  useEffect(() => {
    if (data?.data) {
      setProfile(data.data);
    }
  }, [data]);

  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  return (
    <section>
      <Helmet>
        <title>VitaCare | Doctor Dashboard</title>
      </Helmet>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}
        {!loading && error && <Error errorMessage={error} />}
        {!loading && !error && (
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] lg:gap-[50px]"
          >
            <Tabs tab={tab} setTab={setTab} />
            <div className="lg:col-span-2">
              {data?.data?.isApproved === "pending" && (
                <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                  <FaInfoCircle className="flex-shrink-0 w-5 h-5" />
                  <span className="sr-only">Info</span>
                  <div className="ml-3 text-sm font-medium">
                    To get approval please complete your profile. We&apos;ll
                    review manually and approv within 3 days.
                  </div>
                </div>
              )}
              <div
                className={`${
                  data?.data?.isApproved === "pending" ? "mt-8" : ""
                }`}
              >
                {tab === "overview" && (
                  <div>
                    <div className="flex items-center gap-4 mb-10">
                      <img
                        src={photo || defaultImg}
                        alt="user-image"
                        className="w-[200px] rounded h-[220px] lg:h-[220px]
                         md:h-[165px] object-cover"
                      />
                      <div>
                        {
                          specialization &&  <span
                          className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 
                          lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold "
                        >
                          {specialization}
                        </span>
                        }
                       
                        <h3
                          className="text-[18px] leading-9 font-bold
                         text-textColor mt-3 "
                        >
                          {name}
                        </h3>
                        <div className="flex items-center gap-[6px]">
                          <span
                            className="flex items-center gap-[6px] text-headingColor 
                          text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold "
                          >
                            <img src={startIcon} alt="" /> {averageRating}
                          </span>
                          <span
                            className=" text-textColor 
                          text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold "
                          >
                            ({totalRating})
                          </span>
                        </div>
                        <p className="text__para font-[15px] lg:max-w-[390px] leading-6">
                          {bio}
                        </p>
                      </div>
                    </div>
                    <DoctorAbout doctorInfo={profile} />
                  </div>
                )}
                {tab === "appointments" && (
                  <Appointments appointments={data?.data?.appointments} />
                )}
                {tab === "settings" && (
                  <DoctorProfile
                    handleProfileUpdate={handleProfileUpdate}
                    doctorData={profile}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
