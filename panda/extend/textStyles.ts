import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
    heading: {
        value: {
            fontSize: 24,
            fontWeight: 700,
            lineHeight: 1.2,
        },
    },
    subheading: {
        value: {
            fontSize: 18,
            fontWeight: 600,
            lineHeight: 1.3,
        },
    },
    regular: {
        value: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: "md",
        },
    },
    regularWide: {
        value: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.7,
        },
    },
    small: {
        value: {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: "md",
        },
    },
    caption: {
        value: {
            fontSize: 10,
            fontWeight: 400,
            lineHeight: 1.4,
        },
    },
});
