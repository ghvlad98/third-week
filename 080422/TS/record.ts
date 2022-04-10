export interface Records {
    id: string;
    name: string;
    age?: number;
    description;
}

export interface RecordsOperation<Z> {
    loadRecord(param: Z): Z;
    printData<Z>(): void;
}

export abstract class RecordsImpl implements RecordsOperation<Records> {
    record: Records;
    constructor({id, name, age, description}: Records) {
        this.record.id = id;
        this.record.name = name;
        this.record.age = age;
        this.record.description = description;
    }

    printData<Z>(): void {
        this.record = this.loadRecord(null)
    }

    loadRecord(record: Records): Records | null {
        record.id = "1";
        record.age = 12;
        record.description = "Red Hot Chili Peppers, Californication";
        record.name = "Californication";

        return record;
    }
}