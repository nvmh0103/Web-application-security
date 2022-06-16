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
                // onClick={() => {
                //     setVisible(true);
                // }}
            >
                <div className="flex flex-col space-y-3  max-w-[80%]">
                    <h3 className="text-black text-2xl">Chính sách hủy</h3>

                    <p className="text-black font-normal">
                        Thêm ngày cho chuyến đi của bạn để nhận thông tin về
                        chính sách hủy cho đặt phòng này.
                    </p>
                </div>

                <ChevronRightIcon className="h-8 text-black mr-2 self-center w-10" />
            </div>

            {/* <Modal
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
                        <p className="text-black font-normal">
                            Thêm ngày cho chuyến đi của bạn để nhận thông tin về
                            chính sách hủy cho đặt phòng này.
                        </p>
                    </div>
                </Modal.Body>
            </Modal> */}
        </div>
    );
};

export default Payment;
