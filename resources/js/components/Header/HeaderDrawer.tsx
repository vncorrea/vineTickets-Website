import React from "react";
import { Drawer, Input, Avatar, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

interface HeaderDrawerProps {
    onClose: () => void;
    visible: boolean;
}

export function HeaderDrawer({ onClose, visible }: HeaderDrawerProps) {
    return (
        <Drawer title="Menu" placement="right" onClose={onClose} open={visible}>
            <div className="d-flex justify-content-center align-items-center flex-column">
                <Avatar
                    className="border border-1 border-dark mb-2"
                    size={75}
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />

                <span className="fs-3 fw-bold">Vinícius Corrêa</span>
            </div>
            <hr />
            <Input.Search
                className="w-100 rounded-5"
                loading={false}
                enterButton={true}
            ></Input.Search>
            <div className="buttons"></div>
            <hr />
            <div className="button-exit">
                <Button danger size="large" type="dashed">
                    <LogoutOutlined />
                    Sair
                </Button>
            </div>
        </Drawer>
    );
}
