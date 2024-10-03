import React from "react";
import RadialLoading from "./components/ui/RadialLoading";


const loading = () => {
  return (
    <div className="flex  justify-center items-center min-h-screen">
      {/* {
        Array(3).fill(0).map((i, index) => (<LoadingSkeleton key={index}/>))
      } */}
      <RadialLoading/>
    </div>
  );
};

export default loading;
