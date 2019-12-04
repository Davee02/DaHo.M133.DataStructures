import { IDataScructure } from "./IDataStructure";

export class Queue<T> implements IDataScructure {
    values: Array<T> = new Array<T>();

    public size(): number {
        return this.values.length;
    }
}