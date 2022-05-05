import React from "react";
import Head from "next/head";
import LoginHeader from "@components/header/LoginHeader";
import { StickyHeader } from "@components/header/StickyHeader";
import { Footer } from "@components/footer";
import { FilterIcon } from "@components/icons";
import {
    ChevronLeftIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { format } from "date-fns";
import { InfoCards } from "@components/InfoCards";
import { useQuery } from "react-query";
import axios from "axios";

import { Map } from "@components/map";

const Search: React.FC = () => {
    const router = useRouter();
    const { location, startDate, endDate, guests } = router.query;

    // const startDateFormat = format(new Date(startDate), "dd/MM/yyyy");
    // const endDateFormat = format(endDate, "dd/MM/yyyy");
    // const searchResult = () => {
    //     return axios.get("https://jsonkeeper.com/b/5NPS");
    // }

    // const { isLoading, data } = useQuery('key_unique', searchResult)

    return (
        <div>
            <Head>
                <title>
                    Airbnb® | {location} - Nơi nghỉ dưỡng & Nơi ở - Airbnb{" "}
                </title>
                <link
                    rel="icon"
                    href="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png"
                    type="image/x-icon"
                ></link>
            </Head>

            <StickyHeader title="Thay đổi tìm kiếm" place={location} />

            <main className="font-normal ">
                <section className="flex-grow pt-6 px-6 ">
                    <div className="hidden lg:inline-flex mb-5 space-x-3 whitespace-nowrap]">
                        <div className="border-r border-gray-300 space-x-3 pr-4 border-h-[75%] flex ">
                            <button className="px-4 py-2 border border-gray-500 hover:border-black hover:shadow-lg cursor-pointer active:scale-95 active:bg-gray 100 transition transform duration-100 ease-out rounded-full flex items-center">
                                Giá
                                <div className="w-[16px] h-[16px] ml-2">
                                    <ChevronDownIcon />
                                </div>
                            </button>

                            <button className="px-4 py-2 border border-gray-500 hover:border-black hover:shadow-lg cursor-pointer active:scale-95 active:bg-gray 100 transition transform duration-100 ease-out rounded-full flex items-center">
                                Loại nơi ở
                                <div className="w-[16px] h-[16px] ml-2">
                                    <ChevronDownIcon />
                                </div>
                            </button>
                        </div>
                        <button className="px-4 py-2 border border-gray-500 hover:border-black hover:shadow-lg cursor-pointer active:scale-95 active:bg-gray 100 transition transform duration-100 ease-out rounded-full">
                            Hủy miễn phí
                        </button>

                        <button className="px-4 py-2 border border-gray-500 hover:border-black hover:shadow-lg cursor-pointer active:scale-95 active:bg-gray 100 transition transform duration-100 ease-out rounded-full">
                            Mấy sấy quần áo
                        </button>

                        <button className="px-4 py-2 border border-gray-500 hover:border-black hover:shadow-lg cursor-pointer active:scale-95 active:bg-gray 100 transition transform duration-100 ease-out rounded-full">
                            Wi-fi
                        </button>

                        <button className="px-4 py-2 border border-gray-500 hover:border-black hover:shadow-lg cursor-pointer active:scale-95 active:bg-gray 100 transition transform duration-100 ease-out rounded-full">
                            Bếp
                        </button>

                        <button className="px-4 py-2 border border-gray-500 hover:border-black hover:shadow-lg cursor-pointer active:scale-95 active:bg-gray 100 transition transform duration-100 ease-out rounded-full">
                            Chỗ để xe miễn phí
                        </button>

                        <button className="px-4 py-2 border border-gray-500 hover:border-black hover:shadow-lg cursor-pointer active:scale-95 active:bg-gray 100 transition transform duration-100 ease-out rounded-full">
                            Máy giặt
                        </button>

                        <button className="px-4 py-2 border border-gray-500 hover:border-black hover:shadow-lg cursor-pointer active:scale-95 active:bg-gray 100 transition transform duration-100 ease-out rounded-full">
                            Bồn tắm nước nóng
                        </button>

                        <button className="px-4 py-2 border border-gray-500 hover:border-black hover:shadow-lg cursor-pointer active:scale-95 active:bg-gray 100 transition transform duration-100 ease-out rounded-full">
                            Lò sưởi trong nhà
                        </button>

                        <button className="px-4 py-2 border border-gray-500 hover:border-black hover:shadow-lg cursor-pointer active:scale-95 active:bg-gray 100 transition transform duration-100 ease-out rounded-full flex items-center space-x-3">
                            <div className="pr-2">
                                <FilterIcon />{" "}
                            </div>
                            Bộ lọc
                        </button>
                    </div>
                </section>

                <section className="flex ">
                    {/* {data?.data.map(
                        (items: any) => ( */}
                    <div className="xl:w-3/5  ">
                        <hr className="text-gray-300 "></hr>
                        <div className="px-4">
                            <p className="my-4 text-sm">
                                Hơn 300 chỗ ở tại {location}{" "}
                            </p>

                            <p className="pb-4 m-0">
                                Kiểm tra lại quy định hạn chế đi lại trong đại
                                dịch COVID-19 trước khi đặt.
                                <span>
                                    {" "}
                                    <a
                                        className="underline"
                                        href="https://www.airbnb.com.vn/help/topic/1418/government-travel-restrictions-and-advisories"
                                    >
                                        Tìm hiểu thêm
                                    </a>
                                </span>
                            </p>

                            <InfoCards
                            // key={items.key}
                            // img={items.img}
                            // location={items.location}
                            // title={items.title}
                            // description={items.description}
                            // star={items.star}
                            // price={items.price}
                            // total={items.total}
                            />
                            {/* ),
                    )} */}

                            <div className="items-center flex space-x-8 justify-center pb-4 pt-10 ">
                                <button>
                                    {" "}
                                    <ChevronLeftIcon
                                        fill="#dddddd"
                                        className=" w-5 h-5"
                                        cursor={"not-allowed"}
                                        fontSize="light"
                                    />{" "}
                                </button>
                                <button className="rounded-full bg-black text-white w-8 h-8 font-bold">1</button>
                                <button className="rounded-full font-bold text-black w-8 h-8 hover:bg-gray-300">2</button>
                                <button className="rounded-full font-bold text-black w-8 h-8 hover:bg-gray-300">3</button>
                                <div className="items-center font-bold text-black align-baseline">...</div>
                                <button className="rounded-full font-bold text-black w-8 h-8 hover:bg-gray-300">4</button>
                                <button className="rounded-full font-bold text-black w-8 h-8 hover:bg-gray-300">5</button>
                                <button className="rounded-full font-bold text-black w-8 h-8 hover:bg-gray-300">6</button>
                                <button>
                                    {" "}
                                    <ChevronRightIcon
                                        fill="black"
                                        className=" w-6 h-6 rounded-full font-bold text-black hover:bg-gray-300"
                                    />{" "}
                                </button>
                                
                            </div>
                            <p className="text-sm text-center pb-8 m-0">1 - 6 trong số hơn 300 chỗ ở</p>
                            <p className="text-xs text-center pb-6">Nhập ngày để xem giá đầy đủ. Áp dụng phụ phí. Có thể phát sinh thuế.</p>
                        </div>
                    </div>

                    <div className="hidden xl:flex-grow xl:inline-flex lg:w-2/5  max-h-[600px] sticky top-[15%]">
                        <Map />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Search;
