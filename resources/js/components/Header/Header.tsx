import React, { useState } from "react";
import { createRoot } from "react-dom/client"; // Atualizado para a nova API do React 18
import { Input, Avatar, Button, Dropdown, Menu } from "antd";
import { MenuOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { HeaderDrawer } from "./HeaderDrawer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import PeopleIcon from "@mui/icons-material/People";

export function Header() {
    const [visible, setVisible] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    let user = (document.getElementById("user") as HTMLInputElement)?.value;

    const showDrawer = () => {
        setVisible(true);
    };

    const onCloseDrawer = () => {
        setVisible(false);
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const menuItems = [
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
    ];

    const menuItensWithoutUser = [
        {
            label: "Entrar",
            key: "login",
            icon: <UserOutlined />,
        },
        {
            label: "Registrar",
            key: "signup",
            icon: <PeopleIcon />,
        },
    ];

    const menu = <Menu items={user ? menuItems : menuItensWithoutUser} />;

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

                        <div>
                            <Dropdown
                                overlay={menu}
                                onOpenChange={toggleDropdown}
                                open={dropdownVisible}
                            >
                                <Avatar
                                    size="large"
                                    className="border border-1 border-dark cursor-pointer"
                                    src={
                                        user
                                            ? user.avatar
                                            : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                    }
                                    onClick={toggleDropdown}
                                />
                            </Dropdown>
                            {user && (
                                <ShoppingCartOutlined className="fs-1 ms-2" />
                            )}
                        </div>
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

            <HeaderDrawer
                visible={visible}
                onClose={onCloseDrawer}
                user={user}
            />
        </header>
    );
}

const rootElement = document.getElementById("header");
const root = createRoot(rootElement); // Atualizado para a nova API do React 18

root.render(<Header />);
