import  { useEffect, useState } from 'react'
import axios from "axios";
import { API_URL } from "../API/config";


const useAxios = (param) => {

    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    axios.defaults.baseURL = API_URL;

    const fetchData = async (url) => {
        try {
            setIsLoading(true);
            const response = await axios(url);
            setResponse(response.data.results);
        }
        catch {
            setError(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData(param);
    }, [param])

    return {
        response,
        isLoading,
        error,
        fetchData: url => fetchData(url)
    }
}

export default useAxios