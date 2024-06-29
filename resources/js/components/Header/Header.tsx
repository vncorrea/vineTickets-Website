import React, { useState } from "react";
import { createRoot } from "react-dom";
import { Input, Avatar, Button, Dropdown, Menu } from "antd";
import { MenuOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { HeaderDrawer } from "./HeaderDrawer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import BookOnlineIcon from "@mui/icons-material/BookOnline";

export function Header() {
    const [visible, setVisible] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onCloseDrawer = () => {
        setVisible(false);
    };

    const toggleMenu = () => {
        setVisible(!visible);
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const menu = (
        <Menu
            items={[
                {
                    label: "Conta",
                    key: "profile",
                    icon: <AccountCircleIcon />,
                },
                {
                    label: "Eventos",
                    key: "events",
                    icon: <ConfirmationNumberIcon />,
                },
                {
                    label: "Meus ingressos",
                    key: "mytickets",
                    icon: <BookOnlineIcon />,
                },
                {
                    label: "Favoritos",
                    key: "favorites",
                    icon: <LocalActivityIcon />,
                },
                {
                    label: "Sair",
                    key: "logout",
                    icon: <LogoutOutlined />,
                },
            ]}
        />
    );

    return (
        <header className="">
            <div
                id="header_content"
                className="p-3 mx-3 rounded-5 d-flex flex-row justify-content-center align-items-center z-3"
            >
                <div className="col-6 d-flex align-items-center">
                    <span className="fs-1 ps-4 fw-bolder text-white">
                        vineTickets
                    </span>
                    <img src="../../../assets/images/logo.png" alt="" />
                </div>
                <div className="col-6">
                    <div className="justify-content-between align-items-center d-none d-lg-flex">
                        <Input.Search
                            className="w-75 rounded-"
                            loading={false}
                            enterButton={true}
                        ></Input.Search>

                        <Dropdown
                            overlay={menu}
                            onOpenChange={toggleDropdown}
                            open={dropdownVisible}
                        >
                            <Avatar
                                size="large"
                                className="border border-1 border-dark cursor-pointer"
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                onClick={toggleDropdown}
                            />
                        </Dropdown>
                    </div>
                    <div
                        className="d-lg-none d-flex justify-content-end me-2"
                        id="button_drawer"
                    >
                        <Button
                            type="primary"
                            onClick={showDrawer}
                            icon={<MenuOutlined />}
                        />
                    </div>
                </div>
            </div>

            <HeaderDrawer visible={visible} onClose={onCloseDrawer} />
        </header>
    );
}

const rootElement = document.getElementById("header");
const root = createRoot(rootElement);

root.render(<Header />);
