export interface IDataScructure<T> {
    size(): number;
    isEmpty(): boolean;
    enqueue(value: T): void;
    peek(): T;
    poll(): T;
}