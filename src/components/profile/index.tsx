import React, { useRef, useState } from "react";
import { Login } from "@components/login";
import { useOnClickOutside } from "usehooks-ts";
import { VerifyIcon } from "@components/icons";
import { CheckIcon, StarIcon } from "@heroicons/react/solid";

export const Profile: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    const ref = useRef(null);

    const handleClickOutside = () => {
        // Your custom logic here
        setIsOpen(false);
    };

    const handleClickInside = () => {
        setIsOpen(true);
        console.log("clicked inside");
    };

    useOnClickOutside(ref, handleClickOutside);

    return (
        <div className="mx-[16%]">
            <div className="flex flex-col md:flex-row py-10">
                <div className="flex-col border border-gray-300 rounded-xl w-1/3 p-6">
                    <div className="flex-col items-center">
                        <img
                            src="https://a0.muscache.com/defaults/user_pic-225x225.png?v=3"
                            className="rounded-full md:w-32 md:h-32 w-16 h-16 block mx-auto"
                        ></img>
                        <p className="text-black underline font-semibold cursor-pointer decoration-1 text-center">
                            Cập nhật ảnh
                        </p>

                        <VerifyIcon />

                        <h2 className="text-black font-semibold text-xl py-3">
                            Xác minh danh tính
                        </h2>

                        <p className="text-base">
                            Xác thực danh tính của bạn với huy hiệu xác minh
                            danh tính
                        </p>

                        <button className=" mt-5 py-3 px-5 cursor-pointer active:scale-95 active:bg-gray 100 transition transform ease-out block border rounded-xl font-medium text-black hover:bg-gray-300  duration-200 ">
                            Nhận huy hiệu
                        </button>

                        <div className="border-b border-gray-300 py-4"></div>

                        <h2 className="text-2xl text-black font-semibold py-5">Eric đã xác nhận</h2>

                        <div className="flex pb-10">
                            <CheckIcon className="w-4 h-4 text-black font-semibold mr-2 self-center"/>
                            <p className="">Địa chỉ email</p>
                        </div>
                    </div>
                </div>

                <div className="flex-col flex-grow px-14">
                    <h2 className="text-black font-semibold text-3xl">
                        Xin chào, tôi là Eric
                    </h2>

                    <p className="m-0 pb-3">Bắt đầu tham gia vào 2022</p>

                    <p className="text-black font-semibold underline cursor-pointer decoration-1 pb-4">
                        Chỉnh sửa hồ sơ
                    </p>

                    <div className="flex border-b border-gray-300 py-8">
                        <StarIcon className="w-6 h-6 text-black mr-2 self-center"/>
                        <h2 className="text-black text-2xl font-semibold">0 đánh giá</h2>
                    </div>

                    <div className="py-6 border-b border-gray-300">
                        <p className="text-black underline font-semibold cursor-pointer decoration-1">Đánh giá của bạn</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;
