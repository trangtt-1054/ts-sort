"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
/* Turn Sorter from normal class to Abstract class, vì bây giờ ko có collection trong sorter nữa, nó sẽ dùng data của class collection, nhưng hiện tại Sorter và collection là 2 class riêng biệt, làm thế nào để Sorter trỏ được đến collection

abstract class ko instantiate đc
=> xem evernote đoạn Abstract class
*/
