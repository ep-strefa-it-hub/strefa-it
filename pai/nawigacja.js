
const lekcje = [
    "01-wprowadzenie",
    "02-js-obsluga-kodu",
    "03-js-bledy-w-kodzie",
    "04-js-zmienne",
    "05-js-operacje-na-liczbach",
    "06-js-operacje-na-ciagach-znakow",
    "07-js-instrukcje-warunkowe",
    "08-js-petle",
    "09-js-zdarzenia",
    "10-js-obiekty",
    "11-js-tablice",
    "12-js-funkcje",
    "13-formularze",
    "14-powtorzenie"
];

// Ustalenie folderu aktualnej lekcji
const sciezka = window.location.pathname.split("/").filter(Boolean);
const pozycjaPAI = sciezka.lastIndexOf("pai");
const aktualnyFolder = sciezka[pozycjaPAI + 1];

const numerLekcji = lekcje.indexOf(aktualnyFolder);
const menu = document.querySelector("nav .nav-container");

function dodajLink(adres, tekst) {
    const link = document.createElement("a");
    link.href = adres;
    link.textContent = tekst;
    menu.appendChild(link);
}

if (menu && numerLekcji !== -1) {

    // Poprzednia lekcja
    if (numerLekcji > 0) {
        dodajLink(
            "../" + lekcje[numerLekcji - 1] + "/index.html",
            "← Poprzednia"
        );
    }

    // Następna lekcja
    if (numerLekcji < lekcje.length - 1) {
        dodajLink(
            "../" + lekcje[numerLekcji + 1] + "/index.html",
            "Następna →"
        );
    }

    // Przejście do zadań
    let zadania = document.getElementById("zadania");

    // W lekcji 14 zadania rozpoczynają się w sekcji obliczenia
    if (!zadania && aktualnyFolder === "14-powtorzenie") {
        zadania = document.getElementById("obliczenia");
    }

    if (zadania) {
        dodajLink("#" + zadania.id, "Zadania ↓");
    }
}
