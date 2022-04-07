const cookie = () => {
    const nome = prompt("Inserisci il tuo nome", "Nome");
    document.cookie = `NomeUtente= ${nome};`;
}

cookie();

const localStorage = () => {
    window.localStorage.setItem("Username", "Vlad")
    alert(window.localStorage.getItem("Username"))
}

localStorage();

const obj = [{ "chiave": "valore" }];