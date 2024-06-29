import React from "react";
import { Drawer, Input, Avatar, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import BookOnlineIcon from "@mui/icons-material/BookOnline";

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
            <div className="buttons d-flex flex-column mt-2">
                <div className="d-flex align-items-center col-12">
                    <AccountCircleIcon />
                    <Button className="my-2 fs-2 border-0">Conta</Button>
                </div>
                <div className="d-flex align-items-center col-12">
                    <ConfirmationNumberIcon />
                    <Button className="my-2 fs-2 border-0">Eventos</Button>
                </div>
                <div className="d-flex align-items-center col-12">
                    <BookOnlineIcon />
                    <Button className="my-2 fs-2 border-0">
                        Meus ingressos
                    </Button>
                </div>
                <div className="d-flex align-items-center col-12">
                    <LocalActivityIcon />
                    <Button className="my-2 fs-2 border-0">Favoritos</Button>
                </div>
            </div>
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
