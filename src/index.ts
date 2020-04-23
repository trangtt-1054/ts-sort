import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

/* TRƯỚC KHI SORTER THÀNH ABSTRACT CLASS 
const numbers = new NumbersCollection([22, 3, 56, -9]);
const sorter1 = new Sorter(numbers);

sorter1.sort();
console.log(sorter1.collection);

const chars = new CharactersCollection("trangxinh");
const sorter = new Sorter(chars);
sorter.sort();

console.log(sorter.collection);
//console.log(chars.data); kết quả giống cái trên

const list = new LinkedList();
list.add(300);
list.add(-80);
list.add(99);
list.add(17);

const sorter3 = new Sorter(list);
sorter3.sort();
list.print(); */

const numbers = new NumbersCollection([9, 0, -40, 78]);

numbers.sort();
console.log(numbers.data);

const characters = new CharactersCollection("tranthutrang");
characters.sort();
console.log(characters.data);

const linked = new LinkedList();
linked.add(60);
linked.add(88);
linked.add(-2);
linked.add(19);

linked.sort();
console.log(linked.print());
