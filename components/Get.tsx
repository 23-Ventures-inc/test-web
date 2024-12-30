import React from 'react';

const Get = () => {
    return (
        <div className="w-full flex justify-center items-center px-4 mt-5">
            <div className="flex flex-col lg:flex-row justify-evenly items-center bg-[#08100d] w-full max-w-[1200px] h-auto lg:h-[400px] my-5 rounded-3xl gap-y-8 lg:gap-x-6 p-6 lg:pt-10">
                {/* "Give" Section */}
                <div className="flex flex-col text-center lg:text-left">
                    <h1 className="text-[16px] text-white/75 py-2 text-center">What you</h1>
                    <span className="text-[50px] sm:text-[70px] lg:text-[100px] text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-600 text-center">
                        Give
                    </span>
                    <div className='flex gap-x-4 mb-6'>
                        <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                            Laser focus
                        </button>
                        <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                            Entrepreneurial hustle
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <div className="flex justify-center items-center bg-gradient-to-b from-slate-500 via-white to-slate-500 lg:h-40 lg:w-[1px]  relative lg:my-0">
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
                        <div className='flex gap-x-4 flex-wrap'>
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
                        {/* <div className='flex gap-x-4 flex-wrap'>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                A salary for you
                            </button>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                content/media
                            </button>
                        </div>
                        <div className='flex gap-x-4 flex-wrap'>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Health Benefits
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Get;
