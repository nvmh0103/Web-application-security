import { PlusCircleIcon } from "@heroicons/react/solid";
import React, { useRef, useState } from "react";

import { Table, Tag, Space, Button, Input } from "antd";
import type { ColumnsType, ColumnType } from "antd/lib/table";
import "antd/dist/antd.css";

import { SearchOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
import type { FilterConfirmProps } from "antd/lib/table/interface";

import Highlighter from "react-highlight-words";
import { Location } from "tabler-icons-react";


interface DataType {
    roomId: string;
    roomName: string;
    image: string;
    location: string;
    maxGuests: number;
}

type DataIndex = keyof DataType;



const data: DataType[] = [
    {
        roomId: "616045e8d1a292001ce8f15a",
        roomName: "Phòng Siêu Vip Pro 1",
        image: "https://airbnb.cybersoft.edu.vn/public/images/room/1653068420294_1117304.png",
        location: "New York No. 1 Lake Park",
        maxGuests: 2,
    },
    {
        roomId: "616045e8d1a292001ce8f15b",
        roomName: "Phòng Siêu Vip Pro 2",
        image: "https://airbnb.cybersoft.edu.vn/public/images/room/1653067782556_1094664.jpg",
        location: "New York No. 1 Lake Park",
        maxGuests: 10,
    },
    {
        roomId: "616045e8d1a292001ce8f14c",
        roomName: "Phòng Siêu Vip Pro 3",
        image: "https://airbnb.cybersoft.edu.vn/public/images/room/1653067775249_976062.jpg",
        location: "New York No. 1 Lake Park",
        maxGuests: 5,
    },
];




export const Users: React.FC = () => {

    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef<InputRef>(null);

    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText("");
    };

    const getColumnSearchProps = (
        dataIndex: DataIndex,
    ): ColumnType<DataType> => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
        }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={searchInput}
                    placeholder={`Tìm ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(
                            selectedKeys as string[],
                            confirm,
                            dataIndex,
                        )
                    }
                    style={{ marginBottom: 8, display: "block" }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() =>
                            handleSearch(
                                selectedKeys as string[],
                                confirm,
                                dataIndex,
                            )
                        }
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() =>
                            clearFilters && handleReset(clearFilters)
                        }
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined
                style={{ color: filtered ? "#1890ff" : undefined }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });

    const columns: ColumnsType<DataType> = [
        {
            title: "Id",
            dataIndex: "roomId",
            key: "roomId",
            width: "20%",

            ...getColumnSearchProps("roomId"),
            render: (roomId) => <p className="font-semibold w-[100px]">{roomId}</p>,
        },

        {
            title: "Tên phòng",
            dataIndex: "roomName",
            key: "roomName",
            width: "30%",
            ...getColumnSearchProps("roomName"),
            render: (roomName) => <a>{roomName}</a>,
        },

        {
            title: "Hình ảnh",
            dataIndex: "image",
            key: "image",
            width: "20%",
            render: (image) => (
                <Space size="middle">
                    <img src={image} alt="image" width="50px" height="50px" />
                    <a>Đổi</a>
                </Space>
            ),
        },

        

      

        {
            title: "Địa chỉ",
            dataIndex: "location",
            key: "location",
            width: "20%",
            ...getColumnSearchProps("location"),
            sorter: (a, b) => a.location.length - b.location.length,
            sortDirections: ["descend", "ascend"],
            render: (location) => (
                <p className="font-semibold w-[150px]">{location}</p>
            ),
        },

        {
            title: "Khách tối đa",
            dataIndex: "maxGuests",
            key: "maxGuests",
            width: "20%",
            sorter: (a, b) => a.maxGuests - b.maxGuests,
            sortDirections: ["descend", "ascend"],
            ...getColumnSearchProps("maxGuests"),
        },

        

        {
            title: "",
            key: "action",
            width: "20%",
            render: (_, record) => (
                <Space size="middle" className="w-[180px]">
                    <a>Chi tiết</a>
                    <a>Chỉnh sửa</a>
                    <a>Xóa</a>
                </Space>
            ),
        },
    ];

    return (
        <div>
        
        <div className="flex p-6 cursor-pointer">
            <PlusCircleIcon className="w-6 h-6 mr-2" />
            <span className="text-lg text-black hover:underline">Thêm phòng</span>
        </div>

        <div className="pb-10">
            <Table columns={columns} dataSource={data} />
            
        </div>
        </div>
    );
};

export default Users;
