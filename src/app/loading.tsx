import React from "react";
import LoadingSkeleton from "./components/(myComponent)/LoadingSkeleton";
import RadialLoading from "./components/(myComponent)/RadialLoading";

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
