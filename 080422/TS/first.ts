
const fn5: Function = () => {
    const hello: string | boolean | Function | {} | undefined | null = 
        "Hello World";
    console.log(hello as Object);
}