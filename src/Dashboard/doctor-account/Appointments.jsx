import axios from "axios";
import { formateDate } from "../../utils/formateDate";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import { useState } from "react";

const Appointments = ({ appointments: initialAppointments }) => {
  const [appointments, setAppointments] = useState(initialAppointments);

  const handlePatientApproved = async (bookingId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${BASE_URL}/bookings/${bookingId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAppointments((prevAppointments) =>
        prevAppointments.map((item) =>
          item._id === bookingId ? { ...item, status: "approved" } : item
        )
      );

      toast.success("Appointments status updated");
    } catch (error) {
      toast.error("Appointments status updated Failed", error);
    }
  };

  return (
    <>
      {appointments?.length > 0 ? (
        <div className="md:col-span-2 md:px-[30px] max-w-full  overflow-hidden">
          <div
            className="w-full overflow-x-auto border border-gray-200 
      rounded-lg"
          >
            <table className="w-full text-left text-sm text-gray-700">
              <thead className="text-xs text-white uppercase bg-primaryColor">
                <tr>
                  <th scope="col" className="px-6 py-3 text-center">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Payment
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Booked on
                  </th>
                </tr>
              </thead>
              <tbody>
                {appointments?.map((item) => (
                  <tr key={item._id} className="border-t hover:bg-gray-100">
                    <td className="px-6 py-4 text-center">
                      <img
                        src={item?.user?.photo}
                        alt="patient-image"
                        className="w-10 h-10 rounded-full mx-auto"
                      />
                    </td>
                    <td className="px-6 py-4 text-center">{item.user.name}</td>
                    <td className="px-6 py-4 text-center">{item.user.email}</td>
                    <td className="px-6 py-4 text-center">
                      {item.user.gender}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.isPaid ? (
                        <div className="flex justify-center items-center text-green-500">
                          <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                          Paid
                        </div>
                      ) : (
                        <div className="flex justify-center items-center text-red-500">
                          <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                          Unpaid
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.status === "approved" ? (
                        <div className="flex justify-center items-center text-green-500">
                          <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                          Approved
                        </div>
                      ) : (
                        <button
                          onClick={() => handlePatientApproved(item._id)}
                          className="bg-gray-600 text-white py-1 px-3 rounded-3xl"
                        >
                          {item.status}
                        </button>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      ${item.ticketPrice}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {formateDate(item.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        "No Appointments Available"
      )}
    </>
  );
};

export default Appointments;
