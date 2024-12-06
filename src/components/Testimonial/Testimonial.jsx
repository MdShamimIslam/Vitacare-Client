import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../config";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { formateDate } from "../../utils/formateDate";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data?.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {reviews?.map(({ _id, reviewText, user, rating, createdAt }) => (
          <SwiperSlide key={_id}>
            <div className="py-[30px] px-5 bg-gray-100 hover:bg-blue-100 rounded-md ">
              <div className="flex items-center gap-[13px]">
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src={user?.photo}
                  alt="user-image"
                />
                <div className="flex items-center gap-20 md:gap-12 lg:gap-36">
                  <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                      {user?.name}
                    </h4>
                    <p className="text-[14px] text-textColor">
                      {formateDate(createdAt)}
                    </p>
                  </div>
                    <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                " {reviewText} "
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
