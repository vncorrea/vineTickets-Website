import React from "react";
import { createRoot } from "react-dom";

export function Footer() {
    return (
        <footer className="text-white text-center py-4" id="footer_content">
            <p className="mb-0">© 2024 - vineTickets</p>
        </footer>
    );
}

const rootElement = document.getElementById("footer");
const root = createRoot(rootElement);

root.render(<Footer />);
