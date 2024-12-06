import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import DoctorCard from "../../components/Doctors/DoctorCard";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errorMessage={error} />}
      {!loading && !error && appointments?.data?.length > 0 && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments?.data?.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>

          {/* <table className="w-full text-left text-sm text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                Specialization
                </th>
                <th scope="col" className="px-6 py-3">
                Ticket
                </th>
              </tr>
            </thead>
            <tbody>
              {appointments?.data?.map((item) =>
                 (
                  <tr key={item._id}>
                    <td className="px-6 py-4">
                      <img className="w-10 h-10 rounded-md" src={item?.photo} alt="" />
                    </td>
                    <td className="px-6 py-4"> {item?.name} </td>
                    <td className="px-6 py-4"> {item?.email} </td>
                    <td className="px-6 py-4">{item?.phone}</td>
                    <td className="px-6 py-4">{item?.specialization}</td>
                    <td className="px-6 py-4">${item?.ticketPrice}</td>
                  </tr>
                 )
              
              )
            }
            </tbody>
          </table> */}
        </>
      )}
      {!loading && !error && appointments?.data?.length === 0 && (
        <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor">
          You did not book any doctor yet!
        </h2>
      )}
    </div>
  );
};

export default MyBookings;
