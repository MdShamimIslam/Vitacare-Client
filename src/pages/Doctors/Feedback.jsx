import { useEffect, useState } from "react";
import { formateDate } from "../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";
const Feedback = ({ handleNewReview, reviews, totalRating }) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px] ">
          All reviews ({totalRating})
        </h4>
        {reviews?.map((review, index) => (
          <div
            key={index}
            className="flex justify-between bg-[#f0f0f5] px-3 py-4 rounded-md
          gap-10 mb-[15px]"
          >
            <div className="flex gap-3">
              <img
                className="w-[40px] h-[40px] object-cover rounded-full"
                src={review?.user?.photo}
                alt=""
              />
              <div className="text-[16px] leading-5  font-bold ">
                <h5 className="text-primaryColor">{review?.user?.name} </h5>
                <p className="text-[14px] leading-6 text-textColor">
                  {formateDate(review?.createdAt)}
                </p>
                <p className=" mt-2 text-textColor font-medium text-[15px]">
                  {review?.reviewText}
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              {[...Array(review?.rating).keys()].map((_, index) => (
                <AiFillStar color="#deba09" key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give Freedback
          </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm onNewReview={handleNewReview} />}
    </div>
  );
};

export default Feedback;
