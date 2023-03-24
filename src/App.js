import './App.css';
import Header from "./Components/Header";
import Images from "./Components/Images";
import useAxios from './Hooks/useAxios';
import SearchField from "./Utils/SearchField";
import { accessKey } from './API/config';
import { ImageContext } from "./Context/ImageContext";
import { useState } from 'react';

function App() {

    const [searchImage, setSearchImage] = useState('');

    const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=supra&client_id=${accessKey}`);
    // console.log(response);



    const value = {
        response, isLoading, error, fetchData, searchImage, setSearchImage
    }

    return (
        <div className="App">
            <ImageContext.Provider value={value}>
                <Header>
                    <SearchField />
                </Header>
                <Images />
            </ImageContext.Provider>
        </div>
    );
}

export default App;
