import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "@env";

// const rapidApiKey = RAPID_API_KEY;

export default function useFetch({ endpoint, params }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...params,
    },
    headers: {
      "X-RapidAPI-Key": "2a9fbebf38mshd3e25e5aad041bap1395d4jsnf11939b34807",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (err) {
      setError(err);
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    isLoading,
    error,
    refetch,
  };
}
