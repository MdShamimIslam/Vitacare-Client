import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const MyBookings = () => {
  const { data, loading, error } = useFetchData(
    `${BASE_URL}/users/appointments/my-appointments`
  );
   const [bookings, setBookings] = useState([]);

    useEffect(() => { 
       if (data?.data) {
        setBookings(data.data);
       }
     }, [data]); 

  const handleDeleteBooking = (_id) => {
    const token = localStorage.getItem("token");
    fetch(`${BASE_URL}/bookings/${_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast.success("Booking deleted successfully");
          setBookings((prevBookings) =>
            prevBookings.filter((item) => item._id !== _id)
          );
         
        } else {
          toast.error("Failed to delete booking");
        }
      })
      .catch((error) => {
        toast.error("Failed to delete booking");
      });
  };

  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errorMessage={error} />}

      {!loading && !error && bookings?.length > 0 && (
        <div className="overflow-x-auto  border border-gray-200 
        rounded-lg">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="text-xs text-white uppercase bg-primaryColor ">
              <tr>
                <th scope="col" className="px-5 py-3">
                  Image
                </th>
                <th scope="col" className="px-5 py-3">
                  Name & Email
                </th>
                <th scope="col" className="px-5 py-3">
                  Phone
                </th>
                <th scope="col" className="px-5 py-3">
                  Specialization
                </th>
                <th scope="col" className="px-5 py-3">
                  Ticket
                </th>
                <th scope="col" className="px-5 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((item) => {
                const { _id, doctor } = item;
                const {
                  photo,
                  name,
                  email,
                  phone,
                  specialization,
                  ticketPrice,
                } = doctor;
                return (
                  <tr key={_id} className="border-t hover:bg-gray-100">
                    <td className="px-6 py-4">
                      <img
                        className="w-full h-8 lg:h-10 rounded-full border-2 border-gray-300"
                        src={photo}
                        alt="doctor-image"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold">{name}</p>
                      <p className="text-gray-500">{email}</p>
                    </td>
                    <td className="px-6 py-4">{phone}</td>
                    <td className="px-6 py-4">{specialization}</td>
                    <td className="px-6 py-4 text-primaryColor">
                      ${ticketPrice}
                    </td>
                    <td
                      onClick={() => handleDeleteBooking(_id)}
                      className="px-6 py-4 cursor-pointer text-red-600 "
                    >
                      <RiDeleteBinLine className="ml-3" size={20} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {!loading && !error && bookings?.length === 0 && (
        <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor">
          You did not book any doctor yet!
        </h2>
      )}
    </div>
  );
};

export default MyBookings;
