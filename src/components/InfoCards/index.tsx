import React from "react";
import Image from "next/image";

import { useEffect, useState } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";

import search from "@public/search.json";

import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import router, { useRouter } from "next/router";
import { addDays } from "date-fns";
import { openInNewTab } from "@utils/openInNewTab";
import { TableRow } from "@material-ui/core";
import { setTarget } from "framer-motion/types/render/utils/setters";
import { API_ENDPOINTS } from "@utils/apiEndpoints";
import useSWR, { Key, Fetcher } from "swr";
import axios from "axios";

import { useGetPosts } from "src/hooks/useRequest";
import { Loading } from "@nextui-org/react";

export interface Location {
    id: number;
    displayName: string;
    name: string;
    latitude: number;
    longitude: number;
}

export interface Picture {
    id: number;
    url: string;
    type: string;
    roomId: number;
}

export interface Datum {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    approved: boolean;
    homeType: string;
    roomType: string;
    totalOccupancy: number;
    totalBedrooms: number;
    totalBathrooms: number;
    summary: string;
    address: string;
    hasTv: boolean;
    hasKitchen: boolean;
    hasAirCon: boolean;
    hasHeating: boolean;
    hasInternet: boolean;
    price: number;
    rating: number;
    pubishedAt: Date;
    ownerId: number;
    longtitude: number;
    latitude: number;
    locationId: number;
    totalReviews: number;
    location: Location;
    pictures: Picture[];
    reviews: any[];
}

export interface Pagination {
    currentPage: number;
    hasNextPage: number;
    hasPreviousPage: number;
    totalPage: number;
}

export interface infoRooms {
    message: string;
    data: Datum[];
    pagination: Pagination;
}



const getInfoRooms = async () =>
    await (
        await fetch(
            `https://cc62e73f33af4d5eb355d601efc35466-3afda50d-vm-80.vlab2.uit.edu.vn/api/v1${API_ENDPOINTS.GET_ROOMS}?page=1&limit=6`,
        )
    ).json();

export const InfoCards: React.FC = ({
    
}) => {
    // const address = `https://cc62e73f33af4d5eb355d601efc35466-3afda50d-vm-80.vlab2.uit.edu.vn/api/v1${API_ENDPOINTS.GET_ROOMS}?page=1&limit=2`;

    const { data, isLoading, isFetching } = useQuery<infoRooms>(
        "info",
        getInfoRooms,
    );
    console.log(data);

    if (!data) {
        return <div>Dữ liệu không tìm thấy :)</div>;
    }

    if (isLoading) return <Loading />;

    const Router = useRouter();

    const { location, startDate, endDate, guests } = Router.query;

    return (
        <div>
            {data?.data?.map((el) => {
                return (
                    <div
                        className="flex py-4 px-2 border-b border-gray-500 cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first: border-t"
                        onClick={() => {
                            {
                                Router.push({
                                    pathname: "/rooms/[roomID]",
                                    query: {
                                        roomID: "room_id=" + el.id,

                                        place: location,
                                        displayName: el.location.displayName,
                                        title: el.name,
                                        homeType: el.homeType,
                                        totalGuests: el.totalOccupancy,
                                        totalBedrooms: el.totalBedrooms,
                                        totalBathrooms: el.totalBathrooms,
                                        hasTv: el.hasTv,
                                        hasKitchen: el.hasKitchen,
                                        hasAirCon: el.hasAirCon,
                                        hasHeating: el.hasHeating,
                                        hasWifi: el.hasInternet,
                                        star: el.rating,
                                        rating: el.totalReviews,
                                        price: el.price,
                                        img: el.pictures[0].url,
                                    },
                                });
                            }
                        }}
                    >
                        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 ">
                            <Image
                                src={el.pictures[0].url}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col flex-grow pl-5">
                            <div className="flex justify-between">
                                <p>
                                    {"Toàn bộ " +
                                        el.homeType +
                                        " tại " +
                                        el.location?.displayName}
                                </p>

                                <HeartIcon
                                    className="h-7 cursor-pointer"

                                    // onClick={() => {
                                    //     fillHeart ? (
                                    //         setFillHeart("red")
                                    //     ) : (
                                    //         setFillHeart("white")
                                    //     );
                                    // }}

                                    // fill={fillHeart}
                                />
                            </div>

                            <h4 className="text-xl font-semibold">
                                {el?.name}
                            </h4>

                            <div className="border-b w-10 pt-2 border-gray-500" />

                            <p className="pt-2 text-sm flex-grow flex">
                                {el.totalOccupancy + "  khách ·  "}
                                {el.totalBedrooms === 0
                                    ? ""
                                    : el.totalBedrooms + "  phòng ngủ ·  "}
                                {el.totalBathrooms === 0
                                    ? ""
                                    : el.totalBathrooms + "  phòng tắm ·  "}
                                {el.hasTv ? "" : "Tivi ·  "}
                                {el.hasInternet ? "" : "Wi-fi ·  "}
                                {el.hasKitchen ? "" : "Bếp ·  "}
                                {el.hasAirCon ? "" : "Điều hòa ·  "}
                                {el.hasHeating ? "" : "Máy sưởi ·  "}
                            </p>

                            <div className="flex sm:flex-row flex-col justify-between items-end pt-5">
                                <p className="flex items-center font-semibold">
                                    <StarIcon className="h-5 text-red-500 mr-1" />
                                    {el?.rating}
                                    <p className="font-lg text-gray-400 font-normal sm:block hidden">
                                        ({el.totalReviews} đánh giá)
                                    </p>
                                </p>

                                <div className="">
                                    <p className="text-lg lg:text-2xl d sm:pb-2 m-0">
                                        <span className="font-semibold">
                                            {"$" + el?.price}
                                        </span>
                                        <span> / đêm </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export async function getStaticProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery<infoRooms>("info", getInfoRooms);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}
