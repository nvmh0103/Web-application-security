import React from "react";
import Image from "next/image";


import comment from "@public/comment.json";



// interface infoProps {
//     img?: string;
//     name: string;
//     date?: string;
//     comment: string;

// }

export const CommentCards: React.FC = () =>
    
    {
        
        return (
            <div className="grid grid-cols-2 gap-14 mt-6">
                {(comment?.item ?? []).map((item) => (
                    <div className="">
                    <div>
                        <div className="flex">
                            <div className="">
                                <Image src={item.img} 
                                width={56} height={56}
                                className="rounded-full cursor-pointer" />
                                
                                
                            </div>
                            <div className="ml-4 pt-1">
                                <h2 className="text-black ">{item.name}</h2>
                                <p className="text-gray-600 text-sm font-normal">{item.date}</p>
                            </div>
                        </div>

                        <div>
                            <p className="font-normal pr-10 text-black">{item.comment}</p>
                        </div>
                       
                    </div>
                    </div>
                ))}
            </div>
        );
    };
