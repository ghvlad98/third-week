
interface IUser {
    username: string,
    password: string,
    email: string,
    enable?: boolean,
}

interface IThread {
    start(): void;
}

interface IRunnable extends IThread {
    run(): IUser;
}

abstract class IRunner {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    abstract print(): void;
    abstract set(): void;
}

class IRunnerImpl extends IRunner {
    name: string;
    constructor(name: string) {
        super(name);
    }

    print(): void {
        throw new Error("Method not implemented.");
    }
    set(): void {
        throw new Error("Method not implemented.");
    }
}

interface IPrinterOut<U, V, T, S extends IRunnable> {
    print(param: U, para1: V): void;
    start(param: U, param1?: V, param3?: T): S;
}

class PrinterOut implements IPrinterOut<Object, {}, number, IRunnable> {
    print(param: Object, para1: {}): void {
        throw new Error("Method not implemented.");
    }
    start(para, param1?: {}, param3?: number): IRunnable {
        throw new Error("Method not implemented.");
    }
}

type Obj = IPrinterOut<Object, {}, number, IRunnable>;

declare const globalVar;
