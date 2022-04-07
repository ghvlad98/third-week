class Logger {

    name = new String;
    data = new Data();

    constructor() {}

    /**
     * 
     * @param {*} name 
     * @param {*} data 
     */
    constructor(name, data) {
        this.name = name;
        this.data = data;
    }

    setup(...options) {
        [...options].forEach(o => {
            // TODO
        })
    }

    getData() { return this.data }

    getName() { return this.name }

    /**
     * 
     * @param {*} message 
     */
    info(message) {
        console.info(message)
    }

    /**
     * 
     * @param {*} message 
     */
    debug(message) {
        console.debug(message)
    }

    /**
     * 
     * @param {*} message 
     */
    warn(message) {
        console.warn(message)
    }

    /**
     * 
     * @param {*} message 
     */
    error(message) {
        console.error(message)
    }

}

const L = new Logger()
L.data = new Date('2022', '04', '06')
L.info(L.data.getDate)

class Utils {}