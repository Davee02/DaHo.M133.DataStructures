import { IDataStructure } from "./IDataStructure";
import { Queue } from "./Queue";
import { Stack } from "./Stack";

export class DataStructureFactory {
    public static create<T>(structureType: DataStructures): IDataStructure<T> {
        switch (structureType) {
            case DataStructures.Queue:
                return new Queue<T>();

            case DataStructures.Stack:
                return new Stack<T>();
        }
    }
}

export enum DataStructures {
    Queue,
    Stack
}