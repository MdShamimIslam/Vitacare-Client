import Maps from "./Maps";
import { MdPhone } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function FindALocation() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container lg:flex gap-28 mt-12 md:mt-20">
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" >
        <Maps />
      </div>
      <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h3 className="mt-6 font-bold text-2xl md:text-4xl">
          Dhaka Medical College and Hospital
        </h3>
        <p className="mt-6 text-textColor text-justify">
          Dhaka Medical College and Hospital stands as a beacon of hope for
          patients seeking high-quality medical care in Bangladesh. Known for
          its state-of-the-art facilities, it offers a wide range of specialized
          treatments and services catering to diverse healthcare needs. Located
          at the heart of Dhaka city, the hospital is easily accessible, serving
          thousands of patients daily with compassion and dedication. Its team
          of experienced doctors and healthcare professionals work tirelessly to
          ensure the best outcomes for every patient.
        </p>
        <p className="mt-4 text-textColor text-justify">
          Beyond healthcare, the hospital also excels in medical education and
          research, shaping the future of medicine in the country. With a legacy
          of trust and excellence, it remains a pillar of health and well-being
          for the community.
        </p>
        <button className="btn flex gap-3 items-center hover:bg-purpleColor ">
          <MdPhone className="text-lg" /> +123 456 789
        </button>
      </div>
    </div>
  );
}

export default FindALocation;
