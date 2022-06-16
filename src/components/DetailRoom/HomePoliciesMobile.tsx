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
            <div className="py-5 flex justify-between border-b border-gray-300" onClick={() => {
                setVisible(true);
            }}>
                <div className="flex flex-col space-y-3 max-w-[80%]">
                    <h3 className="text-black text-2xl">Nội quy nhà</h3>

                    <div className="flex items-center">
                        <ClockIcon className="h-5 w-5 text-black mr-2" />
                        <p className="text-black font-normal">
                            Nhận phòng: Sau 15:00
                        </p>
                    </div>
                </div>

                <ChevronRightIcon className="h-8  w-10 text-black mr-2 self-center"/>
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
                    <h2 className="text-xl text-black">Nội quy nhà</h2>
                </Modal.Header>
                <Modal.Body>
                    <div className="flex flex-col space-y-3 p-4">
                        <div className="flex items-center">
                            <ClockIcon className="h-5 w-5 text-black mr-2" />
                            <p className="text-black font-normal">
                                Nhận phòng: Sau 15:00
                            </p>
                        </div>

                        <div className="flex items-center">
                            <ClockIcon className="h-5 w-5 text-black mr-2" />
                            <p className="text-black font-normal">
                                Trả phòng: 12:00
                            </p>
                        </div>

                        <div className="flex items-center">
                            <KeyIcon className="h-5 w-5 text-black mr-2" />
                            <p className="text-black font-normal">
                                Tự nhận phòng bằng hộp khóa
                            </p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Payment;
