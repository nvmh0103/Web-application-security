import React from "react";
import { StickyHeader } from "./StickyHeader";
import { SearchIcon } from "@heroicons/react/solid";
import { Logo } from "@components";
import { Button } from "@components/button";
import { AirbnbIcon, GlobeIcon, MenuIcon, UserIcon } from "@components/icons";

export const Header: React.FC = () => {
    return (
        <>
            <div className="text-center bg-black flex mx-auto px-20 items-center justify-between top-0 w-full h-20">
               
                    <div className="">
                        <a className="flex ">
                            <AirbnbIcon color="white"/>
                        </a>
                    </div>

                    

                    <div className="flex items-center">
                        <a
                            className="p-3 rounded-22 hover:bg-gray-600 text-white"
                            href="https://www.airbnb.com.vn/host/homes"
                        >
                            Trở thành chủ nhà
                        </a>
                        <a
                            className="hover:bg-gray-600 rounded-22 p-3 m-2"
                            href="#"
                        >
                            <GlobeIcon color="white"/>
                        </a>
                        <Button
                            variant="flat"
                            className="border-gray-500 border hover:shadow-cart p-2 flex items-center space-x-3 rounded-full transition duration-150 "
                            onClick={() => {}}
                        >
                            <MenuIcon className="h-6" />
                            <UserIcon className="h-6" />
                        </Button>
                    </div>
                </div>

                
                    <StickyHeader />
                
          
        </>
    );
};
