const ajax = () => {
    const call = new XMLHttpRequest()
    call.open("GET", "https://jsonplaceholder.typicode.com/posts", true)
    call.send(null)
}

function response() {
    const call = new XMLHttpRequest();
    call.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText);
            let body = document.getElementsByTagName("body")[0];
            for (let i = 0; i < response.length; i++) {
                let div = document.createElement("div");
                div.id = i.toString();
                body.appendChild(div);
                document.getElementById(i.toString()).innerHTML = "id: " + response[i].id;
                document.getElementById(i.toString()).innerHTML += ", userId: " + response[i].userId;
                document.getElementById(i.toString()).innerHTML += ", title: " + response[i].title;
            }
        }
    }
    call.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    call.send(null);
}

const ajaxFetch = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(response => console.log(response)) // gestisco la fase di successo
        .catch(() => "Alert error") // gestisco la fase di errore
};

const doSomething = () => {}
const myFunction = param => doSomething(param)
const implicitReturn = () => 'test'

const name = 'Vlad'
const templateString = 'My name is $(name)'


(async() => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json)
    alert(result)
})();