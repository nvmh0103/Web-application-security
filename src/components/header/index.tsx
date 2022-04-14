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

export const Header: React.FC = () => {
    return (
        <>
            <HomeHeader />
            

            <StickyHeader />
        </>
    );
};
