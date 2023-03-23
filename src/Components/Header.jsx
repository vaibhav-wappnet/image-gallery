import React from 'react'

const Header = ({ children }) => {
    return (
        <div>
            <div className="flex flex-col items-center max-h-screen justify-center py-6 ">
                <div className="title m-2 capitalize text-orange-500 font-bold text-4xl">
                    <h1>
                        image gallery
                    </h1>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Header