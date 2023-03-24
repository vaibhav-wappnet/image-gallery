import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Image = ({ item }) => {

    const breakPoints = { 350: 1, 750: 1, 900: 1 };

    return (
        <ResponsiveMasonry columnsCountBreakPoints={breakPoints}>
            <Masonry gutter="2">
                <a href={item.urls.regular} target="_sunny" rel="noreferrer">
                    <img className="hover:drop-shadow-xl hover:translate-y-2 ease-in duration-150" width="100%" src={item.urls.small} alt={item.alt_description} />
                </a>
            </Masonry>
        </ResponsiveMasonry>

    )
}

export default Image