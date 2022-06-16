import React, { useRef } from "react";
import {
    MinusSmIcon,
    PlusSmIcon,
    SearchIcon,
    UsersIcon,
} from "@heroicons/react/solid";
import { Logo } from "@components";
import { Button } from "@components/button";
import { AirbnbIcon, GlobeIcon, MenuIcon, UserIcon } from "@components/icons";
import { useState } from "react";
import { TextField } from "@material-ui/core";
import { Menu } from "@components/menu/Menu";
import { Router } from "next/router";
import { useRouter } from "next/router";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRangePicker } from "react-date-range";
import { addDays, format } from "date-fns";

import { useOnClickOutside } from "usehooks-ts";

import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import http from "@utils/http";
import { API_ENDPOINTS } from "@utils/apiEndpoints";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { Loading } from "@nextui-org/react";


export interface RootObject {
    deleteAt?: boolean;
    _id?: string;
    name?: string;
    province?: string;
    country?: string;
    valueate?: number;
    __v?: number;
    image?: string;
}


interface props {
    inputString: string;
}

const getLocations = async () => {
    const response = await http.get(
        `https://airbnb.cybersoft.edu.vn${API_ENDPOINTS.SEARCH}`,
    );
    return response.data;
};

export async function getStaticProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery<RootObject>("info", getLocations);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

export const LocationSearch: React.FC<props> = ({
    inputString,
}) => {
    
    const { data, isLoading, isFetching } = useQuery<RootObject>(
        "info",
        getLocations,
    );
    console.log(data);

    if (isLoading) {
        return <div className="p-4 mx-[25%]"> <Loading /> </div>;
    }

    if (!data) {
        return <p className="">Dữ liệu không tìm thấy :)</p>;
    }


    return (
        <div>
                    <div className="mx-[6%] my-2 space-y-1 flex flex-col">
                        <a>{data?.province}</a>
                    </div>
        </div>
    );
};

export default LocationSearch;
