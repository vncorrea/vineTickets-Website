import React from "react";
import { Drawer, Input, Avatar, Button } from "antd";
import { LogoutOutlined, LoginOutlined } from "@ant-design/icons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import PeopleIcon from "@mui/icons-material/People";

interface HeaderDrawerProps {
    onClose: () => void;
    visible: boolean;
    user?: string;
}

export function HeaderDrawer({ onClose, visible, user }: HeaderDrawerProps) {
    return (
        <Drawer title="Menu" placement="right" onClose={onClose} open={visible}>
            <div className="d-flex justify-content-center align-items-center flex-column">
                <Avatar
                    className="border border-1 border-dark mb-2"
                    size={75}
                    src={
                        user
                            ? "URL_DA_FOTO_DO_USUARIO"
                            : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    }
                />
                <span className="fs-3 fw-bold">
                    {user ? user : "Visitante"}
                </span>
            </div>
            <hr />
            <Input.Search
                className="w-100 rounded-5"
                loading={false}
                enterButton={true}
            ></Input.Search>
            <div className="buttons d-flex flex-column mt-2">
                {user && user.trim().length > 0 ? (
                    <>
                        <div className="d-flex align-items-center col-12">
                            <AccountCircleIcon />
                            <Button className="my-2 fs-2 border-0">
                                Conta
                            </Button>
                        </div>
                        <div className="d-flex align-items-center col-12">
                            <ConfirmationNumberIcon />
                            <Button className="my-2 fs-2 border-0">
                                Eventos
                            </Button>
                        </div>
                        <div className="d-flex align-items-center col-12">
                            <BookOnlineIcon />
                            <Button className="my-2 fs-2 border-0">
                                Meus ingressos
                            </Button>
                        </div>
                        <div className="d-flex align-items-center col-12">
                            <LocalActivityIcon />
                            <Button className="my-2 fs-2 border-0">
                                Favoritos
                            </Button>
                        </div>
                        <hr />
                        <div className="button-exit">
                            <Button danger size="large" type="dashed">
                                <LogoutOutlined />
                                Sair
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="d-flex align-items-center col-12">
                            <AccountCircleIcon />
                            <Button className="my-2 fs-2 border-0">
                                Login
                            </Button>
                        </div>
                        <div className="d-flex align-items-center  col-12">
                            <PeopleIcon />
                            <Button className="my-2 fs-2 border-0">
                                Cadastre-se
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </Drawer>
    );
}
