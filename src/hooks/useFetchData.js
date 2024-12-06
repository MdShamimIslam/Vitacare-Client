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
          headers: { Authorization: `Bearer ${token}` },
        });
        const result = await res.json();
        
        if (!res.ok) {
          throw new Error(result.message);
        }

        setData(result);
        setLoading(false);

      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };
    // call fetchData function
    fetchData();

  }, [url]);

  return {
    data,
    loading,
    error
  }
};

export default useFetchData;
