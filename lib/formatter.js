var dateparts_1 = require("./dateparts");
var monthNames = [
    ["January", "Jan"],
    ["February", "Feb"],
    ["March", "Mar"],
    ["April", "Apr"],
    ["May", "May"],
    ["June", "Jun"],
    ["July", "Jul"],
    ["August", "Aug"],
    ["September", "Sep"],
    ["October", "Oct"],
    ["November", "Nov"],
    ["December", "Dec"],
];
var dayNames = [
    ["Sunday", "Sun"],
    ["Monday", "Mon"],
    ["Tuesday", "Tue"],
    ["Wednesday", "Wed"],
    ["Thursday", "Thu"],
    ["Friday", "Fri"],
    ["Saturday", "Sat"],
];
var DateFormatter = (function () {
    function DateFormatter(locale) {
        if (locale === void 0) { locale = "en-US"; }
        this.locale = locale;
        if (locale !== "en-US") {
            throw new Error("Only en-US is supported.");
        }
    }
    DateFormatter.prototype.format = function (date, fmt) {
        return this.doFormat(new dateparts_1.DateParts(date), fmt);
    };
    DateFormatter.prototype.doFormat = function (parts, fmt) {
        switch (fmt) {
            case "EEE": {
                return dayNames[parts.w][0];
            }
            case "MMM": {
                return monthNames[parts.m][1];
            }
            case "MMMM": {
                return monthNames[parts.m][0];
            }
            case "MMMM y": {
                return this.doFormat(parts, "MMMM") + " " + parts.y.toFixed(0);
            }
            case "EEE MMM d, y h:mm a": {
                var ps = [
                    ("" + this.doFormat(parts, "EEE")),
                    ("" + this.doFormat(parts, "MMM")),
                    (parts.d + ", " + parts.y),
                    (parts.h + ":" + this.prependZero(parts.mm, 2)),
                    ("" + parts.a),
                ];
                return ps.join(" ");
            }
            default: {
                throw new Error("The fmt value '" + fmt + "' is not supported.");
            }
        }
    };
    DateFormatter.prototype.prependZero = function (num, cnt) {
        return DateFormatter.zeros.concat(num.toString(10)).slice(-cnt);
    };
    DateFormatter.zeros = Array(5).join("0");
    return DateFormatter;
}());
exports.DateFormatter = DateFormatter;
