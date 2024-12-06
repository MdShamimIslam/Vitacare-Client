import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config";
import HashLoader from "react-spinners/HashLoader";
import useAuth from "../../hooks/useAuth";

const FeedbackForm = ({onNewReview}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const {user} = useAuth();
 

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!rating || !reviewText) {
        setLoading(false);
        return toast.error("Rating & Review Fields are required");
      }

      const token = localStorage.getItem("token");

      const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ rating, reviewText }),
      });

      const {message,data} = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      const enrichedData = {
        ...data,
        user: {
          name: user?.name,
          photo: user?.photo  
        },
      };
  
      onNewReview(enrichedData); 

      toast.success(message);
      setLoading(false);
      setReviewText("");
      setRating(0);
      setHover(0);

    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <form>
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          How would you rate the overall experience?*
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer `}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setRating(0);
                  setHover(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          Share Your Feedback or suggestions*
        </h3>
        <textarea
          className="border border-solid border-[#0066ff34] 
          focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
          rows={5}
          value={reviewText}
          placeholder="Write your message"
          onChange={(e) => setReviewText(e.target.value)}
        />
      </div>
      <button onClick={handleSubmitReview} type="submit" className="btn">
        {loading ? <HashLoader size={25} color="#fff" /> : "Submit Feedback"}
      </button>
    </form>
  );
};

export default FeedbackForm;
