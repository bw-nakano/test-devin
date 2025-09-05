import { defineConfig } from "@pandacss/dev";
import { breakpoints } from "./panda/extend/breakpoints";
import { textStyles } from "./panda/extend/textStyles";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            breakpoints,
            textStyles,
        },
    },

    // The output directory for your css system
    outdir: "styled-system",
});
