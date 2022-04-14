import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { Logo } from "@components";
import { Button } from "@components/button";
import { AirbnbIcon, GlobeIcon, MenuIcon, UserIcon } from "@components/icons";
import { useState } from "react";
import { TextField } from "@material-ui/core";

export const StickyHeader: React.FC = () => {
    const [state, setState] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value);
    };

    return (
        <div className="sticky top-0 z-10">
            
                <div className=" grid grid-cols-3 bg-white shadow-md py-3 px-20">
                    <div className=" flex items-center h-10 cursor-pointer my-auto ">
                        <a className="" href="#">
                            <AirbnbIcon />
                        </a>
                    </div>

                    <div className="items-center  px-5 flex justify-center ">
                        <Button
                            type="button"
                            className="text-left"
                            onClick={() => {}}
                        >
                            <div className="px-4 flex md:justify-between items-center justify-center">
                                <p className="hidden md:inline-flex">
                                    Bắt đầu tìm kiếm
                                </p>
                                <SearchIcon className="h-8 bg-red-500 text-white rounded-full cursor-pointer p-2 md:mx-2 " />
                            </div>
                        </Button>
                    </div>

                    <div className="flex items-center space-x-4 justify-end ">
                        <div className="relative flex items-center">
                        <a
                            className="p-3 rounded-22 hover:bg-gray-100 hidden md:inline"
                            href="https://www.airbnb.com.vn/host/homes"
                        >
                            Trở thành chủ nhà
                        </a>
                        <a
                            className="hover:bg-gray-100 rounded-22 p-3 m-2"
                            href="#"
                        >
                            <GlobeIcon />
                        </a>
                        <Button
                            variant="flat"
                            className="border-gray-500 border hover:shadow-cart p-2 flex items-center space-x-3 rounded-full transition duration-150 hover:opacity-100 "
                            onClick={() => {}}
                        >
                            <MenuIcon className="h-6" />
                            <UserIcon className="h-6" />
                        </Button>

                        <div className="bg-white w-3/4 absolute top-16 rounded-xl py-3 right-0 opacity-100  z-50 items-right border border-gray-300 shadow-subMenu">
                            <ul className="space-y-3 font-normal">
                                <li className="font-bold hover:bg-gray-300 py-1 px-5"><a href="">Đăng ký</a></li>
                                <li className="hover:bg-gray-300 py-1 px-5"><a href="">Đăng nhập</a></li>
                                <hr></hr>
                                <li className="hover:bg-gray-300 py-1 px-5">Cho thuê nhà</li>
                                <li className="hover:bg-gray-300 py-1 px-5">Tổ chức trải nghiệm</li>
                                <li className="hover:bg-gray-300 py-1 px-5">Trợ giúp</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>

                

                <div className="pb-8 bg-white">
                    <div className="flex border border-gray-500 mx-[20%] rounded-40 justify-between items-center ">
                        <div className=" rounded-full flex-1 py-1 ">
                            <p className="px-5 md:text-left text-center">
                                <p>Địa điểm</p>

                                <input
                                    type="text"
                                    onChange={(e) => handleChange(e)}
                                    value={state || ""}
                                    placeholder="Bạn sắp đi đâu?"
                                    className=" text-base w-full outline-0 md:text-left text-center"
                                />
                            </p>
                            {/* <div className="border-r h-[30px]"></div> */}
                        </div>

                        <div className="hidden md:inline-block border-l border-gray-500  flex-1">
                            <div className="hover:bg-gray-500 cursor-pointer rounded-40 px-5 py-1 ">
                                <p className="m-0">Nhận phòng</p>
                                <p className="text-gray-400">Thêm ngày</p>
                            </div>
                        </div>

                        <div className="hidden md:inline-block border-l border-gray-500  flex-1">
                            <div className="hover:bg-gray-500 cursor-pointer rounded-40 px-5 py-1 ">
                                <p className="m-0">Trả phòng</p>
                                <p className="text-gray-400">Thêm ngày</p>
                            </div>
                        </div>

                        <div className=" border-l border-gray-500  ">
                            <div className="hover:bg-gray-500 cursor-pointer rounded-40 px-5 py-1 flex ">
                                <div className="hidden md:inline-block">
                                    <p className="m-0">Khách</p>
                                    <p>Thêm khách</p>
                                </div>
                                <div className="md:pl-5 ">
                                    <SearchIcon
                                        className="md:h-12 h-8 bg-red-500 text-white rounded-full cursor-pointer p-2 md:mx-2 md:w-12 w-8"
                                        href="#"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        </div>
    );
};
