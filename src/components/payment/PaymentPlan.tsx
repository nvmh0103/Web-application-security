import React, { useRef, useState } from "react";
import { Login } from "@components/login";
import { useOnClickOutside } from "usehooks-ts";
import { VerifyIcon } from "@components/icons";
import { CheckIcon, StarIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

export const Payment: React.FC = () => {
    const Router = useRouter();

    const { price, endDate } = Router.query;

    return (
        <div className="py-6 border-b border-gray-300">
            <h2 className="text-2xl text-black font-semibold pb-6">
                Chọn cách thanh toán
            </h2>

            <div className="flex flex-col border border-gray-300 rounded-xl">
                <div className="flex justify-between border-b p-4 border-gray-300 focus:border-black">
                    <div className="flex-grow">
                        <div className="flex justify-between">
                            <p className="text-black font-semibold m-0">
                                Trả toàn bộ
                            </p>
                            <p className="text-black font-semibold m-0">
                                {"$" + price}
                            </p>
                        </div>
                        <p>
                            Thanh toán toàn bộ số tiền ngay bây giờ và bạn đã
                            sẵn sàng.
                        </p>
                    </div>

                    <div className="px-3">
                        <input
                            className="h-[22px] w-[22px]"
                            id="0"
                            name="checked"
                            type="radio"
                            value="0"
                            checked
                        ></input>
                    </div>
                </div>

                <div className="flex justify-between  p-4 border-gray-300 focus:border-black">
                    <div className="flex-grow">
                        <div className="flex justify-between">
                            <p className="text-black font-semibold m-0">
                                Trả ngay một phần, phần còn lại trả sau
                            </p>
                            <p className="text-black font-semibold m-0">
                                {"$" + price / 2}
                            </p>
                        </div>
                        <p className="m-0">
                            Thanh toán ngay {"$" + price / 2} và phần còn lại{" "}
                            {"($" + price / 2 + ") "}sẽ tự động được trừ vào
                            cùng phương thức thanh toán này vào {endDate}.
                        </p>
                        <p>Không phát sinh phụ phí</p>

                        <div className="py-2 text-black font-semibold underline cursor-pointer">
                            Thông tin thêm
                        </div>
                    </div>

                    <div className="px-3">
                        <input
                            className="h-[22px] w-[22px]"
                            name="checked"
                            id="0"
                            type="radio"
                            value="0"
                        ></input>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;