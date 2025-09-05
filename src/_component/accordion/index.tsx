import { css } from "@/../styled-system/css";
import { Accordion } from "@ark-ui/react";
import { FaAngleDown } from "react-icons/fa6";

const items = [
    {
        id: 1,
        title: "React",
        content: "React is a JavaScript library for building user interfaces.",
    },
    {
        id: 2,
        title: "Solid",
        content:
            "Solid is a declarative JavaScript library for creating user interfaces.",
    },
    {
        id: 3,
        title: "Vue",
        content:
            "Vue is a progressive JavaScript framework for building user interfaces.",
    },
];

export const AccordionComponent = () => {
    return (
        <Accordion.Root defaultValue={["React"]} multiple collapsible>
            {items.map((item) => (
                <Accordion.Item
                    key={item.id}
                    value={item.title}
                    className={css({
                        border: "1px solid #ccc",
                    })}
                >
                    <Accordion.ItemTrigger
                        className={css({
                            width: "100%",
                            padding: "1rem",
                            position: "relative",
                            "&:hover": {
                                backgroundColor: "#f4f4f4",
                            },
                        })}
                    >
                        What is {item.title}?
                        <Accordion.ItemIndicator
                            className={css({
                                top: "50%",
                                position: "absolute",
                                right: "1rem",
                                transform: "translateY(-50%)",
                                "& [data-state='open']": {
                                    transform:
                                        "translateY(-50%) rotate(180deg)",
                                },
                            })}
                        >
                            <FaAngleDown />
                        </Accordion.ItemIndicator>
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent
                        className={css({
                            padding: "1rem",
                        })}
                    >
                        {item.content}
                    </Accordion.ItemContent>
                </Accordion.Item>
            ))}
        </Accordion.Root>
    );
};
