import { css } from "@/../styled-system/css";
import { Accordion } from "@ark-ui/react";
import { memo } from "react";
import { FaAngleDown } from "react-icons/fa6";

const ACCORDION_ITEMS = [
    {
        id: "react",
        title: "React",
        content: "React is a JavaScript library for building user interfaces.",
    },
    {
        id: "solid",
        title: "Solid",
        content:
            "Solid is a declarative JavaScript library for creating user interfaces.",
    },
    {
        id: "vue",
        title: "Vue",
        content:
            "Vue is a progressive JavaScript framework for building user interfaces.",
    },
] as const;

export const AccordionComponent = memo(() => {
    return (
        <Accordion.Root
            defaultValue={["React"]}
            multiple
            collapsible
            aria-label="JavaScript frameworks information"
        >
            {ACCORDION_ITEMS.map((item) => (
                <Accordion.Item
                    key={item.id}
                    value={item.title}
                    className={css({
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        marginBottom: "4px",
                    })}
                >
                    <Accordion.ItemTrigger
                        className={css({
                            width: "100%",
                            padding: "1rem",
                            position: "relative",
                            backgroundColor: "transparent",
                            border: "none",
                            textAlign: "left",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            "&:hover": {
                                backgroundColor: "#f4f4f4",
                            },
                            "&:focus": {
                                outline: "2px solid #0066cc",
                                outlineOffset: "2px",
                            },
                        })}
                        aria-expanded="false"
                    >
                        <span>What is {item.title}?</span>
                        <Accordion.ItemIndicator
                            className={css({
                                transition: "0.2s ease transform",
                                "& [data-state='open']": {
                                    transform: "rotate(180deg)",
                                },
                            })}
                            aria-hidden="true"
                        >
                            <FaAngleDown />
                        </Accordion.ItemIndicator>
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent
                        className={css({
                            padding: "1rem",
                            borderTop: "1px solid #eee",
                        })}
                        aria-labelledby={`accordion-trigger-${item.id}`}
                    >
                        {item.content}
                    </Accordion.ItemContent>
                </Accordion.Item>
            ))}
        </Accordion.Root>
    );
});

AccordionComponent.displayName = "AccordionComponent";
