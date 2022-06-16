import React, { useRef, useState } from "react";
import { Login } from "@components/login";
import { useOnClickOutside } from "usehooks-ts";
import { VerifyIcon } from "@components/icons";
import { CheckIcon, StarIcon } from "@heroicons/react/solid";
import { format, addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";

export const Payment: React.FC = () => {
    const [pickDay, setPickDay] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection",
        },
    ]);

    const formattedStartDate = format(
        new Date(pickDay[0].startDate),
        "dd/MM/yyyy",
    );
    const formattedEndDate = format(new Date(pickDay[0].endDate), "dd/MM/yyyy");

    const dayNum =
        new Date(pickDay[0].endDate).getDate() -
        new Date(pickDay[0].startDate).getDate();

    return (
        <div className="border-b border-gray-300">
            <h2 className="text-2xl mt-8 text-black">Chọn ngày nhận phòng</h2>
            <p className="font-normal mt-1">
                Thêm ngày đi để biết giá chính xác
            </p>
            <div className="mt-6 w-full py-6">
                <DateRangePicker
                    onChange={(item: { selection: any }) =>
                        setPickDay([item.selection])
                    }
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={1}
                    ranges={pickDay}
                    direction="horizontal"
                    rangeColors={["#ff385c"]}
                    startDate={new Date()}
                    endDate={pickDay[0].endDate}
                />
            </div>
        </div>
    );
};

export default Payment;
