import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {loading, error, data};
};

export default useFetch;
