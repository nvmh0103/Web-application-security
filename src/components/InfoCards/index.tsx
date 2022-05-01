import React from "react";
import Image from "next/image";

import { useEffect, useState } from "react";

import search from "@public/search.json";

import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import router from "next/router";

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

        const { location, startDate, endDate, guests } = router.query;

        return (
            <div>
                {(search?.item ?? []).map((item) => (
                    <div className="flex py-4 px-2 border-b border-gray-500 cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first: border-t">
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

                            <div className="flex justify-between items-end pt-5">
                                <p className="flex items-center font-semibold">
                                    <StarIcon className="h-5 text-red-500 mr-1" />
                                    {item.star}
                                    <p className="font-lg text-gray-400 font-normal">
                                        ({item.rate} đánh giá)
                                    </p>
                                </p>

                                <div>
                                    <p className="text-lg lg:text-2xl d pb-2 m-0">
                                        <span className="font-semibold">
                                            {item.price}
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
