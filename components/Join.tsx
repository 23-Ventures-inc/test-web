import React from 'react';

const Join = () => {
  return (
    <div className="flex flex-col items-center w-full mt-5">
      {/* Header Section */}
      <div className="text-center lg:px-[200px] my-4">
        <h1 className="lg:text-6xl text-3xl text-white/75 mb-8">By joining you’ll get</h1>
      </div>

      {/* Card Section */}
      <div className="flex flex-wrap justify-center gap-6 lg:flex-nowrap">
        <div className="rounded-3xl w-[320px] h-[220px] bg-[#10201a] shadow-lg flex items-center justify-center text-center p-4">
          <p className="text-gray-800 font-semibold">Exclusive Resources</p>
        </div>
        <div className="rounded-3xl w-[320px] h-[220px] bg-[#10201a] shadow-lg flex items-center justify-center text-center p-4">
          <p className="text-gray-800 font-semibold">Networking Opportunities</p>
        </div>
        <div className="rounded-3xl w-[320px] h-[220px] bg-[#10201a] shadow-lg flex items-center justify-center text-center p-4">
          <p className="text-gray-800 font-semibold">Personal Growth</p>
        </div>
      </div>
    </div>
  );
};

export default Join;
