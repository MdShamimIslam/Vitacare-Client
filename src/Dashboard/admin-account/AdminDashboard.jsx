import { Helmet } from "react-helmet-async";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import AllUser from "./AllUser";
import { useState } from "react";
import AdminTab from "./AdminTab";
import AllDoctor from "./AllDoctor";

const AdminDashboard = () => {
  const { data, loading, error } = useFetchData(
    `${BASE_URL}/users/admin/profile`
  );
  const [tab, setTab] = useState("allPatients");

  const { photo, name, email } = data?.data || {};

  return (
    <section>
      <Helmet>
        <title>VitaCare | Admin Dashboard</title>
      </Helmet>
      <div className="lg:max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}
        {error && !loading && <Error errorMessage={error} />}

        {!loading && !error && data?.success && (
          <div
          className="grid md:grid-cols-3 gap-24 lg:gap-10"

          >
            <AdminTab tab={tab} setTab={setTab} name={name} photo={photo} email={email} />
            {
              tab === "allPatients" && (
                <div className="md:col-span-2 mt-[-50px] md:mt-0 md:px-[30px] max-w-full overflow-hidden">
                  <AllUser />
                </div>
              )
            }
            {
              tab === "allDoctors" && (
                <div className="md:col-span-2 mt-[-50px] md:mt-0 md:px-[30px] max-w-full overflow-hidden">
                <AllDoctor/>
                </div>
              )
            }
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;
