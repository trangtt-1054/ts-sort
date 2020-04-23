"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
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
var numbers = new NumbersCollection_1.NumbersCollection([9, 0, -40, 78]);
numbers.sort();
console.log(numbers.data);
var characters = new CharactersCollection_1.CharactersCollection("tranthutrang");
characters.sort();
console.log(characters.data);
var linked = new LinkedList_1.LinkedList();
linked.add(60);
linked.add(88);
linked.add(-2);
linked.add(19);
linked.sort();
console.log(linked.print());
