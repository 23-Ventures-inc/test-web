import React from 'react';

const Studio = () => {
    return (
        <div className="w-full flex justify-center flex-col items-center mt-5 px-4 lg:px-[150px]">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-600 py-4 text-center">
                23 Ventures is not for you if
            </h1>


            <div className="flex flex-col lg:flex-row lg:gap-x-3 gap-y-4 flex-wrap lg:flex-nowrap justify-center items-center">
                <div className="w-full lg:w-[420px] h-[220px] bg-gradient-to-tr from-teal-600 via-teal-900 to-teal-800 rounded-3xl text-white flex justify-center items-end">
                    <div className="w-full px-3 pb-3 text-center lg:text-left">
                        <p>If you prefer a stable, traditional career path
                            without the risks and uncertainties of
                            groundbreaking ventures, this isn’t the right fit.</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 lg:flex-nowrap">
                    <div className="bg-gradient-to-tr from-teal-600 via-teal-900 to-teal-800 w-full sm:w-[210px] h-[220px] rounded-3xl px-3 flex justify-center items-end text-white">
                        <p className="mb-2 text-center">
                            If questioning the status quo or pushing boundaries
                            feels uncomfortable, this space of disruptive
                            thinking may not align with your mindset.
                        </p>
                    </div>

                    <div className="bg-gradient-to-tr from-teal-600 via-teal-900 to-teal-800 w-full sm:w-[210px]  h-[220px] rounded-3xl px-3 flex justify-center items-end text-white">
                        <p className="mb-2 text-center">
                            If you prefer staying within your comfort zone and
                            avoid embracing challenges or setbacks, the dynamic
                            environment of 23 Ventures might not suit you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Studio;
