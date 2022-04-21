import React from "react";
import { StickyHeader } from "./StickyHeader";
import { HomeHeader } from "./HomeHeader"
import { SearchIcon } from "@heroicons/react/solid";
import { Logo } from "@components";
import { Button } from "@components/button";
import { AirbnbIcon, GlobeIcon, MenuIcon, UserIcon } from "@components/icons";
import { useMouseWheel } from "react-use";
import { useEffect, useState } from "react";
import { Router } from "next/router";
import { Modal } from "@components/modal";

function ChangeSticky() {
    
}

export const Header: React.FC = () => {

    const [stateHeader, setStateHeader] = useState("");


    return (
        <>
            <div className="hidden">
            <HomeHeader 

            />
            </div>

            
            <StickyHeader />

            <div className="">
                <Modal />
            </div>
        </>

    );
};
