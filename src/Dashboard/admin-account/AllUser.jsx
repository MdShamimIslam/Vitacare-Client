import { useEffect, useState } from "react";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";

const AllUser = () => {
  const { data, loading, error } = useFetchData(`${BASE_URL}/users`);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    if (data?.data) {
      const filteredPatients = data.data.filter(
        (patient) => patient.role !== "admin"
      );
      setPatients(filteredPatients);
    }
  }, [data]);

  const handleDeletePatient = (_id) => {
    const token = localStorage.getItem("token");
    fetch(`${BASE_URL}/users/admin/${_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast.success("Patient deleted successfully");
          setPatients((prevPateints) =>
            prevPateints.filter((patient) => patient._id !== _id)
          );
        } else {
          toast.error("Failed to delete patient");
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
      {!loading && !error && patients?.length > 0 && (
        <div className="overflow-x-auto  border border-gray-200 rounded-lg">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="text-xs text-white uppercase bg-primaryColor">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Name & Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Blood Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {patients?.map(
                ({ _id, photo, name, email, gender, bloodType }) => (
                  <tr key={_id} className="border-t hover:bg-gray-100">
                    <td className="px-6 py-4">
                      <img
                        className="w-12 md:h-10 lg:h-12 h-10 rounded-full border-2 border-gray-300"
                        src={photo}
                        alt="user-image"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold">{name}</p>
                      <p className="text-gray-500">{email}</p>
                    </td>
                    <td className="px-6 py-4">{gender}</td>
                    <td className="px-6 py-4">{bloodType ?? "Not added"}</td>
                    <td
                      onClick={() => handleDeletePatient(_id)}
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
      {!loading && !error && patients?.length === 0 && (
        <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor">
          No patient added yet!
        </h2>
      )}
    </div>
  );
};

export default AllUser;
