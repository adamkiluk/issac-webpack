import { handleRollButton } from "./services/createAxaLuckyNumber";
import { createAxaLuckyNumber } from "./services/handleRollButton";

const rollNumberOutput = document.getElementById('AXA-ID-H3');
const rollButton = document.getElementById('AXA-ID-BUTTON');

export const runApp = () => {
    handleRollButton(rollButton, rollNumberOutput);
    createAxaLuckyNumber(rollNumberOutput);
};
