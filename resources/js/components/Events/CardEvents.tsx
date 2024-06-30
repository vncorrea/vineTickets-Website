import React from "react";
import { Card } from "antd";
import { EnvironmentOutlined, ClockCircleOutlined } from "@ant-design/icons";

const { Meta } = Card;

export function CardEvents() {
    return (
        <Card
            className="h-100 mb-5 cursor-pointer"
            style={{ width: 255, height: 200 }}
            cover={
                <img
                    alt="example"
                    style={{ height: 255 }}
                    src="https://www.oticket.com.br/_next/image?url=https%3A%2F%2Fd3f2jfeezhp4gy.cloudfront.net%2Fevent%2FyUAI9uCTDTEdf9d8ODpIIxBod.png&w=1080&q=75"
                />
            }
        >
            <Meta
                title="TARDEZINHA DA ESTAÇÃO"
                description={
                    <div>
                        <span>
                            <EnvironmentOutlined /> Estação Central
                        </span>
                        <p className="mb-0">
                            <ClockCircleOutlined /> 17h - 21h
                        </p>
                    </div>
                }
            />
        </Card>
    );
}
