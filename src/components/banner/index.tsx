import React from "react";
import Image from "next/image";

export const Banner: React.FC = () => {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full">
            <Image
                src="https://a0.muscache.com/im/pictures/a2704500-b282-4411-a2fb-d7f80c4c72a8.jpg?im_w=1200"
                layout="fill"
                objectFit="cover"
            />

            <div className="absolute text-white top-2/3 w-full text-center">
                <p className=" sm:text-lg 2xl:text-5xl font-bold " >
                    Hãy để trí tò mò của bạn dẫn lối
                </p>
                <button className="text-purple-600 text-base bg-white mt-8 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
                    Tìm kiếm linh hoạt
                </button>
            </div>
        </div>
    );
};

export default Banner;
