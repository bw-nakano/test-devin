import { AccordionComponent } from "@/_component/accordion";
import { css } from "../../styled-system/css";
export default function Page() {
    return (
        <main
            className={css({
                padding: "1rem",
                maxWidth: "800px",
                marginInline: "auto",
            })}
        >
            <AccordionComponent />
        </main>
    );
}
