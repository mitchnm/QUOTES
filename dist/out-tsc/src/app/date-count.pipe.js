import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var DateCountPipe = /** @class */ (function () {
    function DateCountPipe() {
    }
    DateCountPipe.prototype.transform = function (value) {
        var today = new Date(); //get current date and time
        var todayWithNoTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var dateDifference = Math.abs(todayWithNoTime - value); // returns value in milliseconds
        var secondsInADay = 86400; //60 seconds*60 minutes in an hour *24 hours
        var dateDifferenceSeconds = dateDifference * 0.001; //converts to seconds
        var dateCounter = dateDifferenceSeconds / secondsInADay;
        if (dateCounter >= 1 && value > todayWithNoTime) {
            return dateCounter;
        }
        else {
            return 0;
        }
    };
    DateCountPipe = tslib_1.__decorate([
        Pipe({
            name: 'dateCount'
        })
    ], DateCountPipe);
    return DateCountPipe;
}());
export { DateCountPipe };
//# sourceMappingURL=date-count.pipe.js.map