import { useEffect, useState } from "react";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";
import axios from "axios";

const AllDoctor = () => {
  const { data, loading, error } = useFetchData(`${BASE_URL}/doctors/admin/getAllDoctors`);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => { 
    if (data?.data) {
      setDoctors(data.data);
    }
  }, [data]); 

  const handleApprovedDoctor = async (doctorId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${BASE_URL}/doctors/admin/${doctorId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDoctors((prevDoctors) =>
        prevDoctors.map((item) =>
          item._id === doctorId ? { ...item, isApproved: "approved" } : item
        )
      );

      toast.success("Doctors status updated");
    } catch (error) {
      toast.error("Doctors status updated Failed", error);
    }
  };

  const handleDeleteDoctor = (_id) => {
    const token = localStorage.getItem("token");
    fetch(`${BASE_URL}/doctors/admin/${_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast.success("Doctor deleted successfully");
            setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor._id !== _id));
        } else {
          toast.error("Failed to delete Doctor");
        }
      })
      .catch((error) => {
        toast.error("Deleted failed");
      });
  };

  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errorMessage={error} />}
      {!loading && !error && doctors?.length > 0 && (
        <div className="overflow-x-auto lg:w-[710px] border border-gray-200 rounded-lg">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="text-xs text-white uppercase bg-primaryColor">
              <tr>
                <th scope="col" className="px-3 py-3">
                  Image
                </th>
                <th scope="col" className="px-3 py-3">
                  Name & Email
                </th>
                <th scope="col" className="px-3 py-3">
                  Gender
                </th>
                <th scope="col" className="px-3 py-3">
                  Specialization
                </th>
                <th scope="col" className="px-3 py-3">
                  Status
                </th>
                <th scope="col" className="px-3 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {doctors?.map(
                ({ _id, photo, name, email, gender, specialization,isApproved }) => (
                  <tr key={_id} className="border-t hover:bg-gray-100">
                    <td className="px-6 py-4">
                      <img
                        className="w-12 md:h-10 lg:h-12 h-10 rounded-full border-2 border-gray-300"
                        src={photo}
                        alt="doctor-image"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold">{name}</p>
                      <p className="text-gray-500">{email}</p>
                    </td>
                    <td className="px-6 py-4">{gender}</td>
                    <td className="px-6 py-4">{specialization}</td>
                    <td className="px-6 py-4 text-center">
                      {isApproved === "approved" ? (
                        <div className="flex justify-center items-center text-green-500">
                          <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                          Approved
                        </div>
                      ) : (
                        <button
                          onClick={() => handleApprovedDoctor(_id)}
                          className="bg-gray-600 text-white py-1 px-3 rounded-3xl"
                        >
                          {isApproved}
                        </button>
                      )}
                    </td>
                    <td
                      onClick={() => handleDeleteDoctor(_id)}
                      className="px-6 py-4 cursor-pointer text-red-600 "
                    >
                      <RiDeleteBinLine className="ml-3" size={20} />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllDoctor;
