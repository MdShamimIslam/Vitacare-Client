import { formateDate } from "../../utils/formateDate";
import { GoAlertFill } from "react-icons/go";

const DoctorAbout = ({ doctorInfo }) => {
  const { name, about, qualifications, experiences } = doctorInfo || {};

  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 ">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            {name}
          </span>
        </h3>
        <p className="text__para text-justify">{about}</p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-textColor font-semibold ">
          Education
        </h3>
        {qualifications?.length > 0 ? (
          <ul className="pt-4 md:p-5">
            {qualifications?.map((item, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] "
              >
                <div>
                  <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                    {formateDate(item.startingDate)} -{" "}
                    {formateDate(item.endingDate)}
                  </span>
                  <p className="text-[15px] leading-6 font-medium text-textColor ">
                    {item.degree}
                  </p>
                </div>
                <p className="text-[14px] leading-5 font-medium text-textColor ">
                  {item.university}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-textColor mt-2 flex items-center gap-2">
            <GoAlertFill className="text-red-500" /> Go to your profile and add
            your Education.
          </p>
        )}
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-textColor font-semibold ">
          Experience
        </h3>
        {experiences?.length > 0 ? (
          <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
            {experiences?.map((item, index) => (
              <li key={index} className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                  {formateDate(item.startingDate)} -{" "}
                  {formateDate(item.endingDate)}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor ">
                  {item.position}
                </p>
                <p className="text-[14px] leading-5 font-medium text-textColor ">
                  {item.hospital}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-textColor mt-2 flex items-center gap-2">
            <GoAlertFill className="text-red-500" /> Go to your profile and add
            your Experience.
          </p>
        )}
      </div>
    </div>
  );
};

export default DoctorAbout;
