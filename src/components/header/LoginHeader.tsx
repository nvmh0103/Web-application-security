import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { Logo } from "@components";
import { Button } from "@components/button";
import { AirbnbIcon, GlobeIcon, MenuIcon, UserIcon } from "@components/icons";
import { useState } from "react";
import { TextField } from "@material-ui/core";
import { Menu } from "@components/menu/Menu";
import { MenuUser } from "@components/menu/MenuUser";
import { getCookie } from "cookies-next";
import Search from "@components/search";


export const LoginHeader: React.FC = () => {
    const [state, setState] = useState("");
    const [stateMenu, setStateMenu] = useState(false);
    const [stateSearch, setStateSearch] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value);
    };

    const value = getCookie("isLoggedIn");

    return (
        <div className="sticky top-0 z-10">
            <div className=" grid grid-cols-2 bg-white shadow-md py-3 md:px-20 px-10 border-b border-gray-300">
                <div className=" flex items-center h-10  my-auto ">
                    <a className="cursor-pointer" href="/">
                        <AirbnbIcon />
                    </a>
                </div>

                <div className="flex items-center space-x-4 justify-end ">
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

                            <div className="block">
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

                                    { !value &&
                                    <UserIcon className="h-6" />
                                    }

                                    {value &&
                                    <img
                                    src="https://a0.muscache.com/defaults/user_pic-225x225.png?v=3"
                                    className="rounded-full w-[28px] h-[28px] block mx-auto"
                                ></img>
}

                                </Button>

                                {!value && (
                                stateMenu && <Menu />
                                )}

                                {value && (
                                stateMenu && <MenuUser />
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginHeader;
