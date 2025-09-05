import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
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
});
