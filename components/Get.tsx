import React from 'react';

const Get = () => {
    return (
        <div className="w-full flex justify-center items-center px-4 my-12">
            <div className="flex flex-col lg:flex-row lg:justify-evenly lg:items-start bg-[#08100d] w-full max-w-[1200px] h-auto lg:h-[500px] my-5 rounded-3xl lg:gap-x-6 p-6 sm:justify-center sm:items-center">
                {/* "Give" Section */}
                <div className="flex flex-col text-center lg:text-left">
                    <h1 className="text-[16px] text-white/75 py-2 text-center">What you</h1>
                    <span className="text-[50px] sm:text-[70px] lg:text-[100px] text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-600 text-center">
                        Give
                    </span>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <div className='flex  justify-center gap-x-4 flex-wrap'>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Focus
                            </button>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Commitment
                            </button>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Adaptability
                            </button>
                        </div>
                        <div className='flex  justify-center gap-x-4 flex-wrap'>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Willingness to do
                            </button>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                6% Stake and a revenue
                            </button>
                        </div>
                        <div className='flex justify-center gap-x-4 flex-wrap'>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Percentage
                            </button>
                        </div>
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
                        <div className='flex justify-center gap-x-4 flex-wrap'>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Guidance
                            </button>
                        </div>
                        <div className='flex justify-center gap-x-4 flex-wrap'>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Ownership
                            </button>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Networking
                            </button>
                        </div>
                        <div className='flex  justify-center gap-x-4 flex-wrap'>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Visionary
                            </button>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Inspiring
                            </button>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Progress
                            </button>
                        </div>
                        <div className='flex  justify-center gap-x-4 flex-wrap'>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Curious
                            </button>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Resourceful
                            </button>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Innovative
                            </button>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Autonomy
                            </button>
                        </div>
                        <div className='flex  justify-center gap-x-4 flex-wrap'>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Adaptable
                            </button>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Entrepreneur
                            </button>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Collaboration
                            </button>
                        </div>
                        <div className='flex justify-center gap-x-4 flex-wrap'>
                            <button className="text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 py-2 px-2">
                                Driven
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Get;
