import React, { useState } from "react";
import { Modal, useModal, Text } from "@nextui-org/react";
export const LanguageModal: React.FC = () => {
    const { setVisible, bindings } = useModal();
   
    return (
        <div className="pb-4">
           
            <h2 className="font-semibold text-xl pb-4">
                Ngôn ngữ và khu vực được đề xuất
            </h2>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 ">
                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4 border-black border">
                    <p className="text-black font-medium m-0">Tiếng Việt</p>
                    <p>Việt Nam</p>
                </div>

                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4">
                    <p className="text-black font-medium m-0 ">English</p>
                    <p>United States</p>
                </div>

                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4">
                    <p className="text-black font-medium m-0">English</p>
                    <p>United Kingdom</p>
                </div>
            </div>

            <h2 className="font-semibold text-xl py-4 ">Chọn ngôn ngữ và khu vực</h2>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-3 ">
                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4 border-black border">
                    <p className="text-black font-medium m-0">Tiếng Việt</p>
                    <p>Việt Nam</p>
                </div>

                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4">
                    <p className="text-black font-medium m-0">
                        Bahasa Indonesia
                    </p>
                    <p>Indonesia</p>
                </div>

                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4">
                    <p className="text-black font-medium m-0 ">English</p>
                    <p>United States</p>
                </div>

                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4">
                    <p className="text-black font-medium m-0">English</p>
                    <p>United Kingdom</p>
                </div>

                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4">
                    <p className="text-black font-semibold m-0">한국어</p>
                    <p>대한민국</p>
                </div>

                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4">
                    <p className="text-black font-semibold m-0">日本語</p>
                    <p>日本</p>
                </div>

                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4">
                    <p className="text-black font-semibold m-0">ไทย</p>
                    <p>ประเทศไทย</p>
                </div>

                <div className="flex flex-col rounded-lg hover:bg-gray-300 px-4">
                    <p className="text-black font-medium m-0">Русский</p>
                    <p>Россия</p>
                </div>
            </div>
        </div>
    );
};

export default LanguageModal;
