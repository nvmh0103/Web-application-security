import React from "react";

import { useEffect, useState } from "react";

import search from "@public/search.json";

import router, { useRouter } from "next/router";
import { addDays, format } from "date-fns";
import { HeartIcon, ShareIcon } from "@heroicons/react/outline";
import { Item } from "framer-motion/types/components/Reorder/Item";
import { FlagIcon, StarIcon } from "@heroicons/react/solid";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Input } from "@material-ui/core";

interface idProps {
    id: string;
}

// useEffect(() => {
//     document.getElementsByClassName('rdrDefinedRangesWrapper')[0].style.display = 'none';
//     }, []);

export const DetailRoom: React.FC = (
    {
        // id = "",
    },
) => {
    const Router = useRouter();

    const { location, roomID, title, place, star, rate, price, description } =
        Router.query;

    const [pickDay, setPickDay] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection",
        },
    ]);

    const formattedStartDate = format(
        new Date(pickDay[0].startDate),
        "dd/MM/yyyy",
    );
    const formattedEndDate = format(new Date(pickDay[0].endDate), "dd/MM/yyyy");

    const [guests, setGuests] = useState(1);

    return (
        <div>
            {/* {(search?.item ?? []).map((item) => ( */}
            <div className="mx-[12%] mt-6">
                <div className="border-b border-gray-300">
                    <h2 className="font-semibold text-3xl text-black">
                        {title}
                    </h2>
                    <div className="flex mt-3 items-center">
                        <div className="flex items-center">
                            <StarIcon className="h-5 text-red-500 mr-1" />
                            {star + " · "}
                        </div>
                        <p className="underline ml-2 items-center">{place}</p>
                        <div className="flex space-x-5 flex-grow justify-end">
                            <a className="flex items-center cursor-pointer font-medium underline text-black rounded-xl hover:bg-gray-300 p-2">
                                <ShareIcon className="h-4 w-4 mr-2" />
                                Chia sẻ
                            </a>

                            <a className="flex items-center cursor-pointer font-medium underline text-black rounded-xl hover:bg-gray-300 p-2">
                                <HeartIcon className="h-4 w-4 mr-2" />
                                Lưu
                            </a>
                        </div>
                    </div>

                    <div className="room__gallery mt-5 mb-10">
                        <div className="room_1st_image ">
                            <img
                                className="room__img rounded-l-xl h-full hover:brightness-75 transition ease-out duration-200"
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-44284175/original/1faa6b79-2d05-4b1c-b556-121f9a59da53.jpeg?im_w=1200"
                            ></img>
                        </div>
                        <div>
                            <img
                                className="room__img hover:brightness-75 transition ease-out duration-200"
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-44284175/original/1faa6b79-2d05-4b1c-b556-121f9a59da53.jpeg?im_w=1200"
                            ></img>
                        </div>
                        <div>
                            <img
                                className="room__img rounded-tr-xl  hover:brightness-75 transition ease-out duration-200"
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-44284175/original/1faa6b79-2d05-4b1c-b556-121f9a59da53.jpeg?im_w=1200"
                            ></img>
                        </div>
                        <div>
                            <img
                                className="room__img hover:brightness-75 transition ease-out duration-200"
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-44284175/original/1faa6b79-2d05-4b1c-b556-121f9a59da53.jpeg?im_w=1200"
                            ></img>
                        </div>
                        <div>
                            <img
                                className="room__img rounded-br-xl hover:brightness-75 transition ease-out duration-200"
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-44284175/original/1faa6b79-2d05-4b1c-b556-121f9a59da53.jpeg?im_w=1200"
                            ></img>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex flex-col w-2/3">
                            <div className="flex flex-col pb-6 border-b border-gray-300">
                                <h1 className="font-semibold text-black text-2xl">
                                    {location} {place}. Chủ nhà DA
                                </h1>
                                <p className="font-light">{description}</p>
                            </div>
                            <div className="flex flex-col py-6 border-b border-gray-300">
                                <div className="flex mb-6">
                                    <StarIcon className="w-6 h-6 mr-2" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-black m-0">
                                            Tự nhận phòng
                                        </p>
                                        <p className="font-light">
                                            Bạn có thể gặp nhân viên trực cửa để
                                            nhận phòng
                                        </p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <StarIcon className="w-6 h-6 mr-2" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-black m-0">
                                            Cho phép thú cưng
                                        </p>
                                        <p className="font-light">
                                            Khách thường tìm kiếm tiện nghi phổ
                                            biến này
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 border-b border-gray-300 font-light">
                                <p>
                                    Căn hộ xinh đẹp này ở nhà DA nằm ở tầng 7
                                    của tòa nhà mới của chúng tôi - Nhà ở DA 32.
                                    Nó có một phòng ngủ, một phòng tắm và một
                                    phòng khách mở. Nó được thiết kế rất đẹp.
                                    Cung cấp đầy đủ nội thất và thiết bị hiện
                                    đại. Cửa sổ kính lớn cho phép ánh sáng tự
                                    nhiên đi vào. Sàn gỗ giúp căn hộ dễ dàng vệ
                                    sinh.
                                </p>

                                <p>
                                    Hơn nữa, vị trí của tòa nhà nằm trong khoảng
                                    cách đi bộ đến các cửa hàng tiện lợi, nhà
                                    hàng, cửa hàng, quán bar, quán rượu.
                                </p>
                            </div>
                            <div className="flex flex-col py-10 border-b border-gray-300 ">
                                <h2 className="text-black text-2xl pb-6">
                                    Nơi này có những gì cho bạn
                                </h2>
                                <div className="flex font-light text-black justify-between">
                                    <div className="flex flex-col space-y-4 flex-grow">
                                        <div className="flex">
                                            <StarIcon className="w-6 h-6 mr-2" />
                                            <p>Lối ra hồ</p>
                                        </div>
                                        <div className="flex">
                                            <StarIcon className="w-6 h-6 mr-2" />
                                            <p>Lối ra hồ</p>
                                        </div>
                                        <div className="flex">
                                            <StarIcon className="w-6 h-6 mr-2" />
                                            <p>Lối ra hồ</p>
                                        </div>
                                        <div className="flex">
                                            <StarIcon className="w-6 h-6 mr-2" />
                                            <p>Lối ra hồ</p>
                                        </div>
                                        <div className="flex">
                                            <StarIcon className="w-6 h-6 mr-2" />
                                            <p>Lối ra hồ</p>
                                        </div>
                                    </div>

                                    <div className="lg:flex lg:flex-col space-y-4 flex-grow hidden">
                                        <div className="flex">
                                            <StarIcon className="w-6 h-6 mr-2" />
                                            <p>Lối ra hồ</p>
                                        </div>
                                        <div className="flex">
                                            <StarIcon className="w-6 h-6 mr-2" />
                                            <p>Lối ra hồ</p>
                                        </div>
                                        <div className="flex">
                                            <StarIcon className="w-6 h-6 mr-2" />
                                            <p>Lối ra hồ</p>
                                        </div>
                                        <div className="flex">
                                            <StarIcon className="w-6 h-6 mr-2" />
                                            <p>Lối ra hồ</p>
                                        </div>
                                        <div className="flex">
                                            <StarIcon className="w-6 h-6 mr-2" />
                                            <p>Lối ra hồ</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-1/2 mt-10 py-3 cursor-pointer active:scale-95 active:bg-gray 100 transition transform ease-out block border rounded-xl font-medium text-black hover:bg-gray-300  duration-200 ">
                                    {" "}
                                    Hiển thị tất cả 32 tiện nghi{" "}
                                </button>
                            </div>
                            <h2 className="text-2xl mt-8 text-black">
                                Chọn ngày nhận phòng
                            </h2>
                            <p className="font-light mt-1">
                                Thêm ngày đi để biết giá chính xác
                            </p>
                            <div className="mt-6 w-full py-10">
                                <DateRangePicker
                                    onChange={(item: { selection: any }) =>
                                        setPickDay([item.selection])
                                    }
                                    showSelectionPreview={true}
                                    moveRangeOnFirstSelection={false}
                                    months={1}
                                    ranges={pickDay}
                                    direction="horizontal"
                                    rangeColors={["#ff385c"]}
                                    startDate={new Date()}
                                    endDate={pickDay[0].endDate}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col w-1/3 ml-[8.333333333%] ">
                            <div className="sticky top-[20%]">
                                <div className="border border-gray-300 rounded-xl  shadow-cart p-6 ">
                                    <div className="flex justify-between items-center">
                                        <div className="text-2xl text-black">
                                            {price}{" "}
                                            <span className="font-light text-lg">
                                                {" "}
                                                / đêm{" "}
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <StarIcon className="h-5 text-red-500 mr-1" />
                                            {star}
                                        </div>
                                    </div>

                                    <div className="flex flex-col mt-6 border border-gray-300 rounded-xl">
                                        <div className="flex active:border-black justify-between">
                                            <div className="border-r border-gray-300 p-3 flex-grow ">
                                                <p className="text-xs font-semibold m-0 text-black">
                                                    NHẬN PHÒNG
                                                </p>
                                                <p className="font-normal">
                                                    {formattedStartDate}
                                                </p>
                                            </div>

                                            <div className=" p-3 flex-grow ">
                                                <p className="text-xs font-semibold m-0 text-black">
                                                    TRẢ PHÒNG
                                                </p>
                                                <p className="font-normal">
                                                    {formattedEndDate}
                                                </p>
                                            </div>
                                        </div>

                                        <div className=" border-t border-gray-300 p-3 ">
                                            <p className="text-xs font-semibold m-0 text-black">
                                                KHÁCH
                                            </p>
                                            <input
                                                value={guests}
                                                onChange={(e) =>
                                                    setGuests(
                                                        Number(e.target.value),
                                                    )
                                                }
                                                type="number"
                                                className="mr-1 w-8 font-light outline-none  "
                                                min={1}
                                            />
                                            <span className="font-light">khách</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex pb-10 pt-6 flex-grow justify-center">
                                    <FlagIcon className="w-6 h-6 mr-2 " />
                                    <a className="underline cursor-pointer">
                                        Báo cáo nhà/phòng cho thuê này
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ))} */}
        </div>
    );
};

export default DetailRoom;
