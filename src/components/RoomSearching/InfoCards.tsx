import React from "react";
import Image from "next/image";

import { useEffect, useState } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";

import search from "@public/search.json";

import { HeartIcon } from "@heroicons/react/outline";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    StarIcon,
} from "@heroicons/react/solid";
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
import http from "@utils/http";

export interface RootObject {
    deleteAt: boolean;
    _id: string;
    name: string;
    guests: number;
    bedRoom: number;
    bath: number;
    description: string;
    price: number;
    elevator: boolean;
    hotTub: boolean;
    pool: boolean;
    indoorFireplace: boolean;
    dryer: boolean;
    gym: boolean;
    kitchen: boolean;
    wifi: boolean;
    heating: boolean;
    cableTV: boolean;
    __v: number;
    image: string;
    locationId: {
        deleteAt: boolean;
        name: string;
        province: string;
        country: string;
        valueate: number;
        image: string;
    };
}



const getInfoRooms = async () => {
    // await (
    //     await http.get(
    //         `https://airbnb.cybersoft.edu.vn${API_ENDPOINTS.SEARCH}`,
    //     )
    // ).data.json();
    const response = await http.get(
        `https://airbnb.cybersoft.edu.vn${API_ENDPOINTS.GET_ROOMS}`,
    );

    return response.data;
};

export const InfoCards: React.FC = () => {
    // const address = `https://cc62e73f33af4d5eb355d601efc35466-3afda50d-vm-80.vlab2.uit.edu.vn/api/v1${API_ENDPOINTS.GET_ROOMS}?page=1&limit=2`;

    const { data, isLoading, isFetching } = useQuery<RootObject>(
        "info",
        getInfoRooms,
    );
    console.log(data);

    if (!data) {
        return <p className="p-6">Dữ liệu không tìm thấy :)</p>;
    }

    if (isLoading) return <Loading type="points" />;

    const Router = useRouter();

    const { location, startAt, endAt, guests } = Router.query;

    // function onChangePage(pageNum: number) {
    //     page = pageNum;
    //     console.log(pageNum);
    //     Router.push({
    //         pathname: "/search",
    //         query: {
    //             location: location,
    //             startDate: startDate,
    //             endDate: endDate,
    //             guests: guests,
    //             page: pageNum,
    //         },
    //     });
    // }

    return (
        <div>
            <div>
                {/* {el.locationId.province.includes(
                            location as string,
                        ) && ( */}
                <div
                    className="flex py-4 px-2 border-b border-gray-500 cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first: border-t"
                    onClick={() => {
                        {
                            Router.push({
                                pathname: "/rooms",
                                query: {
                                    // roomID: data._id,

                                    displayName: data.name,
                                    title: data.name,

                                    totalGuests: data.guests,
                                    totalBedrooms: data.bedRoom,
                                    totalBathrooms: data.bath,
                                    hasTv: data.cableTV,
                                    hasKitchen: data.kitchen,
                                    hasAirCon: data.heating,

                                    hasWifi: data.wifi,
                                    // star: data.locationId.valueate,

                                    price: data.price,
                                    img: data.image,
                                },
                            });
                        }
                    }}
                >
                    <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 ">
                        <Image
                            src={"https://media.discordapp.net/attachments/890493745982767111/976819122971226162/BGBOxj.png"}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col flex-grow pl-5">
                        <div className="flex justify-between">
                            <p>{"Toàn bộ khách sạn/nhà ở tại" + ""}</p>

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

                        <h4 className="text-xl font-semibold">{data.name}</h4>

                        <div className="border-b w-10 pt-2 border-gray-500" />

                        <p className="pt-2 text-sm flex-grow flex">
                            {data.guests + "  khách ·  "}
                            {data.bedRoom === 0
                                ? ""
                                : data.bedRoom + "  phòng ngủ ·  "}
                            {data.bath === 0
                                ? ""
                                : data.bath + "  phòng tắm ·  "}
                            {data.cableTV ? "" : "Tivi ·  "}
                            {data.wifi ? "" : "Wi-fi ·  "}
                            {data.kitchen ? "" : "Bếp ·  "}
                            {data.heating ? "" : "Điều hòa ·  "}
                        </p>

                        <div className="flex sm:flex-row flex-col justify-between items-end pt-5">
                            <p className="flex items-center font-semibold">
                                <StarIcon className="h-5 text-red-500 mr-1" />
                                {"5"}
                                {/* <p className="font-lg text-gray-400 font-normal sm:block hidden">
                                                ({el.totalReviews} đánh giá)
                                            </p> */}
                            </p>

                            <div className="">
                                <p className="text-lg lg:text-2xl d sm:pb-2 m-0">
                                    <span className="font-semibold">
                                        {"$" + data.price}
                                    </span>
                                    <span> / đêm </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* )} */}
            </div>
            );
            {/* Pagination */}
            {/* <div className="items-center flex space-x-8 justify-center pb-4 pt-10 ">
                <button>
                    {" "}
                    {page <= 1 ? (
                        <ChevronLeftIcon
                            fill="#dddddd"
                            className=" w-5 h-5"
                            cursor={"not-allowed"}
                            fontSize="light"
                        />
                    ) : (
                        <ChevronLeftIcon
                            fill="#black"
                            className="w-6 h-6 p-1 rounded-full font-bold text-black hover:bg-gray-300"
                            // onClick={}
                                
                        />
                    )}
                </button>
                <button
                    className="rounded-full bg-black text-white w-8 h-8 font-bold"
                    // onClick={}
                >
                    1
                </button>
                <button
                    className="rounded-full font-bold text-black w-8 h-8 hover:bg-gray-300"
                    // onClick={}
                >
                    2
                </button>
                <button className="rounded-full font-bold text-black w-8 h-8 hover:bg-gray-300">
                    3
                </button>
                <div className="items-center font-bold text-black align-baseline">
                    ...
                </div>
                <button className="rounded-full font-bold text-black w-8 h-8 hover:bg-gray-300">
                    4
                </button>
                <button className="rounded-full font-bold text-black w-8 h-8 hover:bg-gray-300">
                    5
                </button>
                <button className="rounded-full font-bold text-black w-8 h-8 hover:bg-gray-300">
                    6
                </button>
                <button>
                    {page >= limit ? (
                        <ChevronRightIcon
                            fill="#dddddd"
                            className=" w-5 h-5"
                            cursor={"not-allowed"}
                            fontSize="light"
                        />
                    ) : (
                        <ChevronRightIcon
                            fill="black"
                            className=" w-6 h-6 p-1 rounded-full font-bold text-black hover:bg-gray-300"
                            // onClick={}
                               
                        />
                    )}
                </button>
            </div> */}
        </div>
    );
};

export async function getStaticProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery<RootObject>("info", getInfoRooms);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}
