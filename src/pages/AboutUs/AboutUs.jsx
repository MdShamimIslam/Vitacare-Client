import Img from "../../assets/images/doctor-img03.png";
import ImgDoc from "../../assets/images/doctor-img01.png";
import mobileImg from "../../assets/images/mobile.png";
import { SiApple } from "react-icons/si";
import { FaGooglePlay } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import Testimonial from "../../components/Testimonial/Testimonial";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet,  } from 'react-helmet-async';

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className=" container">
      <Helmet>
        <title>VitaCare | About Us</title>
      </Helmet>
      <div>
        <div data-aos="zoom-in-down" className="text-center md:w-[600px] lg:w-[800px] mx-auto">
          <h4 className="md:text-2xl text-xl font-semibold text-primaryColor">Welcome To VitaCare</h4>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-5">Dedicated to Providing Quality Care for Every Patient</h2>
        </div>
        <div className="lg:flex md:gap-5 lg:gap-20 mt-8 md:mt-16 lg:mt-24">
          <img
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            src={Img}
            className=" hidden lg:block lg:w-[600px]  lg:h-[450px]"
            alt=""
          />
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-justify"
          >
            <h3 className=" text-lg md:text-2xl font-semibold">
              We Always Ensure Best Medical Treatment For Your Health
            </h3>
            <p className="text-textColor mt-6">
              We are dedicated to ensuring that you receive the best medical
              treatment to safeguard your health and well-being. Our team of
              highly skilled healthcare professionals works tirelessly to
              provide personalized care, combining advanced medical technology
              with a compassionate approach. From preventative care and routine
              check-ups to specialized treatments, we strive to address your
              unique needs with precision and dedication.
            </p>
            <p className="text-textColor mt-2">
              Our modern facilities are designed to make your experience
              comfortable and stress-free, while our commitment to excellence
              ensures the highest standards of healthcare. Trust us to be your
              partner in achieving and maintaining optimal health for a
              brighter, healthier future.
            </p>
            <p className="text-textColor mt-6">
              * We are committed to providing healthcare service
            </p>
            <p className="text-textColor my-1">
              * Really know the true needs and expectations of patients
            </p>
            <p className="text-textColor ">
              * State-of-the-Art Facilities and Technology
            </p>
            <button className="btn hover:bg-purpleColor mt-8 md:mt-10">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-36 mt-10 md:mt-16 lg:mt-32">
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="flex-1">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Why Patients Choose Our Hospital ?
          </h2>
          <div className="mt-8">
            <p className="flex gap-6 items-center">
              <HiArrowRight className="text-4xl font-bold" />
              <span>
                Patients trust our team of highly skilled and experienced
                doctors, nurses, and healthcare staff who are dedicated to
                providing exceptional care.
              </span>
            </p>
          </div>
          <div className="mt-8">
            <p className="flex gap-6 items-center">
              <HiArrowRight className="text-4xl font-bold" />
              <span>
                Equipped with advanced technology and modern medical
                infrastructure, we ensure accurate diagnoses and effective
                treatments.
              </span>
            </p>
          </div>
          <div className="mt-8">
            <p className="flex gap-6 items-center">
              <HiArrowRight className="text-4xl font-bold" />
              <span>
                From preventive care to specialized treatments, we offer a wide
                range of healthcare services tailored to meet every patient’s
                needs.
              </span>
            </p>
          </div>
          <div className="mt-8">
            <p className="flex gap-6 items-center">
              <HiArrowRight className="text-4xl font-bold" />
              <span>
                Our hospital prioritizes patient comfort and well-being,
                providing compassionate care and a supportive environment
                throughout the treatment journey.
              </span>
            </p>
          </div>
          <div className="mt-8">
            <p className="flex gap-6 items-center">
              <HiArrowRight className="text-4xl font-bold" />
              <span>
                With easy appointment scheduling, online consultations, and 24/7
                emergency services, we make quality healthcare accessible and
                convenient for everyone.
              </span>
            </p>
          </div>
        </div>
        <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="flex-1 hidden lg:block">
          <img className="w-[520px]" src={ImgDoc} alt="" />
        </div>
      </div>
      <div className="container mt-10 md:mt-16 lg:mt-24">
        <div data-aos="zoom-in-down" className="xl:w-[500px] mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center">
            What our patient <span className="text-primaryColor">say</span>
          </h2>
          <p className="text__para text-center">
            Real stories from our patients, sharing their experiences and how
            our dedicated care has positively impacted their health and lives.
          </p>
        </div>
        <Testimonial />
      </div>
      <div className="lg:flex md:mt-16 mt-10 lg:mt-16 gap-36 items-center">
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="flex-1">
          <h3 className="text-2xl text-primaryColor font-bold">Download apps</h3>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-5">For Better Test</h1>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-2">Download Mobile App</h1>
          <p className="text-textColor mt-6">
            Healthcare made simple! Download our app to connect with doctors,
            book appointments, and view your reports with ease.Your health is
            our priority. Download our app today to experience world-class
            medical services from trusted doctors.
          </p>
          <p className="text-textColor mt-2">
            Get 24/7 access to medical care! Download our app to consult doctors
            online, book appointments, and manage your health efficiently.
          </p>
          <div className="md:flex items-center gap-10 mt-12 ">
            <div className="bg-blue-600 px-8 md:px-12 py-4 flex items-center gap-2 md:gap-3 lg:gap-5 rounded-full">
              <SiApple className="text-4xl lg:text-5xl text-white" />
              <div className="text-white">
                <p>Download on</p>
                <p className=" text-lg lg:text-xl font-bold">App Store</p>
              </div>
            </div>
            <div className="bg-primaryColor px-8 md:px-12 py-4 flex items-center gap-2 md:gap-3 lg:gap-5 mt-4 md:mt-0 rounded-full">
              <FaGooglePlay className="text-3xl lg:text-5xl text-white" />
              <div className="text-white">
                <p>Download on</p>
                <p className="text-lg lg:text-xl font-bold">Google Play</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="flex-1">
          <img className="w-[250px] hidden lg:block" src={mobileImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
