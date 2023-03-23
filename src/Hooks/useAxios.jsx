import React, { useEffect, useState } from 'react'
import { axios } from "axios";
import { url } from 'inspector';


const useAxios = (value) => {

    const [response, setResponse] = useState;
    const [isLoading, setIsLoading] = useState;
    const [error, setError] = useState;

    axios.defaults.baseURL = "https://api.unsplash.com";

    const fetchData = async (url) => {
        try {
            setIsLoading(true);
            const response = await axios(url);
            setResponse(response.data.result);
        }
        catch {
            setError(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData(value);
    }, [value])

    return {
        response,
        isLoading,
        error,
        fetchData: url => fetchData(url)
    }
}

export default useAxios