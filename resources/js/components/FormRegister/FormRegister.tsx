import React from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { createRoot } from "react-dom/client";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { CardEvents } from "../Events/CardEvents";

export function FormRegister() {
    return (
        <>
            <div className="mt-5 p-5 col-12 col-lg-6">
                <h1 className="text-center">Cadastre-se</h1>
                <>
                    <Card
                        bordered={false}
                        style={{
                            width: 500,
                            margin: "auto",
                            marginTop: 50,
                            borderRadius: 10,
                        }}
                    >
                        <Form
                            name="normal_login"
                            className="login-form rounded-5"
                            initialValues={{ remember: true }}
                        >
                            <Form.Item
                                name="nome"
                                rules={[
                                    {
                                        required: true,
                                        message: "Por favor, digite seu nome!",
                                    },
                                ]}
                            >
                                <Input
                                    prefix={
                                        <PersonOutlineOutlinedIcon
                                            fontSize="small"
                                            className="site-form-item-icon"
                                        />
                                    }
                                    placeholder="Nome"
                                />
                            </Form.Item>
                            <Form.Item
                                name="numero_celular"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Por favor, digite seu número de celular!",
                                    },
                                ]}
                            >
                                <Input
                                    prefix={
                                        <SmartphoneOutlinedIcon
                                            fontSize="small"
                                            className="site-form-item-icon"
                                        />
                                    }
                                    placeholder="Número de celular"
                                />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Por favor, digite seu email!",
                                    },
                                ]}
                            >
                                <Input
                                    prefix={
                                        <EmailOutlinedIcon
                                            fontSize="small"
                                            className="site-form-item-icon"
                                        />
                                    }
                                    placeholder="Email"
                                />
                            </Form.Item>
                            <Form.Item
                                name="senha"
                                rules={[
                                    {
                                        required: true,
                                        message: "Por favor, digite sua senha!",
                                    },
                                ]}
                            >
                                <Input
                                    prefix={
                                        <LockOutlinedIcon
                                            fontSize="small"
                                            className="site-form-item-icon"
                                        />
                                    }
                                    type="password"
                                    placeholder="Crie sua senha"
                                />
                            </Form.Item>
                            <Form.Item
                                name="repeat_senha"
                                rules={[
                                    {
                                        required: true,
                                        message: "Por favor, repita sua senha!",
                                    },
                                ]}
                            >
                                <Input
                                    prefix={
                                        <LockOutlinedIcon
                                            fontSize="small"
                                            className="site-form-item-icon"
                                        />
                                    }
                                    type="password"
                                    placeholder="Repita a senha"
                                />
                            </Form.Item>
                            <Form.Item
                                name="cpf"
                                rules={[
                                    {
                                        required: true,
                                        message: "Por favor, digite seu CPF!",
                                    },
                                ]}
                            >
                                <Input
                                    prefix={
                                        <FingerprintOutlinedIcon
                                            fontSize="small"
                                            className="site-form-item-icon"
                                        />
                                    }
                                    placeholder="CPF"
                                />
                            </Form.Item>
                            <Form.Item
                                name="data_nascimento"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Por favor, digite sua data de nascimento!",
                                    },
                                ]}
                            >
                                <Input
                                    prefix={
                                        <CalendarTodayOutlinedIcon
                                            fontSize="small"
                                            className="site-form-item-icon"
                                        />
                                    }
                                    placeholder="Data de nascimento"
                                />
                            </Form.Item>
                            <Form.Item
                                name="genero"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Por favor, escolha seu gênero!",
                                    },
                                ]}
                            >
                                <Input
                                    prefix={
                                        <PersonOutlineOutlinedIcon
                                            fontSize="small"
                                            className="site-form-item-icon"
                                        />
                                    }
                                    type="select"
                                    placeholder="Gênero"
                                />
                            </Form.Item>
                            <div className="d-flex justify-content-center">
                                <Form.Item>
                                    <Button
                                        htmlType="submit"
                                        className="login-form-button px-5"
                                    >
                                        Cadastre-se
                                    </Button>
                                </Form.Item>
                            </div>
                        </Form>
                    </Card>
                </>
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center p-5">
                <h1 className="mb-5">Alguns dos nossos eventos</h1>
                <CardEvents showDetails={false} />
                <CardEvents showDetails={false} />
            </div>
        </>
    );
}
const rootElement = document.getElementById("form_register");
const root = createRoot(rootElement);

root.render(<FormRegister />);
