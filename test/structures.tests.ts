import { expect } from "chai";
import { Queue } from "../lib/Queue";

describe("Data structures", () => {
    describe("Queue", () => {
        it("empty queue has zero size", () => {
            const testee = new Queue<number>();

            const result = testee.size();

            expect(result).to.equal(0);
        })

        it("non-empty queue returns false isEmpty", () => {
            const testee = new Queue<number>();

            testee.enqueue(15);
            const result = testee.isEmpty();

            expect(result).to.be.false;
        })

        it("empty queue returns true isEmpty", () => {
            const testee = new Queue<number>();

            const result = testee.isEmpty();

            expect(result).to.be.true;
        })

        it("enqueue item increases size", () => {
            const testee = new Queue<number>();

            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            const result = testee.size();

            expect(result).to.equal(3);
        })

        it("peek item returns first added value", () => {
            const testee = new Queue<number>();

            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            const result = testee.peek();

            expect(result).to.equal(11);
        })

        it("peek item returns does not affect size", () => {
            const testee = new Queue<number>();

            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            testee.peek();
            const result = testee.size();

            expect(result).to.equal(3);
        })

        it("poll item returns first added value", () => {
            const testee = new Queue<number>();

            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            const result = testee.poll();

            expect(result).to.equal(11);
        })

        it("poll item returns does affect size", () => {
            const testee = new Queue<number>();

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
            const result = DataStructureFactory.create(structureType);
            expect(result).to.be.an.instanceOf(Queue);
        })
    })
})