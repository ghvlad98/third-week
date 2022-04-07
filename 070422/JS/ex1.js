function generate1() {
    let a = [];
    for (let i = 0; i < 10; i++) {
        a.push(Math.floor((Math.random() * 9) + 1))
    }

    return a
}

function generate2() {
    let b = [];
    for (let i = 0; i < 10; i++) {
        b.push(Math.floor((Math.random() * 9) + 1))
    }

    return b;
}

function sum(a, b) {
    let c = [];
    for (let i = 0; i < 10; i++) {
        c[i] = a[i] + b[i];
    }
    return c;
}

function subtraction(a, b) {
    let c = [];
    for (let i = 0; i < 10; i++) {
        c[i] = a[i] - b[i];
    }
    return c;
}

function multiplication(a, b) {
    let c = [];
    for (let i = 0; i < 10; i++) {
        c[i] = a[i] * b[i];
    }
    return c;
}

function division(a, b) {
    let c = [];
    for (let i = 0; i < 10; i++) {
        c[i] = a[i] / b[i];
    }
    return c;
}

function execute() {
    let a = generate1();
    console.log(a);
    let b = generate2();
    console.log(b);
    let op = prompt("What type of operation do you want to do: (sum, subtraction, multiplication, division)")
    switch (op) {
        case "sum":
            console.log(sum(a, b));
            break;
        case "subtraction":
            console.log(subtraction(a, b));
            break;
        case "multiplication":
            console.log(multiplication(a, b));
            break;
        case "division":
            console.log(division(a, b));
            break;
    }
}