import React from "react";
import { createRoot } from "react-dom";
import { Select } from "antd";
import { CardEvents } from "./CardEvents";

export function NextEvents() {
    return (
        <section className="px-5 d-flex justify-content-between align-items-center flex-column flex-md-row">
            <h1>Próximos eventos</h1>
            <div className="w-25">
                <Select
                    className="w-100"
                    placeholder="Selecione a região"
                    options={[
                        {
                            value: "sample",
                            label: <span>sample</span>,
                            size: "large",
                        },
                    ]}
                />
            </div>
        </section>
    );
}

const rootElement = document.getElementById("next_events");
const root = createRoot(rootElement);

root.render(<NextEvents />);
