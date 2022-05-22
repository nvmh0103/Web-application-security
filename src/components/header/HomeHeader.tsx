import React from "react";
import { StickyHeader } from "./StickyHeader";
import { SearchIcon } from "@heroicons/react/solid";
import { Logo } from "@components";
import { Button } from "@components/button";
import { AirbnbIcon, GlobeIcon, MenuIcon, UserIcon } from "@components/icons";
import { useMouseWheel } from "react-use";
import { useEffect, useState } from "react";
import Search from "@components/search";
import Menu from "@components/menu/Menu";
import { MenuUser } from "@components/menu/MenuUser";
import { getCookie } from "cookies-next";

interface Props {
    className?: string;
    title?: string;
    place?: string;
}

export const HomeHeader: React.FC<Props> = ({
    className = "",
    title = "Bắt đầu tìm kiếm",
    place = "Bạn sắp đi đâu?",
}) => {
    const [state, setState] = useState("");
    const [stateMenu, setStateMenu] = useState(false);
    const [stateSearch, setStateSearch] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value);
    };

    const value = getCookie("isLoggedIn");

    return (
        <div className={className}>
            <div className="text-center bg-black grid md:grid-cols-3 grid-cols-2 lg:px-20 px-10 py-3 items-center justify-between ">
                <div className="flex items-center h-10 cursor-pointer my-auto ">
                    <a className="" href="/">
                        <AirbnbIcon color="white" />
                    </a>
                </div>

                <div className=" items-center text-white hidden md:flex cursor-pointer justify-between space-x-8">
                    <a className="inline-block relative justify-center items-center hover:border-b border-white transition duration-200 ease-out">
                        Nơi ở
                    </a>

                    <a className="inline-block relative justify-center items-center hover:border-b border-white transition duration-200 ease-out">
                        Trải nghiệm
                    </a>

                    <div className="items-center text-white inline-block relative justify-center hover:border-b border-white transition duration-200 ease-out">
                        <a>Trải nghiệm trực tuyến</a>
                    </div>
                </div>

                <div className="flex items-center space-x-4 justify-end">
                    <div className="relative flex items-center">
                        <a
                            className="p-3 rounded-22 hover:bg-gray-600 text-white hidden md:inline"
                            href="https://www.airbnb.com.vn/host/homes"
                        >
                            Trở thành chủ nhà
                        </a>
                        <a
                            className="hover:bg-gray-600 rounded-22 p-3 m-2"
                            href="#"
                        >
                            <GlobeIcon color="white" />
                        </a>

                        <div className="block text-left">
                            <Button
                                variant="flat"
                                className="border-gray-500 border hover:shadow-cart p-2 flex items-center space-x-3 rounded-full transition duration-150 hover:opacity-100 "
                                onClick={() => {
                                    stateMenu
                                        ? setStateMenu(false)
                                        : setStateMenu(true);
                                }}
                            >
                                <MenuIcon className="h-6" />
                                {!value && <UserIcon className="h-6" />}

                                {value && (
                                    <img
                                        src="https://a0.muscache.com/defaults/user_pic-225x225.png?v=3"
                                        className="rounded-full w-[28px] h-[28px] block mx-auto"
                                    ></img>
                                )}
                            </Button>

                            {!value && stateMenu && <Menu />}

                            {value && stateMenu && <MenuUser />}
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-8 bg-black">
                <Search className="pb-8 bg-black" />
            </div>
        </div>
    );
};
