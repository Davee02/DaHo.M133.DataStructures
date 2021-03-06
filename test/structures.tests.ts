import { expect } from "chai";
import { Queue } from "../lib/Queue";
import { Stack } from "../lib/Stack";
import { DataStructureFactory, DataStructures } from "../lib/DataStructureFactory";

describe("Data structures", () => {
    describe("Queue", () => {
        it("empty queue has zero size", () => {
            const testee = DataStructureFactory.create<number>(DataStructures.Queue);

            const result = testee.size();

            expect(result).to.equal(0);
        })

        it("non-empty queue returns false isEmpty", () => {
            const testee = DataStructureFactory.create<number>(DataStructures.Queue);

            testee.enqueue(15);
            const result = testee.isEmpty();

            expect(result).to.be.false;
        })

        it("empty queue returns true isEmpty", () => {
            const testee = DataStructureFactory.create<number>(DataStructures.Queue);

            const result = testee.isEmpty();

            expect(result).to.be.true;
        })

        it("enqueue item increases size", () => {
            const testee = DataStructureFactory.create<number>(DataStructures.Queue);

            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            const result = testee.size();

            expect(result).to.equal(3);
        })

        it("peek item returns first added value", () => {
            const testee = DataStructureFactory.create<number>(DataStructures.Queue);

            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            const result = testee.peek();

            expect(result).to.equal(11);
        })

        it("peek item returns does not affect size", () => {
            const testee = DataStructureFactory.create<number>(DataStructures.Queue);

            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            testee.peek();
            const result = testee.size();

            expect(result).to.equal(3);
        })

        it("poll item returns first added value", () => {
            const testee = DataStructureFactory.create<number>(DataStructures.Queue);

            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            const result = testee.poll();

            expect(result).to.equal(11);
        })

        it("poll item returns does affect size", () => {
            const testee = DataStructureFactory.create<number>(DataStructures.Queue);

            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            testee.poll();
            const result = testee.size();

            expect(result).to.equal(2);
        })
    })

    describe("Stack", () => {
        it("empty stack has zero size", () => {
            const testee = DataStructureFactory.create<number>(DataStructures.Stack);

            const result = testee.size();

            expect(result).to.equal(0);
        })

        it("non-empty stack returns false isEmpty", () => {
            const testee = DataStructureFactory.create<number>(DataStructures.Stack);

            testee.enqueue(15);
            const result = testee.isEmpty();

            expect(result).to.be.false;
        })

        it("empty stack returns true isEmpty", () => {
            const testee = DataStructureFactory.create<number>(DataStructures.Stack);

            const result = testee.isEmpty();

            expect(result).to.be.true;
        })

        it("enqueue item increases size", () => {
            const testee = DataStructureFactory.create<number>(DataStructures.Stack);

            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            const result = testee.size();

            expect(result).to.equal(3);
        })

        it("peek item returns last added value", () => {
            const testee = DataStructureFactory.create<number>(DataStructures.Stack);

            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            const result = testee.peek();

            expect(result).to.equal(33);
        })

        it("peek item returns does not affect size", () => {
            const testee = DataStructureFactory.create<number>(DataStructures.Stack);

            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            testee.peek();
            const result = testee.size();

            expect(result).to.equal(3);
        })

        it("poll item returns last added value", () => {
            const testee = DataStructureFactory.create<number>(DataStructures.Stack);

            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            const result = testee.poll();

            expect(result).to.equal(33);
        })

        it("poll item returns does affect size", () => {
            const testee = DataStructureFactory.create<number>(DataStructures.Stack);

            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            testee.poll();
            const result = testee.size();

            expect(result).to.equal(2);
        })
    })

    describe("Factory", () => {
        it("can create Queue", () => {
            const structureType = DataStructures.Queue;
            const result = DataStructureFactory.create<number>(structureType);
            expect(result).to.be.an.instanceOf(Queue);
        })

        it("can create Stack", () => {
            const structureType = DataStructures.Stack;
            const result = DataStructureFactory.create<number>(structureType);
            expect(result).to.be.an.instanceOf(Stack);
        })
    })
})