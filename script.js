function echoInput() {
    const userInput = document.getElementById('userInput').value;
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = `You entered: ${userInput}`;
}
