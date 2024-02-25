import React from "react";

const TimeLine = () => {
  return (
    <div>
      <div className="text-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Schedule Plan</h1>
          {/* Add logo or other elements if needed */}
        </div>
      </div>
      <div className="bg-orange-500 ml-[25vw] mr-[68vw]">
        <h1 className="flex text-3xl font-bold p-2">Day-1</h1>
      </div>
      <div className="bg-[#AA4358] ml-[30vw] mr-[63vw]">
        <h1 className="flex text-3xl font-bold p-2">Day-2</h1>
      </div>
    </div>
  );
};

export default TimeLine;
