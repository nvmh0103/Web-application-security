import React from "react";
import Image from "next/image";

import { useEffect, useState } from "react";

import search from "@public/search.json";

import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import router, { useRouter } from "next/router";
import { addDays } from "date-fns";
import { openInNewTab } from "@utils/openInNewTab";
import { TableRow } from "@material-ui/core";
import { setTarget } from "framer-motion/types/render/utils/setters";

// interface infoProps {
//     img?: string;
//     location?: string;
//     title?: string;
//     description?: string;
//     star?: string;
//     price?: number;
//     total?: number;
// }

export const InfoCards: React.FC = () =>
    // img = "",
    // location = "",
    // title = "",
    // description = "",
    // star = "",
    // price = 0,
    // total = 0,
    {
        const [fillHeart, setFillHeart] = useState("white");

        const Router = useRouter();

        const { location, startDate, endDate, guests } = Router.query;

        const [pickDay, setPickDay] = useState([
            {
                startDate: new Date(),
                endDate: addDays(new Date(), 7),
                key: "selection",
            },
        ]);
        return (
            <div>
                {(search?.item ?? []).map((item) => (
                    <div
                        className="flex py-4 px-2 border-b border-gray-500 cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first: border-t"
                        onClick={() => {
                            {
                                Router.push({
                                    pathname: "/rooms/[roomID]",
                                    query: {
                                        roomID: "room_id=" + item.id,

                                        place: location,
                                        location: item.location,
                                        title: item.title,
                                        description: item.description,
                                        star: item.star,
                                        rate: item.rate,
                                        price: item.price,
                                        img: item.img,
                                    },
                                });
                            }
                        }}
                    >
                        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 ">
                            <Image
                                src={item.img}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>

                        <div className="flex flex-col flex-grow pl-5">
                            <div className="flex justify-between">
                                <p>{item.location + location}</p>

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
                                {item.title}
                            </h4>

                            <div className="border-b w-10 pt-2 border-gray-500" />

                            <p className="pt-2 text-sm flex-grow">
                                {item.description}
                            </p>

                            <div className="flex sm:flex-row flex-col justify-between items-end pt-5">
                                <p className="flex items-center font-semibold">
                                    <StarIcon className="h-5 text-red-500 mr-1" />
                                    {item.star}
                                    <p className="font-lg text-gray-400 font-normal sm:block hidden">
                                        ({item.rate} đánh giá)
                                    </p>
                                </p>

                                <div className="">
                                    <p className="text-lg lg:text-2xl d sm:pb-2 m-0">
                                        <span className="font-semibold">
                                            {"$" + item.price}
                                        </span>
                                        <span> / đêm </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };
