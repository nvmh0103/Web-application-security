import React from "react";

import { Button } from "@components";

import { Cards } from "@components/cards";

export const Main: React.FC = () => {
    return (
        <div className="px-8 sm:px-16 pt-6 ">
            <h2 className="text-4xl font-bold pt-12 pb-8 m-0 text-black">
                Cảm hứng cho chuyến đi tiếp theo của bạn
            </h2>
            <section className="mx-auto ">
                <Cards />
            </section>

            <h2 className="text-4xl font-bold pt-12 pb-8 m-0 text-black">
                Khám phá trải nghiệm Airbnb
            </h2>

            {/* Medium card, but only 2 so... */}
            <section className="mx-auto relative py-8 grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="relative">
                    <img
                        src="https://a0.muscache.com/im/pictures/c2adcb16-6c3f-4041-86a1-afa9c303c500.jpg?im_w=720"
                        alt=""
                        className="object-cover rounded-2xl "
                    />

                    <div className="absolute xl:top-32 xl:left-12 top-10 left-6 text-white">
                        <h2 className="xl:text-5xl md:text-4xl text-2xl mb-3  2xl:w-[373px] md:leading-[60px]">
                            Những điều nên trải nghiệm trong chuyến đi của bạn
                        </h2>
                        <button className="text-black bg-white font-semibold px-6 py-4 md:mt-5 mt-3 rounded-lg hover:bg-gray-300 leading-5 text-base">
                            Trải nghiệm
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <img
                        src="https://a0.muscache.com/im/pictures/c1bdf53f-2a19-4529-aa9b-1b0e6bd8d0ee.jpg?im_w=720"
                        alt=""
                        className="object-cover rounded-2xl"
                    />

                    <div className="absolute xl:top-32 xl:left-12 top-10 left-6 text-white">
                        <h2 className="xl:text-5xl md:text-4xl text-2xl mb-3  2xl:w-[442px] md:leading-[60px]">
                            Những điều nên trải nghiệm tại nhà
                        </h2>
                        <button className="text-black bg-white px-6 py-4 md:mt-5  rounded-lg hover:bg-gray-300 leading-5 font-semibold  text-base">
                            Trải nghiệm trực tuyến
                        </button>
                    </div>
                </div>
            </section>

            {/* A bigger card, and is only 1  */}
            <section>
                <div className="relative pt-12 pb-8">
                    <img
                        src="https://a0.muscache.com/im/pictures/0528b0f7-4c0c-47bc-9786-d91454f531ba.jpg?im_w=1200"
                        alt=""
                        className="w-full object-cover rounded-2xl"
                    />

                    <div className="absolute 2xl:top-32 2xl:left-12 md:top-20 md:left-8 top-12 left-6">
                        <h1 className=" xl:text-[95px] md:text-4xl mb-3 text-white 2xl:leading-[105px] xl:leading-[105px] text-2xl md:leading-[47px]">
                            {"Bạn có thắc mắc "} 
                            <br className="hidden sm:block"></br>
                             {"về việc "} 
                            <br className="hidden sm:block"></br> 
                            đón tiếp khách?
                        </h1>
                        <button className="text-sm font-semibold  text-black bg-white rounded-lg md:mt-5 px-3 py-3 hover:bg-gray-300">
                            Hỏi ý kiến Chủ nhà siêu cấp
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};
