import { PlusCircleIcon } from "@heroicons/react/solid";
import React, { useRef, useState } from "react";

import { Table, Tag, Space, Button, Input } from "antd";
import type { ColumnsType, ColumnType } from "antd/lib/table";
import "antd/dist/antd.css";

import { SearchOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
import type { FilterConfirmProps } from "antd/lib/table/interface";

import Highlighter from "react-highlight-words";

interface DataType {
    locationId: string;
    name: string;
    province: string;
    country: string;
    image: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Id",
        dataIndex: "locationId",
        key: "locationId",
    },
    {
        title: "Địa điểm",
        dataIndex: "name",
        key: "name",
        // render: (text) => <a>{text}</a>,
    },
    {
        title: "Phường",
        dataIndex: "province",
        key: "province",
        // render: (text) => <a>{text}</a>,
    },
    {
        title: "Khu vực",
        dataIndex: "country",
        key: "country",
    },
    {
        title: "Hình ảnh",
        key: "image",
        dataIndex: "image",
        render: (image) => (
            <Space size="middle">
                <img src={image} alt="image" width="50px" height="50px" />
                <a>Chỉnh sửa</a>
            </Space>
        ),
    },

    {
        title: "",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <a>Chi tiết</a>
                <a>Chỉnh sửa</a>
                <a>Xóa</a>
            </Space>
        ),
    },
];

type DataIndex = keyof DataType;

const data: DataType[] = [
    {
        locationId: "61695375efe193001c0a5b4c",
        name: "Biển Long Hải",
        province: "Tỉnh Bà Rịa - Vũng Tàu",
        country: "Việt Nam",
        image: "https://airbnb.cybersoft.edu.vn/public/temp/1652953227313_a.jpg",
    },
    {
        locationId: "61695375efe193001c0a5b4c",
        name: "Biển Long Hải",
        province: "Tỉnh Bà Rịa - Vũng Tàu",
        country: "Việt Nam",
        image: "https://airbnb.cybersoft.edu.vn/public/temp/1652953227313_a.jpg",
    },
    {
        locationId: "61695375efe193001c0a5b4c",
        name: "Biển Long Hải",
        province: "Tỉnh Bà Rịa - Vũng Tàu",
        country: "Việt Nam",
        image: "https://airbnb.cybersoft.edu.vn/public/temp/1652953227313_a.jpg",
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
            dataIndex: "locationId",
            key: "locationId",
            width: "20%",

            ...getColumnSearchProps("locationId"),
            render: (locationId) => (
                <p className="font-semibold w-[100px]">{locationId}</p>
            ),
        },

        {
            title: "Tên phòng",
            dataIndex: "name",
            key: "name",
            width: "30%",
            ...getColumnSearchProps("name"),
            render: (name) => <a>{name}</a>,
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
            dataIndex: "province",
            key: "province",
            width: "20%",
            ...getColumnSearchProps("province"),
            sorter: (a, b) => a.province.length - b.province.length,
            sortDirections: ["descend", "ascend"],
            render: (province) => (
                <p className="font-semibold w-[150px]">{province}</p>
            ),
        },

        {
            title: "Khu vực",
            dataIndex: "country",
            key: "country",
            width: "20%",
            ...getColumnSearchProps("country"),
            sorter: (a, b) => a.country.length - b.country.length,
            sortDirections: ["descend", "ascend"],
            render: (country) => (
                <p className="font-semibold w-[150px]">{country}</p>
            ),
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
                <span className="text-lg text-black hover:underline">
                    Thêm vị trí
                </span>
            </div>

            <div className="pb-10">
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default Users;
