import { useEffect, useState } from "react";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import Testimonial from "../../components/Testimonial/Testimonial";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const Doctors = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 700);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleSearch = () => {
    setQuery(query.trim());
    setCurrentPage(1);
  };

  const { data, loading, error } = useFetchData(
    `${BASE_URL}/doctors?query=${debounceQuery}&limit=${limit}&page=${currentPage}`
  );

  const doctors = data?.data || [];
  const totalPages = data?.totalPages || 1;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Helmet>
        <title>VitaCare | Doctors</title>
      </Helmet>
      <section className="bg-[#fff9ea]">
        <div data-aos="zoom-in-down" className="container text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Find a <span className="text-primaryColor">Doctor</span>
          </h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              placeholder="Search doctor by name or specialization"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none
               placeholder:text-textColor"
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-r-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          {loading && <Loading />}
          {error && <Error errorMessage={error} />}
          {!loading && !error && (
            <div
              className="grid grid-cols-1
           md:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {doctors?.map((doctor) => (
                <DoctorCard key={doctor._id} doctor={doctor} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {doctors?.length > 0 && (
            <div className="flex justify-center items-center mt-6 lg:mt-10 space-x-2">
              <button
                className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 text-sm font-semibold rounded-lg ${
                    currentPage === index + 1
                      ? "bg-primaryColor text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
      <section>
        <div className="container">
          <div data-aos="zoom-in-right" className="md:w-[600px] mx-auto">
            <h2 className="heading text-center">
              What our patient <span className="text-primaryColor">say</span>
            </h2>
            <p className="text__para text-center">
              Real stories from our patients, sharing their experiences and how
              our dedicated care has positively impacted their health and lives.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
