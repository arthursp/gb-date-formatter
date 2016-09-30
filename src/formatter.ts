// https://docs.angularjs.org/api/ng/filter/date

import { DateParts } from "./dateparts";

export type FormatString = "EEE MMM d, y h:mm a" | "MMMM y";

type LongShort = [string, string];

const monthNames: LongShort[] = [
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

const dayNames: LongShort[] = [
    ["Sunday", "Sun"],
    ["Monday", "Mon"],
    ["Tuesday", "Tue"],
    ["Wednesday", "Wed"],
    ["Thursday", "Thu"],
    ["Friday", "Fri"],
    ["Saturday", "Sat"],
];

export class DateFormatter {
    static zeros: string = Array(5).join("0");

    constructor(private locale: string = "en-US") {
        if (locale !== "en-US") {
            throw new Error("Only en-US is supported.");
        }
    }
    public format(date: Date, fmt: FormatString | string | undefined | null): string {
        const parts = new DateParts(date);

        switch (fmt) {
            case "MMMM y": {
                return `${monthNames[parts.m][0]} ${parts.y.toFixed(0)}`;
            }
            case "EEE MMM d, y h:mm a": {
                const ps = [
                    `${dayNames[parts.w][0]} ${monthNames[parts.m][1]} ${parts.d}, ${parts.y}`,
                    `${parts.h}:${this.prependZero(parts.mm, 2)} ${parts.a}`,
                ];
                return ps.join(" ");
            }
            default: {
                throw new Error(`The fmt value '${fmt}' is not supported.`);
            }
        }
    }

    private prependZero(num: number, cnt: number): string {
        return DateFormatter.zeros.concat(num.toString(10)).slice(-cnt);
    }
}
