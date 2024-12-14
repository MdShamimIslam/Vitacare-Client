import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
     <Helmet>
        <title>VitaCare | Home</title>
      </Helmet>
      {/* Hero Section start */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between ">
            {/* Hero Content start */}
            <div>
              <div data-aos="fade-right" className="lg:w-[570px]">
                <h1 className="text-2xl md:text-4xl lg:text-5xl leading-[40px] md:leading-[60px] text-headingColor font-[800]  ">
                  We help patients live a healthy, longer life.
                </h1>
                <p className="text__para">
                  Access trusted medical experts, book appointments seamlessly,
                  and take a proactive step towards a healthier life. Our
                  platform connects you with experienced doctors, providing
                  personalized care, support, and guidance to help you make
                  informed health choices every day. We bring you closer to
                  quality healthcare, empowering your journey to well-being and
                  a healthier tomorrow.
                </p>
                <Link to="/doctors">
                <button className="btn hover:bg-irisBlueColor">
                  Request an Appointment
                </button>
                </Link>
              </div>
              {/* Hero Counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col md:flex-row lg:items-center gap-5 md:gap-[60px] lg:gap-[30px] ">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-textColor">
                    20+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-textColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-textColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* Hero Content end */}
            <div data-aos="fade-left" className="flex gap-[30px] justify-end ">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroImg02} alt="" />
                <img className="w-full" src={heroImg03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section end */}
      <section>
        <div className="container md:mt-10 mt-4">
          <div data-aos="fade-down" className="lg:w-[650px] md:w-[600px] mx-auto ">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center">
            Providing the best medical care services
            </h2>
            <p className="text__para text-center">
              Offering expert medical services with easy booking, personalized
              care, and support to help you achieve and maintain a healthier
              lifestyle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
            <div data-aos="fade-right" className="py-[30px] px-5 ">
              <div className="flex items-center justify-center ">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[20px] md:text-[26px] leading-9 text-[#20A39D] font-[700] text-center ">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-cneter ">
                  Easily search for experienced doctors by specialty, location,
                  or availability, and book appointments that fit your schedule
                  for quality care.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#20A39D] hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div data-aos="zoom-in" className="py-[30px] px-5 ">
              <div className="flex items-center justify-center ">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[20px] md:text-[26px] leading-9 text-purple-500 font-[700] text-center ">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-cneter ">
                  Discover nearby clinics and healthcare facilities with ease.
                  Find convenient locations to access quality medical services
                  close to you.
                </p>
                <Link
                  to="/contact"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-purple-500 hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div data-aos="fade-left" className="py-[30px] px-5 ">
              <div className="flex items-center justify-center ">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[20px] md:text-[26px] leading-9 text-yellow-600 font-[700] text-center ">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-cneter ">
                  Easily schedule your visit online with your preferred doctor,
                  ensuring convenient and timely access to quality healthcare.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-yellow-600 hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      {/* services section start */}
      <section className="">
        <div data-aos="zoom-in-up" className="container">
          <div className="lg:w-[550px] mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center">Our Medical <span className="text-primaryColor">Services</span></h2>
            <p className="text__para text-center">
              Explore our wide range of medical services designed to meet your
              healthcare needs, providing expert care and personalized
              treatment.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/* services section end */}

      {/* Feature section start */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* feature content */}
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="xl:w-[670px]"
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                Get virtual treatment <br /> anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/about-us">
                <button className="btn hover:bg-purpleColor">Learn More</button>
              </Link>
            </div>
            {/* feature image */}
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0"
            >
              <img src={featureImg} className="w-3/4" alt="feature-image" />
              <div className="w-[150px] lg:w-[248px] bg-[#ededed80] absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] ">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600] ">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400] ">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px] ">
                    <img src={videoIcon} alt="video-icon" />
                  </span>
                </div>
                <div
                  className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2
                lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full "
                >
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px] ">
                  <img src={avatarIcon} alt="avatar-icon" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Md. Shamim Islam
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature section end */}
      {/* Our great doctors start */}
      <section>
        <div className="container md:mt-4">
          <div data-aos="fade-down-left" className="xl:w-[470px] mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center">Our Great <span className="text-primaryColor">Doctors</span></h2>
            <p className="text__para text-center">
              Expert doctors providing personalized care to enhance your health
              and well-being.
            </p>
          </div>
          <DoctorList />
          <Link to="/doctors" className="flex justify-center md:mt-2">
            <button className="btn hover:bg-blue-700">Find All Doctors</button>
          </Link>
        </div>
      </section>
      {/* Our great doctors end */}
      {/* FAQ start */}
      <section className="md:mt-6 lg:mt-0">
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block lg:mt-0 md:mt-6">
              <img src={faqImg} alt="faq-image" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="w-full md:w-1/2 lg:mt-6"
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                Most questions by our beloved  <span className="text-primaryColor">patients</span>
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ end */}
      {/* Testimonial section start */}
      <section>
        <div className="container">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="md:w-[600px] mx-auto"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center">What our patient <span className="text-primaryColor">say</span></h2>
            <p className="text__para text-center">
              Real stories from our patients, sharing their experiences and how
              our dedicated care has positively impacted their health and lives.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/* Testimonial section end */}
    </>
  );
};

export default Home;
