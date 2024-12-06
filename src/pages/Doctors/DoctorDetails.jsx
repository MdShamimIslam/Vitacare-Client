import { useEffect, useState } from "react";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import { useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  const { id } = useParams();
  const [doctorInfo, setDoctorInfo] = useState(null);

  const { data, loading, error } = useFetchData(`${BASE_URL}/doctors/${id}`);

  const {
    photo,
    specialization,
    name,
    averageRating,
    totalRating,
    bio,
    reviews,
    _id,
    ticketPrice,
    timeSlots,
  } = doctorInfo || {};

  useEffect(() => {
    if (data?.data) {
      setDoctorInfo(data.data);
    }
  }, [data]);

  const handleNewReview = (data) => {
    const updatedReviews = [...reviews, data];

    const totalRating = updatedReviews.length;
    const averageRating = (
      updatedReviews.reduce((sum, review) => sum + review.rating, 0) / totalRating
    );

    setDoctorInfo({
      ...doctorInfo,
      reviews: updatedReviews,
      totalRating,
      averageRating
    });
  };

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <Loading />}
        {error && <Error errorMessage={error} />}

        {!error && !loading && (
          <div className="grid md:grid-cols-3 md:gap-[10px] lg:gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <img
                  src={photo}
                  className="w-[200px] rounded h-[285px] md:h-[200px]
                             object-cover"
                  alt="doctor-image"
                />

                <div>
                  <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text=[16px] lg:leading-7 font-semibold rounded ">
                    {specialization}
                  </span>
                  <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                    {name}
                  </h3>
                  <div className="flex items-center gap-[6px]">
                    <span
                      className="flex items-center gap-[6px] 
                  text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor"
                    >
                        <Rating style={{ maxWidth: 80 }} value={averageRating} readOnly /> 
                       {averageRating?.toFixed(1)}
                    </span>
                    <span
                      className="text-[14px]
                   leading-5 lg:text-[16px] lg:leading-7 
                   font-[400] text-textColor"
                    >
                      ({totalRating})
                    </span>
                  </div>
                  <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                    {bio}
                  </p>
                </div>
              </div>
              <div className="mt-[50px] border-b border-solid border-[#0066ff34] ">
                <button
                  onClick={() => setTab("about")}
                  className={` ${
                    tab === "about" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 tetx-[16px] leading-7 text-headingColor font-semibold`}
                >
                  About
                </button>
                <button
                  onClick={() => setTab("feedback")}
                  className={` ${
                    tab === "feedback" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 tetx-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Feedback
                </button>
              </div>
              <div className="mt-[50px]">
                {tab === "about" && <DoctorAbout doctorInfo={doctorInfo} />}
                {tab === "feedback" && (
                  <Feedback
                    handleNewReview={handleNewReview}
                    reviews={reviews}
                    totalRating={totalRating}
                  />
                )}
              </div>
            </div>
            <div>
              <SidePanel
                doctorId={_id}
                ticketPrice={ticketPrice}
                timeSlots={timeSlots}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorDetails;
