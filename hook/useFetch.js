import axios from "axios";
import { useState, useEffect } from "react";
const rapidApiKey = process.env.EXPO_PUBLIC_RAPID_API_KEY

const useFetch = (endpoint, query) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            alert('there is an error.')
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setLoading(true);
        fetchData();
    }

    return { data, loading, error, refetch };
}

export default useFetch;