let cookies = 0;
let cookieMultiplier = 1;
let autoCookiesN = 0;
let autoCookiesDelay = 1000;
let autoInterval;
let puanElement = document.getElementById("puan");
let menuItemElements = [...document.getElementsByClassName("menu-item")];
let menuItems = [{
        "name": "2x Click Multiplier",
        "price": 30,
        exec: function(price) {
            if (cookies >= price) {
                cookies -= price;
                cookieMultiplier *= 2;
                return true;
            } else return false;
        }
    },
    {
        "name": "3x Click Multiplier",
        "price": 50,
        exec: function(price) {
            if (cookies >= price) {
                cookies -= price;
                cookieMultiplier *= 3;
                return true;
            } else return false;
        }
    },
    {
        "name": "+1 Autoclick Amount",
        "price": 1000,
        exec: function(price) {
            if (cookies >= price) {
                cookies -= price;
                autoCookiesN += 1;
                return true;
            } else return false;
        }
    },
    {
        "name": "2x Autoclick Amount",
        "price": 2000,
        exec: function(price) {
            if (cookies >= price) {
                cookies -= price;
                if (autoCookiesN == 0) autoCookiesN = 1;
                autoCookiesN *= 2;
                return true;
            } else return false;
        }
    },
    {
        "name": "2x Autoclick Speed",
        "price": 5000,
        exec: function(price) {
            if (cookies >= price) {
                cookies -= price;
                autoCookiesDelay /= 2;
                clearInterval(autoInterval);
                autoInterval = setInterval(() => {
                    cookies += autoCookiesN;
                    update()
                }, autoCookiesDelay);
                return true;
            } else return false;
        }
    }
]

function update() {
    puanElement.innerHTML = `Kurabiyeler:${cookies}`;
    menuItemElements.forEach((itemElement, index) => {
        itemElement.children[0].innerHTML = `${menuItems[index].name}<br>${menuItems[index].price}`;
    });
}

function setup() {
    puanElement.innerHTML = `Kurabiyeler:${cookies}`;
    menuItemElements.forEach((itemElement, index) => {
        itemElement.children[0].innerHTML = `${menuItems[index].name}<br>${menuItems[index].price}`;
        itemElement.onclick = function() {
            if (menuItems[index].exec(menuItems[index].price))
                menuItems[index].price **= 2;
            update();
        };
    });
    autoInterval = setInterval(() => {
        cookies += autoCookiesN;
        update()
    }, autoCookiesDelay);
}



setup();