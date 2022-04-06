// alert("Questo e' un messaggio");
// document.write("Hello, world!");
// alert("Questo e' un altro messaggio");


function test(a, b) {
    document.write(a);
    document.write(b);
}
/*
function base10(n) {
    document.write(parseInt(n, 2));
}

base10("00010101");
base10("11001010");
base10("10010110");
*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function test2() {
    let input = prompt("Mi chiamo", "Vlad");
    console.log(input);
    console.log("Io mi chiamo ".concat("Vlad"));
    const a = "ciao"
    const b = 3
    const convertAndCast = a === b;
    console.log(convertAndCast)
};

function test3() {
    let input = prompt("In che anno siamo");
    if (input != 2022) console.log("Risposta sbagliata");
    else if (input == 2022) console.log("Risposta giusta");

    let status = prompt("Quanti anni hai");
    return status >= 18 ? "Maggiorenne" : "Minorenne";
}

function test5() {
    let s = new String();
    let o = new Object();
    let d = new Date();
    let a = new Array();
    alert(d.getFullYear());
}


function initialize() {
    let casual = [];
    while (casual.length < 10) {
        let random = (Math.floor(Math.random() * 90) + 1);
        if (!(casual.includes(random))) {
            casual.push(random);
        }
    }

    console.log(casual);
}

function doIWon() {
    let numbers = initialize();
    let choosen = [];
    while (choosen.length < 10) {
        let n = prompt("Write an integer number between 1 and 90");
        if (!(choosen.includes(parseInt(n)))) {
            choosen.push(parseInt(n));
        }
    }
    console.log(choosen);

    let count = 0;
    for (let i = 0; i < 10; i++) {
        if (numbers[i] == choosen[i]) {
            count += 1;
        }
    }

    if (count == 10) {
        console.log("Hai fatto tombola");
    } else if (count >= 5) {
        console.log("Hai fatto cinquina");
    } else if (count >= 4) {
        console.log("Hai fatto quaterna");
    } else if (count == 3) {
        console.log("Hai fatto terna");
    } else if (count == 2) {
        console.log("Hai fatto cinquina");
    } else {
        console.log("Mi dispiace, hai perso!");
    }
}

function generate(n) {
    let casual = []
    for (let i = 0; i < n; i++) {
        casual.push(Math.floor(Math.random() * 98) + 1);
    }
    console.log(casual);
    console.log(casual.reverse());

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (casual[i] > casual[j]) {
                let temp = casual[i];
                casual[i] = casual[j];
                casual[j] = temp;
            }
        }
    }
    console.log(casual);
}

function pythagoric() {
    let body = document.getElementsByTagName("body")[0];
    let table = document.createElement("table");
    let tBody = document.createElement("tbody");
    for (let i = 1; i <= 10; i++) {
        let row = document.createElement("tr");
        for (let j = 1; j <= 10; j++) {
            let cell = document.createElement("td");
            let text = document.createTextNode(i * j);

            cell.appendChild(text);
            row.appendChild(cell);
        }
        tBody.appendChild(row);
    }
    table.appendChild(tBody);
    body.appendChild(table);
    table.setAttribute("border", "2");
}