import React from "react";
import {SearchIcon} from "@heroicons/react/solid"
import { Logo } from "@components";
import { Button } from "@components/button";
import { AirbnbIcon, GlobeIcon, MenuIcon, UserIcon } from "@components/icons";

export const StickyHeader: React.FC = () => {
    return (
        <>
            <div
                className="text-center bg-white flex mx-auto px-20 items-center justify-between sticky top-0 w-full h-20 scrolled z-10"
                
            >
                <div className="">
                    <a className="flex ">
                        <AirbnbIcon />
                    </a>
                </div>

                <div className="items-center flex pl-40">
                   
                        <Button
                            type="button"
                            className="text-left"
                            onClick={() => {}}
                        >
                            <div className="px-4 flex justify-between items-center">
                                Bắt đầu tìm kiếm
                                 <SearchIcon className="h-8 bg-red-500 text-white rounded-full cursor-pointer p-2"/>
                            </div>
                           
                        </Button>
                    
                </div>

                <div className="flex items-center">
                    <a
                        className="p-3 rounded-22 hover:bg-gray-100"
                        href="https://www.airbnb.com.vn/host/homes"
                    >
                        
                        Trở thành chủ nhà
                    </a>
                    <a className="hover:bg-gray-100 rounded-22 p-3 m-2" href="#">
                        
                        <GlobeIcon />
                    </a>
                    <Button variant="flat" className="border-gray-500 border hover:shadow-cart p-2 flex items-center space-x-3 rounded-full transition duration-150 " onClick={() => {}}>
                        <MenuIcon className="h-6"/>
                        <UserIcon className="h-6"/>
                    </Button>
                </div>
            </div>
        </>
    );
};

