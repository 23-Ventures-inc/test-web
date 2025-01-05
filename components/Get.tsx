import React from 'react';

const Get = () => {
    return (
        <div className="w-full flex justify-center items-center px-4 mt-5">
            <div className="flex flex-col lg:flex-row lg:justify-evenly lg:items-start bg-[#08100d] w-full max-w-[1200px] h-auto lg:h-[400px] my-5 rounded-3xl lg:gap-x-6 p-6 sm:justify-center sm:items-center">
                {/* "Give" Section */}
                <div className="flex flex-col text-center lg:text-left">
                    <h1 className="text-[16px] text-white/75 py-2 text-center">What you</h1>
                    <span className="text-[50px] sm:text-[70px] lg:text-[100px] text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-600 text-center">
                        Give
                    </span>
                    <div className='flex items-center justify-center gap-x-4'>
                        <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                            Laser focus
                        </button>
                        <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                            Entrepreneurial hustle
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <div className="flex justify-center items-center bg-gradient-to-b from-slate-900 via-white to-slate-900 lg:h-64 lg:w-[1px] w-full h-1  relative lg:my-0 lg:mb-0 my-7">
                    <div className="absolute flex justify-center items-center text-white text-xl bg-gray-800 h-12 w-12 rounded-full">
                        <span>&</span>
                    </div>
                </div>

                {/* "Get" Section */}
                <div className="flex flex-col text-center lg:text-left">
                    <h1 className="text-[16px] text-white/75 py-2 text-center">What you</h1>
                    <span className="text-[50px] sm:text-[70px] lg:text-[100px] text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-600 text-center">
                        Get
                    </span>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <div className='flex  justify-center gap-x-4 flex-wrap'>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Designers
                            </button>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Advisors
                            </button>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                $$ for all expenses
                            </button>
                        </div>
                        <div className='flex  justify-center gap-x-4 flex-wrap'>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                A salary for you
                            </button>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                content/media
                            </button>
                        </div>
                        <div className='flex justify-center gap-x-4 flex-wrap'>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Health Benefits
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Get;
