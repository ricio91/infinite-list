"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils_1 = require("@ngui/utils");
var NguiInfiniteListDirective = (function () {
    /**
     * Creates an instance of NguiInfiniteListDirective.
     * @param {ElementRef} el
     *
     * @memberOf NguiInfiniteListDirective
     */
    function NguiInfiniteListDirective(el) {
        var _this = this;
        this.enableWindowScroll = false;
        this.disableScrollListener = false;
        this.endVisible = new core_1.EventEmitter();
        this.elementVisible = utils_1.elementVisible;
        /**
         * Handles the scroll listener event.
         *
         * @memberOf NguiInfiniteListDirective
         */
        this.scrollListener = function () {
            if (!_this.disableScrollListener) {
                var visible = void 0;
                if (_this.enableWindowScroll) {
                    visible = _this.elementVisible(_this.endEl, window);
                }
                else {
                    visible = _this.elementVisible(_this.endEl, _this.el);
                }
                if (_this.horizontal && (visible.left || visible.right)) {
                    _this.endVisible.emit(true);
                }
                else if (!_this.horizontal && (visible.top || visible.bottom)) {
                    _this.endVisible.emit(true);
                }
            }
        };
        this.el = el.nativeElement;
    }
    /**
     * Setup list of sections
     *
     * @memberOf NguiInfiniteListDirective
     */
    NguiInfiniteListDirective.prototype.ngOnInit = function () {
        this.endEl = this.el.querySelector('[ngui-infinite-list-end]');
        if (!this.endEl) {
            throw "Invalid 'ngui-infinite-list-end";
        }
        this.scrollListener();
        if (this.enableWindowScroll) {
            window.addEventListener('scroll', this.scrollListener);
        }
        else {
            this.el.addEventListener('scroll', this.scrollListener);
        }
        window.addEventListener('resize', this.scrollListener);
    };
    return NguiInfiniteListDirective;
}());
NguiInfiniteListDirective.decorators = [
    { type: core_1.Directive, args: [{ selector: '[ngui-infinite-list]' },] },
];
/** @nocollapse */
NguiInfiniteListDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
NguiInfiniteListDirective.propDecorators = {
    'horizontal': [{ type: core_1.Input },],
    'enableWindowScroll': [{ type: core_1.Input },],
    'disableScrollListener': [{ type: core_1.Input },],
    'endVisible': [{ type: core_1.Output },],
};
exports.NguiInfiniteListDirective = NguiInfiniteListDirective;
//# sourceMappingURL=infinite-list.directive.js.map