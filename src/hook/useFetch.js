import { useState, useEffect } from 'react';

export const useFetch = (url) => {
 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(false);

 const fetchData = async (url) => {
  setLoading(true)
  setData([])
  
  fetch(url)
  .then((res) => res.json())
  .then((json) => {
    setData(json);
    setLoading(false)
  });
}

 useEffect(() => {
  fetchData(url)
 }, []);

 return { data ,loading}; 
};