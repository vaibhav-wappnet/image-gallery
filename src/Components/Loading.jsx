import React from "react";
import * as Spinners from "react-spinners";


const Loading = ({ item }) => {
  return [...Array(item).values()].map(() => {
    return (

      <div className="animate-pulse">
        <div className="bg-orange-50 h-72 rounded-lg flex  justify-center items-center">
          <Spinners.PropagateLoader color="#f97316" speed="5"/>
        </div>
      </div>
    )
  })
}

export default Loading;