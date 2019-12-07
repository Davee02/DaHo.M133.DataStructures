import { IDataStructure } from "../lib/IDataStructure";
import { DataStructureFactory, DataStructures } from "../lib/DataStructureFactory";

let dataStructure: IDataStructure<string>;
const outputBox: HTMLInputElement = document.querySelector("input#output") as HTMLInputElement;

document.querySelector<HTMLBodyElement>("button#set-datastructure")!.addEventListener("click", () => {
    if (document.querySelector<HTMLInputElement>("input#queue")!.checked) {
        dataStructure = DataStructureFactory.create<string>(DataStructures.Queue);
    } else {
        dataStructure = DataStructureFactory.create<string>(DataStructures.Stack);
    }

});

document.querySelector<HTMLBodyElement>("button#add-value")!.addEventListener("click", () => {
    dataStructure.enqueue(document.querySelector<HTMLInputElement>("input#value-to-add")!.value);
});

document.querySelector<HTMLInputElement>("button#peek")!.addEventListener("click", () => {
    if (dataStructure.isEmpty()) {
        outputBox.value = "The structure contains no elements";
    } else {
        outputBox.value = dataStructure.peek();
    }
});

document.querySelector<HTMLInputElement>("button#poll")!.addEventListener("click", () => {
    if (dataStructure.isEmpty()) {
        outputBox.value = "The structure contains no elements";
    } else {
        outputBox.value = dataStructure.poll();
    }
});
