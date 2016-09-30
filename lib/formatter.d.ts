export declare type FormatString = "EEE" | "MMM" | "MMMM" | "EEE MMM d, y h:mm a" | "MMMM y";
export declare class DateFormatter {
    private locale;
    private static zeros;
    constructor(locale?: string);
    format(date: Date, fmt: FormatString): string;
    private doFormat(parts, fmt);
    private prependZero(num, cnt);
}
