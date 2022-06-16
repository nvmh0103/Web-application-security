import React, { useRef, useState } from "react";
import { Login } from "@components/login";
import { useOnClickOutside } from "usehooks-ts";
import { TVIcon, VerifyIcon, WayToPoolIcon } from "@components/icons";
import { CheckIcon, StarIcon, WifiIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { CalendarIcon, FireIcon, KeyIcon } from "@heroicons/react/outline";
import { Modal, useModal, Text } from "@nextui-org/react";

export const Payment: React.FC = () => {
    const Router = useRouter();

    const { setVisible, bindings } = useModal();

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
        <div
            className="flex flex-col py-10 border-b border-gray-300 "
            id="tienNghi"
        >
            <h2 className="text-black text-2xl pb-6">
                Nơi này có những gì cho bạn
            </h2>
            <div className="flex font-normal text-black justify-between">
                <div className="flex flex-col space-y-4 flex-grow">
                    <div className="flex">
                        <div className="mr-2">
                            {" "}
                            <WayToPoolIcon />{" "}
                        </div>
                        <p>Lối ra hồ</p>
                    </div>
                    <div className="flex">
                        {hasWifi && (
                            <>
                                <WifiIcon className="w-6 h-6 mr-2" />
                                <p>Wi-fi</p>
                            </>
                        )}
                    </div>
                    <div className="flex">
                        <KeyIcon className="w-6 h-6 mr-2" />
                        <p>Tự nhận phòng</p>
                    </div>
                    {/* <div className="flex">
                                            <StarIcon className="w-6 h-6 mr-2" />
                                            <p>Lối ra hồ</p>
                                        </div>
                                        <div className="flex">
                                            <StarIcon className="w-6 h-6 mr-2" />
                                            <p>Lối ra hồ</p>
                                        </div> */}
                </div>

                <div className="lg:flex lg:flex-col space-y-4 flex-grow hidden">
                    <div className="flex">
                        <FireIcon className="w-6 h-6 mr-2" />
                        <p>Lò sưởi trong nhà</p>
                    </div>
                    <div className="flex">
                        <CalendarIcon className="w-6 h-6 mr-2" />
                        <p>Cho phép ở dài hạn</p>
                    </div>
                    <div className="flex">
                        <div className="mr-2">
                            {" "}
                            <TVIcon />{" "}
                        </div>
                        <p>TV và Netflix</p>
                    </div>
                    {/* <div className="flex">
                                            <StarIcon className="w-6 h-6 mr-2" />
                                            <p>Lối ra hồ</p>
                                        </div>
                                        <div className="flex">
                                            <StarIcon className="w-6 h-6 mr-2" />
                                            <p>Lối ra hồ</p>
                                        </div> */}
                </div>
            </div>
            <button
                className="lg:w-1/2 w-full mt-10 py-3 cursor-pointer active:scale-95 active:bg-gray 100 transition transform ease-out block border rounded-xl font-medium text-black hover:bg-gray-300  duration-200 "
                onClick={() => {
                    setVisible(true);
                }}
            >
                {" "}
                Hiển thị tất cả tiện nghi{" "}
            </button>

            <Modal
                scroll
                closeButton
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                width="900px"
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18} className="font-semibold">
                        Nơi này có những gì cho bạn
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <div className="flex flex-col space-y-4 flex-grow py-6">
                        <div className="flex">
                            <div className="mr-2">
                                {" "}
                                <WayToPoolIcon />{" "}
                            </div>
                            <p>Lối ra hồ</p>
                        </div>

                        {hasWifi && (
                            <div className="flex">
                                <>
                                    <WifiIcon className="w-6 h-6 mr-2" />
                                    <p>Wi-fi</p>
                                </>
                            </div>
                        )}
                        <div className="flex">
                            <KeyIcon className="w-6 h-6 mr-2" />
                            <p>Tự nhận phòng</p>
                        </div>

                        <div className="flex">
                            <FireIcon className="w-6 h-6 mr-2" />
                            <p>Lò sưởi trong nhà</p>
                        </div>
                        <div className="flex">
                            <CalendarIcon className="w-6 h-6 mr-2" />
                            <p>Cho phép ở dài hạn</p>
                        </div>
                        <div className="flex">
                            <div className="mr-2">
                                {" "}
                                <TVIcon />{" "}
                            </div>
                            <p>TV và Netflix</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Payment;
