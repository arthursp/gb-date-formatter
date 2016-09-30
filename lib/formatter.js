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
        var parts = new dateparts_1.DateParts(date);
        switch (fmt) {
            case "MMMM y": {
                return monthNames[parts.m][0] + " " + parts.y.toFixed(0);
            }
            case "EEE MMM d, y h:mm a": {
                var ps = [
                    (dayNames[parts.w][0] + " " + monthNames[parts.m][1] + " " + parts.d + ", " + parts.y),
                    (parts.h + ":" + this.prependZero(parts.mm, 2) + " " + parts.a),
                ];
                return ps.join(" ");
            }
            default: {
                throw new Error("The fmt value '" + fmt + "' is not supported.");
            }
        }
    };
    DateFormatter.prototype.prependZero = function (num, cnt) {
        var z = Array(5).join("0");
        return z.concat(num.toString(10)).slice(-cnt);
    };
    return DateFormatter;
}());
exports.DateFormatter = DateFormatter;
