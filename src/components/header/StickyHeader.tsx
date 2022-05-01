import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { Logo } from "@components";
import { Button } from "@components/button";
import { AirbnbIcon, GlobeIcon, MenuIcon, UserIcon } from "@components/icons";
import { useState } from "react";
import { TextField } from "@material-ui/core";
import { Menu } from "@components/menu";
import Search from "@components/search";


interface Props {
    title?: string;
    place?: string;
    
}

export const StickyHeader: React.FC<Props> = ({
    title = "Bắt đầu tìm kiếm",  
    place = "Bạn sắp đi đâu?",
}) => {
 

    const [state, setState] = useState("");
    const [stateMenu, setStateMenu] = useState(false);
    const [stateSearch, setStateSearch] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value);
    };

    return (
        <div className="sticky top-0 z-10">
            <div className=" grid grid-cols-3 bg-white shadow-md py-3 px-20">
                <div className=" flex items-center h-10 cursor-pointer my-auto ">
                    <a className="" href="/">
                        <AirbnbIcon />
                    </a>
                </div>

                <div className="items-center  px-5 flex justify-center ">
                    <Button
                        type="button"
                        className="text-left"
                        onClick={() => {
                            stateSearch ? setStateSearch(false) : setStateSearch(true);
                        }}
                    >
                        <div className="px-4 flex md:justify-between items-center justify-center">
                            <p className="hidden md:inline-flex">
                                {title}
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
                                <UserIcon className="h-6" />
                            </Button>

                            {stateMenu && <Menu />}
                        </div>
                    </div>
                </div>
            </div>

            {stateSearch && <Search 
            place={place}/>}
        </div>
    );
};
