import React from "react";
import { Card } from "antd";
import { EnvironmentOutlined, ClockCircleOutlined } from "@ant-design/icons";

const { Meta } = Card;

interface CardEventsProps {
    title: string;
    location: string;
    time: string;
    image: string;
    showDetails?: boolean;
}

export function CardEvents({
    title,
    location,
    time,
    image,
    showDetails = true,
}: CardEventsProps) {
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
            bodyStyle={{
                padding: showDetails ? "10px" : "0px",
                height: showDetails ? "auto" : "0px",
            }}
        >
            {showDetails && (
                <Meta
                    title={title}
                    description={
                        <div>
                            <span>
                                <EnvironmentOutlined /> {location}
                            </span>
                            <p className="mb-0">
                                <ClockCircleOutlined /> {time}
                            </p>
                        </div>
                    }
                />
            )}
        </Card>
    );
}
