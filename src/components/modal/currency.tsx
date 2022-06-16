import React, { useRef, useState } from "react";
import { Login } from "@components/login";
import { useOnClickOutside } from "usehooks-ts";
import { VerifyIcon } from "@components/icons";
import { CheckIcon, StarIcon } from "@heroicons/react/solid";

export const CurrencyModal: React.FC = () => {
   
   

    return (
        <div className="pb-4">
            <div className="">
            <h2 className="font-semibold text-xl pb-4">
                Chọn loại tiền tệ phổ biến
            </h2>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 ">
                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4 border-black border">
                    <p className="text-black font-medium m-0">Đô la Mỹ</p>
                    <p>USD - $</p>
                </div>

                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4">
                    <p className="text-black font-medium m-0 ">Baht Thái Lan</p>
                    <p>THB - ฿</p>
                </div>

                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4">
                    <p className="text-black font-medium m-0">Bảng Anh</p>
                    <p>GBP - £</p>
                </div>
            </div>

            <h2 className="font-semibold text-xl py-4 ">Chọn loại tiền tệ</h2>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-3 ">
            <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4 border-black border">
                    <p className="text-black font-medium m-0">Đô la Mỹ</p>
                    <p>USD - $</p>
                </div>

                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4">
                    <p className="text-black font-medium m-0 ">Baht Thái Lan</p>
                    <p>THB - ฿</p>
                </div>

                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4">
                    <p className="text-black font-medium m-0">Bảng Anh</p>
                    <p>GBP - £</p>
                </div>

                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4">
                    <p className="text-black font-medium m-0">Euro</p>
                    <p>EUR - €</p>
                </div>

                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4">
                    <p className="text-black font-semibold m-0">Won Hàn Quốc</p>
                    <p>KRW - ₩</p>
                </div>

                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4">
                    <p className="text-black font-semibold m-0">Yên Nhật</p>
                    <p>JPY - ¥</p>
                </div>

                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4">
                    <p className="text-black font-semibold m-0">Nhân Dân Tệ Trung Quốc</p>
                    <p>CNY - ￥</p>
                </div>

                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4">
                    <p className="text-black font-medium m-0">Rupee Ấn Độ</p>
                    <p>INR - ₹</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CurrencyModal;
