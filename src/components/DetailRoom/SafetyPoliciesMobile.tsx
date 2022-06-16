import React, { useRef, useState } from "react";
import { Login } from "@components/login";
import { useOnClickOutside } from "usehooks-ts";
import { VerifyIcon } from "@components/icons";
import { CheckIcon, StarIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Modal, useModal } from "@nextui-org/react";
import {
    ClockIcon,
    CreditCardIcon,
    ExclamationCircleIcon,
    KeyIcon,
    SparklesIcon,
} from "@heroicons/react/outline";
import { MoreUnderline } from "@components/moreUnderline";
import { useRouter } from "next/router";

export const Payment: React.FC = () => {
    const { setVisible, bindings } = useModal();

    const Router = useRouter();

    const {
        roomID,
        img,
        place,
        title,
        displayName,
        homeType,
        totalGuests,
        totalBedrooms,
        totalBathrooms,
        hasTv,
        hasKitchen,
        hasAirCon,
        hasHeating,
        hasWifi,
        star,
        rating,
        price,
    } = Router.query;

    return (
        <div>
            <div
                className="py-5 flex justify-between border-b border-gray-300"
                onClick={() => {
                    setVisible(true);
                }}
            >
                <div className="flex flex-col space-y-3 max-w-[80%]">
                    <h3 className="text-black text-2xl">Y tế và An toàn</h3>

                    <div className="flex items-center">
                        <SparklesIcon className="h-6 w-8 text-black mr-2 self-center" />
                        <p className="text-black font-normal">
                            Các biện pháp an toàn trong đại dịch COVID-19 của
                            Airbnb được áp dụng
                        </p>
                    </div>
                </div>

                <ChevronRightIcon className="h-8 text-black mr-2 self-center w-10" />
            </div>

            <Modal
                scroll
                closeButton
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                fullScreen
                {...bindings}
            >
                <Modal.Header className="border-b border-gray-300">
                    <h2 className="text-xl text-black">Y tế và An toàn</h2>
                </Modal.Header>
                <Modal.Body>
                    <div className="flex flex-col space-y-3 p-4">
                        <div className="flex items-center">
                            <SparklesIcon className="h-5 w-5 text-black mr-2 self-center" />
                            <p className="text-black font-normal pl-2">
                                Các biện pháp an toàn trong đại dịch COVID-19
                                của Airbnb được áp dụng
                            </p>
                        </div>

                        <div className="flex items-center">
                            <ExclamationCircleIcon className="h-5 w-5 text-black mr-2 self-center" />
                            <p className="text-black font-normal pl-2">
                                Không có máy phát hiện khí CO
                            </p>
                        </div>

                        <div className="flex items-center">
                            <ExclamationCircleIcon className="h-5 w-5 text-black mr-2 self-center" />
                            <p className="text-black font-normal pl-2">
                                Camera an ninh/thiết bị ghi{" "}
                                
                            </p>
                        </div>

                        <div className="flex items-center">
                            <CreditCardIcon className="h-5 w-5 text-black mr-2 self-center " />
                            <p className="text-black font-normal pl-2">
                                Đặt cọc - Nếu bạn gây hư hại cho nhà, bạn có thể
                                bị thu phí lên đến {"$" + price + "1"}
                            </p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Payment;
