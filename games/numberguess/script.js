let sayi = Math.round(Math.random() * 100);
let durum = document.getElementById("durum");

function f() {}

function testNum() {
    durum = document.getElementById("durum");
    durum.innerText =
        (Number(document.getElementById('number').value) < sayi) ?
        'daha büyük' : 'daha küçük';
}