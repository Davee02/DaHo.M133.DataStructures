import { IDataScructure } from "./IDataStructure";

export class Queue<T> implements IDataScructure {
    values: Array<T> = new Array<T>();

    public size(): number {
        return this.values.length;
    }

    public isEmpty(): boolean {
        return this.values.length === 0;
    }

    public enqueue(value: T): void {
        this.values.push(value);
    }

    public peek(): T {
        return this.values[0];
    }

    public poll(): T {
        return this.values.shift();
    }
}