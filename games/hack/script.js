let randomTerminalTextInterval = setInterval(() => {
    let randomTerminals = [...document.getElementsByClassName("random-terminal")]
    randomTerminals.forEach(terminal => {
        terminal.innerHTML += Math.round(Math.random()) + " "
        terminal.scrollBy(0, 10)
    });
}, 1);

function addLine(terminal, text) {
    terminal.innerHTML += "<br>" + text
}