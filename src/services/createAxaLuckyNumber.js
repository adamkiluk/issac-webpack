import { createAxaLuckyNumber } from "./handleRollButton";

export const handleRollButton = (node, textElement) => {
    node.addEventListener("click", () => {
        createAxaLuckyNumber(textElement);
    });
};