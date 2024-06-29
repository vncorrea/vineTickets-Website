import React from "react";
import { createRoot } from "react-dom";
import { CardEvents } from "./CardEvents";

export function ContainerEvents() {
    return (
        <section className="d-flex flex-wrap px-5 mt-4 gap-2 justify-content-between">
            <CardEvents />
            <CardEvents />
            <CardEvents />
            <CardEvents />
        </section>
    );
}

const rootElement = document.getElementById("container_events");
const root = createRoot(rootElement);

root.render(<ContainerEvents />);
