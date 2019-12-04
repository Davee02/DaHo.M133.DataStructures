import { expect } from "chai";
import { Queue } from "../lib/Queue";

describe("Data structures", () => {
    describe("Queue", () => {
        it("empty queue has zero size", () => {
            const testee = new Queue<number>();

            const result = testee.size();

            expect(result).to.equal(0);
        })

        it("enqueue item increases size", () => {
            const testee = new Queue<number>();

            testee.enqueue(1);
            testee.enqueue(2);
            testee.enqueue(3);
            const result = testee.size();

            expect(result).to.equal(3);
        })
    })

    // describe("Factory", () => {
    //     it("can create Queue", () => {
    //         const structureType = DataStructures.Queue;
    //         const result = DataStructureFactory.create(structureType);
    //         expect(result).to.be.an.instanceOf(Queue);
    //     })
    // })
})