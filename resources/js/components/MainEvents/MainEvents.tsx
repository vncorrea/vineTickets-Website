import React from "react";
import { createRoot } from "react-dom";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { maxWidth } from "@mui/system";

export function MainEvents() {
    return (
        <section className="my-5">
            <div className="w-100 px-5 d-flex justify-content-center">
                <div className="position-relative">
                    <div className="position-absolute cursor-pointer top-50 end-0 me-3 fs-3">
                        <CaretRightOutlined />
                    </div>
                    <img
                        className="w-100 rounded-5 cursor-pointer"
                        src="https://cdn.quero2ingressos.com.br/fit-in/1903x476/filters:format(webp):quality(95)/img/Content/images/banner/0-20240423164452.png?h=af5b982c43fcc1d3f84e888e672d69f6"
                        alt=""
                    />
                    <div className="position-absolute cursor-pointer fs-3 top-50 ms-3">
                        <CaretLeftOutlined />
                    </div>
                </div>
            </div>
        </section>
    );
}

const rootElement = document.getElementById("main_events");
const root = createRoot(rootElement);

root.render(<MainEvents />);
