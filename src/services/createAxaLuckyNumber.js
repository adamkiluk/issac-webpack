const handleRollButton = (node, textElement) => {
    node.addEventListener("click", () => {
        createAxaLuckyNumber(textElement);
    });
};