import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Quote } from '../quote';
var QuoteDetailsComponent = /** @class */ (function () {
    function QuoteDetailsComponent() {
    }
    QuoteDetailsComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Quote)
    ], QuoteDetailsComponent.prototype, "quote", void 0);
    QuoteDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-quote-details',
            templateUrl: './quote-details.component.html',
            styleUrls: ['./quote-details.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], QuoteDetailsComponent);
    return QuoteDetailsComponent;
}());
export { QuoteDetailsComponent };
//# sourceMappingURL=quote-details.component.js.map