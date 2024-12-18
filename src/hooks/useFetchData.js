import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Authorization token is missing.");
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const res = await fetch(url, {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        });

        if (res.status === 401) {
          setError("Unauthorized access. Please log in again.");
          return;
        }

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message);
        }

        setData(result);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message || "An error occurred");
      }
    };
    // call fetchData function
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
