/* BAD CODE
export class Sorter {
  constructor(public collection: number[] | string) {}
  //Remind: khi dùng union type thì chỉ access đc property/method nào của chung cả 2 thôi

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
      if (this.collection instanceof Array) { //gọi là Type Guard, lúc này thì chỉ làm việc trong trường hợp collection là array
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
      if (typeof this.collection === 'string') {
        //sort logic for string
      }
      }
    }
  } 
} */

//FINAL SOLUTION: đưa Sorter class về generic, có các class con làm chức năng riêng

// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }

// export class Sorter {
//   constructor(public collection: Sortable) {}

//   sort(): void {
//     const { length } = this.collection;

//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         if (this.collection.compare(j, j + 1)) {
//           this.collection.swap(j, j + 1);
//         }
//       }
//     }
//   }
// }

//Sau khi refactor để class khác extend được Sorter
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  //constructor(public collection: Sortable) {}, ko cần nữa vì collection sẽ đc pass trực tiếp vào class collection

  //abstract means: these methods will exist in the future, like a promise
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number; //vì length là getter đc treated như 1 property

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

/* Turn Sorter from normal class to Abstract class, vì bây giờ ko có collection trong sorter nữa, nó sẽ dùng data của class collection, nhưng hiện tại Sorter và collection là 2 class riêng biệt, làm thế nào để Sorter trỏ được đến collection

abstract class ko instantiate đc
=> xem evernote đoạn Abstract class
*/
