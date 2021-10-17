const rollNumberOutput = document.getElementById('AXA-ID-H3');
const rollButton = document.getElementById('AXA-ID-BUTTON');

const handleRollButton = (node, textElement) => {
    node.addEventListener("click", () => {
        createAxaLuckyNumber(textElement);
    });
};

const createAxaLuckyNumber = (element) => {
    element.innerHTML = 'RANDOM NUMBER = ' + Math.floor(Math.random() * 100);
};

handleRollButton(rollButton, rollNumberOutput);
createAxaLuckyNumber(rollNumberOutput);
