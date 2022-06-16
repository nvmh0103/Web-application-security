import React, { useRef, useState } from "react";
import { Login } from "@components/login";
import { useOnClickOutside } from "usehooks-ts";
import { VerifyIcon } from "@components/icons";
import { CheckIcon, StarIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

export const Payment: React.FC = () => {
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
        <div className="py-6 border-b border-gray-300">
            <div className="flex justify-between">
                <div className="flex flex-col ">
                    <h1 className="font-semibold text-black text-2xl">
                        {"Toàn bộ " + homeType + " tại " + displayName}
                    </h1>

                    <h1 className="font-semibold text-black text-2xl">
                        Chủ nhà DA
                    </h1>
                </div>
                <img
                    src="https://media.discordapp.net/attachments/795114479133786135/972314215165616208/IMG_1227.jpg?width=497&height=662"
                    className="w-16 h-16 rounded-full cursor-pointer"
                ></img>
            </div>
            <p className="font-normal flex pt-2">
                {totalGuests + "  khách ·  "}
                {totalBedrooms === "0" ? "" : totalBedrooms + "  phòng ngủ ·  "}
                {totalBathrooms === "0"
                    ? ""
                    : totalBathrooms + "  phòng tắm ·  "}
                {hasTv == "true" ? "" : "Tivi ·  "}
                {hasWifi == "true" ? "" : "Wi-fi ·  "}
                {hasKitchen == "true" ? "" : "Bếp ·  "}
                {hasAirCon == "true" ? "" : "Điều hòa ·  "}
                {hasHeating == "true" ? "" : "Máy sưởi ·  "}
            </p>
        </div>
    );
};

export default Payment;
