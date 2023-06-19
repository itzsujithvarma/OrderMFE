import React from "react";
import { createRoot } from "react-dom/client";
import Order from "./Components/Order";

const mount = el => {
    const root = createRoot(el);
    root.render(
        <React.Fragment>
            <Order onHideCart = {() => {}} />
        </React.Fragment>
    );
}

if (process.env.NODE_ENV === 'development') {
    const el = document.getElementById("overlays");
    if (el) {
        mount(el);
    }
}
