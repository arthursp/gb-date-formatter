export declare type FormatString = "EEE MMM d, y h:mm a" | "MMMM y";
export declare class DateFormatter {
    private locale;
    constructor(locale?: string);
    format(date: Date, fmt: FormatString | string | undefined | null): string;
    private prependZero(num, cnt);
}
