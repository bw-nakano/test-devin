import { css } from "@/../styled-system/css";

interface LoadingProps {
    message?: string;
    size?: "small" | "medium" | "large";
}

export const Loading = ({
    message = "Loading...",
    size = "medium",
}: LoadingProps) => {
    const sizeMap = {
        small: "16px",
        medium: "24px",
        large: "32px",
    };

    return (
        <output
            className={css({ textAlign: "center", padding: "2rem" })}
            aria-live="polite"
        >
            <div
                className={css({
                    width: sizeMap[size],
                    height: sizeMap[size],
                    border: "2px solid #f3f3f3",
                    borderTop: "2px solid #3498db",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                    margin: "0 auto 1rem",
                })}
                aria-hidden="true"
            />
            <p>{message}</p>
        </output>
    );
};
