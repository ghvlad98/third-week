interface Runnable<T, U> {
    run<T>(runnable:T);
    runSafe<T extends Runnable<T, U>>();
}

let runnable: Runnable<string, string>;
runnable.runSafe<Runnable<string, string>>();