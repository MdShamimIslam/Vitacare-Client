
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    averageRating,
    totalRating,
    photo,
    specialization,
    experiences
  } = doctor;

  return (
    <div className="p-3 lg:p-5 hover:border border-primaryColor rounded-md">
      <div>
        <img src={photo} className="w-full h-[300px] object-cover rounded" alt="" />
        <h2 className="text-[18px] leading-[30px] lg:text-[22px] 
        lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5 ">
          {name}
        </h2>
        <div className="mt-2 lg:mt-4 flex items-center justify-between ">
          <span
            className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px]
        leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded "
          >
            {specialization}
          </span>
          <div className="flex items-center gap-[6px]">
            <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:leading-7 lg:text-[16px] font-semibold text-headingColor ">
            <Rating style={{ maxWidth: 80 }} value={averageRating} readOnly /> 
              {averageRating}
            </span>
            <span className="text-[14px] leading-6 lg:leading-7 lg:text-[16px] font-[400] text-textColor">
              ({totalRating})
            </span>
          </div>
        </div>
        <div className="mt-[18px] lg:mt-5 flex items-center justify-between gap-5 ">
          <div>
            <p className="tetx-[14px] leading-6 font-[400] text-textColor ">
              At {experiences && experiences[0]?.hospital}
            </p>
          </div>
          <Link
            to={`/doctors/${doctor._id}`}
            className="lg:w-[44px] md:w-[40px] w-[44px] h-[44px] md:h-[40px]  lg:h-[44px] 
             rounded-full border border-solid 
            border-[#181A1E]  flex items-center justify-center group hover:bg-primaryColor hover:border-none "
          >
            <BsArrowRight className="group-hover:text-white w-6 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
