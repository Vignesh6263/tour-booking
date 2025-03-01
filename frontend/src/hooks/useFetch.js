import { useState, useEffect } from 'react';

const useFetch = (url) => {
   const [data, setData] = useState(null); // Changed from [] to null to catch uninitialized state
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const fetchData = async () => {
         setLoading(true);
         try {
            const res = await fetch(url);
            if (!res.ok) {
               throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
            }
            const result = await res.json();
            console.log('Raw API response from', url, ':', result); // Log raw response
            setData(result.data); // Expecting result.data from API
            setLoading(false);
         } catch (err) {
            setError(err.message);
            setLoading(false);
         }
      };
      fetchData();
   }, [url]);

   return { data, error, loading };
};

export default useFetch;