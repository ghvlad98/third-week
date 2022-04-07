function generate() {
    let array = [];
    for (let i = 0; i < 4; i++) {
        let n = Math.floor((Math.random() * 99) + 1);
        console.log(n);
        document.getElementById(i.toString()).innerHTML = n;
        array.push(n);
    }
    return array;
}

function op() {
    let array = generate();
    let op = prompt("What type of operation do you want: (sum, subtraction, multiplication, division)");
    switch (op) {
        case "sum":
            let sum = 0;
            for (let i = 0; i < 4; i++) {
                sum += array[i];
            }
            alert(sum);
            break;
        case "subtraction":
            let sub = 0;
            for (let i = 0; i < 4; i++) {
                sub -= array[i];
            }
            alert(sub);
            break;
        case "multiplication":
            let mul = 1;
            for (let i = 0; i < 4; i++) {
                mul *= array[i];
            }
            alert(mul)
            break;
        case "division":
            let div = 1;
            for (let i = 0; i < 4; i++) {
                div /= array[i];
            }
            alert(div)
            break;
    }
}

setTimeout(() => {
    // TODO
}, 5000)