import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import DoctorCard from "./DoctorCard";

const DoctorList = () => {
  const { data, loading, error } = useFetchData(`${BASE_URL}/doctors?limit=4`);
  const { data: doctors } = data;

  return (
    <>
      {loading && <Loading />}
      {error && <Error errorMessage={error} />}
      {!loading && !error && (
        <div 
        className="grid grid-cols-1
           md:grid-cols-2 lg:grid-cols-4 gap-5  lg:gap-[30px] mt-[30px] lg:mt-[55px] "
        >
          {doctors?.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      )}
    </>
  );
};

export default DoctorList;
