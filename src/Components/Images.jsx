import React from 'react'
import { useContext } from "react";
import { ImageContext } from "../Context/ImageContext";
import Image from "./Image";
import Loading from './Loading';

const Images = () => {

    const { response, isLoading, searchImage } = useContext(ImageContext);

    return (
        <>
            <h1 className="title text-center text-2xl capitalize my-2 font-bold text-orange-500">{searchImage || 'supra'} Images</h1>

            <div className="image-container grid grid-cols-1  md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 m-8">
                {isLoading ? <Loading item={10} /> : response.map((item) => <Image key={item.id} item={item} />
                )}
            </div>
        </>
    )
}

export default Images;