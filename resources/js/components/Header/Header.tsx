import React, { useState } from "react";
import { createRoot } from "react-dom";
import { Input, Avatar, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export function Header() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <header className="">
            <div
                id="header_content"
                className="p-3 mx-5 rounded-5 d-flex flex-row justify-content-center align-items-center"
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

                        <Avatar
                            size="large"
                            className="border border-1 border-dark cursor-pointer"
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        />
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

            <Drawer
                title="Menu"
                placement="right"
                onClose={onClose}
                visible={visible}
            >
                {/* Conteúdo do Drawer */}
                <p>Alguma opção 1</p>
                <p>Alguma opção 2</p>
                <p>Alguma opção 3</p>
            </Drawer>
        </header>
    );
}

const rootElement = document.getElementById("header");
const root = createRoot(rootElement);

root.render(<Header />);
