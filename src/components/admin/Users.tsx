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
    userId: string;
    name: string;
    avatar: string;
    email: string;
    phone: number;
    address: string;
    tags: string[];
}

type DataIndex = keyof DataType;

const data: DataType[] = [
    {
        userId: "616045e8d1a292001ce8f15a",
        name: "Bùi Đình Quang",
        avatar: "https://airbnb.cybersoft.edu.vn/public/images/avatar/1635062160948_anh-dai-dien-dep-de-thuong-cho-facebook-zalo-9.jpg",
        email: "huyquang123456@gmail.com",
        phone: 9090909090,
        address: "766/68/27/10 CMT8",
        tags: ["Admin"],
    },
    {
        userId: "616045e8d1a292001ce8f15b",
        name: "Bùi Đình Quang Vinh",
        avatar: "https://airbnb.cybersoft.edu.vn/public/images/avatar/1635062160948_anh-dai-dien-dep-de-thuong-cho-facebook-zalo-9.jpg",
        email: "huyquang123456@gmail.com",
        phone: 9090909090,
        address: "766/68/27/10 CMT9",
        tags: ["User"],
    },
    {
        userId: "616045e8d1a292001ce8f15c",
        name: "Bùi Đình Quang Tà",
        avatar: "https://airbnb.cybersoft.edu.vn/public/images/avatar/1635062160948_anh-dai-dien-dep-de-thuong-cho-facebook-zalo-9.jpg",
        email: "huyquang123456@gmail.com",
        phone: 9090909090,
        address: "766/68/27/10 CMT10",
        tags: ["Admin"],
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
            dataIndex: "userId",
            key: "userId",
            width: "20%",

            ...getColumnSearchProps("userId"),
            render: (id) => <p className="font-semibold w-[100px]">{id}</p>,
        },

        {
            title: "Họ tên",
            dataIndex: "name",
            key: "name",
            width: "30%",
            ...getColumnSearchProps("name"),
            render: (name) => <a>{name}</a>,
        },

        {
            title: "Avatar",
            dataIndex: "avatar",
            key: "avatar",
            width: "20%",
            render: (avatar) => (
                <Space size="middle">
                    <img src={avatar} alt="image" width="50px" height="50px" />
                    <a>Đổi</a>
                </Space>
            ),
        },

        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            width: "20%",
            ...getColumnSearchProps("email"),
            render: (email) => (
                <p className="font-semibold w-[100px]">{email}</p>
            ),
        },

        {
            title: "SĐT",
            dataIndex: "phone",
            key: "phone",
            width: "20%",
            ...getColumnSearchProps("phone"),
        },

        {
            title: "Địa chỉ",
            dataIndex: "address",
            key: "address",
            width: "20%",
            ...getColumnSearchProps("address"),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ["descend", "ascend"],
            render: (address) => (
                <p className="font-semibold w-[150px]">{address}</p>
            ),
        },

        {
            title: "Role",
            key: "tags",
            dataIndex: "tags",
            width: "20%",
            ...getColumnSearchProps("tags"),
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? "geekblue" : "green";
                        if (tag === "User") {
                            color = "volcano";
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },

        {
            title: "",
            key: "action",
            width: "30%",
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
                    Thêm quản trị viên
                </span>
            </div>

            <div className="pb-10">
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default Users;
