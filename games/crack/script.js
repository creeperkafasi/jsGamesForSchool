function newButton() {
    let button = document.createElement("button");
    button.className = "downloadbutton"
    document.body.appendChild(button);
    button.innerHTML = "İndirmek için tıkla";
    button.style.backgroundColor = "rgb(" +
        Math.floor(Math.random() * 255) + "," +
        Math.floor(Math.random() * 255) + "," +
        Math.floor(Math.random() * 255) + ")";
    button.addEventListener("click", (e) => {
        alert("Lütfen bildirimlere izin verin 🥺🙏")
        Notification.requestPermission();
        if (Notification.permission == "denied") {
            alert("n0 🅱obux😨")
        }
        if (Notification.permission == "granted") {
            alert("69420 free 🅱obux pog")
        }
    });
}

function epilepsy() {
    document.getElementById("flashingStyle").innerText =
        `
        .downloadbutton{
            color: rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255});
        }
        `;
}

let epilepsyInterval = setInterval(epilepsy, 100);

let buttonInterval = setInterval(newButton, 10);