/// <reference path="../node_modules/@types/mocha/index.d.ts" />

import { DateFormatter } from "../src/formatter";
import * as chai from "chai";

const expect = chai.expect;

type ExpectedResult = string;

type Setup = [Date, ExpectedResult];

describe("Formatter", () => {
  let formatter: DateFormatter;

  beforeEach(() => {
    formatter = new DateFormatter("en-US");
  });

  describe("Invalid Date handling", () => {
    it("should throw on invalid date", () => {
      const nonDate = {} as Date;
      expect(() => formatter.format(nonDate, "MMM")).to.throw("Invalid Date");
    });

    it("should throw on undefined date", () => {
      const nonDate = undefined;
      expect(() => formatter.format(nonDate, "MMM")).to.throw("Date is required.");
    });

  });

  describe("Long date formatting", () => {
    const setups: Setup[] = [
      [new Date(2024, 0, 15), "January 2024"],
      [new Date(2024, 1, 15), "February 2024"],
      [new Date(2024, 2, 15), "March 2024"],
      [new Date(2024, 3, 15), "April 2024"],
      [new Date(2024, 4, 15), "May 2024"],
      [new Date(2024, 5, 15), "June 2024"],
      [new Date(2024, 6, 15), "July 2024"],
      [new Date(2024, 7, 15), "August 2024"],
      [new Date(2024, 8, 15), "September 2024"],
      [new Date(2024, 9, 15), "October 2024"],
      [new Date(2024, 10, 15), "November 2024"],
      [new Date(2024, 11, 15), "December 2024"]
    ];
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "MMMM y")).to.equal(s[1]);
      });
    })
  });

  describe("Medium date formatting", () => {
    const setups: Setup[] = [
      [new Date(2024, 0, 5, 20, 0, 0), "Friday Jan 5, 2024 8:00 PM"],
      [new Date(2024, 1, 5, 23, 0, 0), "Monday Feb 5, 2024 11:00 PM"],
      [new Date(2024, 2, 5, 20, 0, 0), "Tuesday Mar 5, 2024 8:00 PM"],
      [new Date(2024, 3, 5, 20, 0, 0), "Friday Apr 5, 2024 8:00 PM"],
      [new Date(2024, 4, 20, 8, 9, 0), "Monday May 20, 2024 8:09 AM"],
      [new Date(2024, 5, 5, 20, 0, 0), "Wednesday Jun 5, 2024 8:00 PM"],
      [new Date(2024, 6, 5, 0, 2, 0), "Friday Jul 5, 2024 12:02 AM"],
      [new Date(2024, 7, 5, 20, 59, 0), "Monday Aug 5, 2024 8:59 PM"],
      [new Date(2024, 8, 5, 20, 0, 0), "Thursday Sep 5, 2024 8:00 PM"],
      [new Date(2024, 9, 5, 20, 0, 0), "Saturday Oct 5, 2024 8:00 PM"],
      [new Date(2024, 10, 5, 20, 0, 0), "Tuesday Nov 5, 2024 8:00 PM"],
      [new Date(2024, 11, 5, 20, 0, 0), "Thursday Dec 5, 2024 8:00 PM"]
    ]
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "EEE MMM d, y h:mm a")).to.equal(s[1]);
      });
    })
  });

  describe("Long month names", () => {
    const setups: Setup[] = [
      [new Date(2024, 0, 15), "January"],
      [new Date(2024, 1, 15), "February"],
      [new Date(2024, 2, 15), "March"],
      [new Date(2024, 3, 15), "April"],
      [new Date(2024, 4, 15), "May"],
      [new Date(2024, 5, 15), "June"],
      [new Date(2024, 6, 15), "July"],
      [new Date(2024, 7, 15), "August"],
      [new Date(2024, 8, 15), "September"],
      [new Date(2024, 9, 15), "October"],
      [new Date(2024, 10, 15), "November"],
      [new Date(2024, 11, 15), "December"]
    ]
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "MMMM")).to.equal(s[1]);
      });
    })
  });

  describe("Short month names", () => {
    const setups: Setup[] = [
      [new Date(2024, 0, 15), "Jan"],
      [new Date(2024, 1, 15), "Feb"],
      [new Date(2024, 2, 15), "Mar"],
      [new Date(2024, 3, 15), "Apr"],
      [new Date(2024, 4, 15), "May"],
      [new Date(2024, 5, 15), "Jun"],
      [new Date(2024, 6, 15), "Jul"],
      [new Date(2024, 7, 15), "Aug"],
      [new Date(2024, 8, 15), "Sep"],
      [new Date(2024, 9, 15), "Oct"],
      [new Date(2024, 10, 15), "Nov"],
      [new Date(2024, 11, 15), "Dec"]
    ]
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "MMM")).to.equal(s[1]);
      });
    })
  });
});
