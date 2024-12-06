import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
          {/* About image */}
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 "
          >
            <img src={aboutImg} alt="about-image" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%] ">
              <img src={aboutCardImg} alt="about-card-image" />
            </div>
          </div>
          {/* About Content */}
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">Proud to be one of the nations best</h2>
            <p className="text__para">
              Proud to be recognized as one of the nation's best, we are
              dedicated to providing world-class healthcare services. With a
              team of highly skilled professionals, state-of-the-art technology,
              and a compassionate approach, we ensure every patient receives the
              highest standard of care. Whether you're seeking preventive
              treatment, specialized care, or support during challenging times,
              we are committed to your health and well-being.
            </p>
            <p className="text__para mt-[30px]">
              Our mission is to offer personalized, patient-centered care that
              enhances the quality of life and contributes to a healthier,
              stronger community.
            </p>
            <Link to="/">
              <button className="btn hover:bg-yellow-500">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
