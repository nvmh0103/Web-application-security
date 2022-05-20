import React from "react";

import data from "@public/location.json";

export const Cards: React.FC = () => {
    return (
        <div className="flex-1 my-4 ">
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 w-full ">
                {(data?.item ?? []).map((item) => (
                    <div
                        key={item.img}
                        className="col-span-1 rounded-xl border text-white cursor-pointer "
                    >
                        <img
                            className="rounded-t-xl object-fit w-full"
                            src={item.img}
                            alt=""
                        />

                       
                            <div className={item.style}>
                                <h2 className="text-4xl font-semibold mb-2">
                                    {item.location}
                                </h2>
                                <p className="m-0 text-xl">{item.distance}</p>
                            </div>
                        
                    </div>

                    
                ))}
            </div>
        </div>
    );
};
