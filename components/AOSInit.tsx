"use client";

import { useEffect } from "react";

export const AOSInit = () => {
    useEffect(() => {
        // Removed AOS completely to enforce Stark Minimalist static views
        // and fix build issues with node_modules.
        document.querySelectorAll('[data-aos]').forEach(el => {
            el.removeAttribute('data-aos');
            el.removeAttribute('data-aos-delay');
        });
    }, []);

    return null;
};
