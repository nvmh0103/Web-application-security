import React from "react";
import { StickyHeader } from "./StickyHeader";
import { HomeHeader } from "./HomeHeader";
import { SearchIcon } from "@heroicons/react/solid";
import { Logo } from "@components";
import { Button } from "@components/button";
import { AirbnbIcon, GlobeIcon, MenuIcon, UserIcon } from "@components/icons";
import { useMouseWheel } from "react-use";
import { useEffect, useState, useRef } from "react";
import router, { Router } from "next/router";


export const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>

     
            {scrolled ? <StickyHeader /> : <HomeHeader 
            className="transition"/>}
        


        </>
    );
};
