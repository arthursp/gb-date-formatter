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

  describe("should format Long date", () => {
    const setups: Setup[] = [
      [new Date("2024-01-05T00:00:00-05:00"), "January 2024"],
      [new Date("2024-02-05T00:00:00-05:00"), "February 2024"],
      [new Date("2024-03-05T00:00:00-05:00"), "March 2024"],
      [new Date("2024-04-05T00:00:00-05:00"), "April 2024"],
      [new Date("2024-05-05T00:00:00-05:00"), "May 2024"],
      [new Date("2024-06-05T00:00:00-05:00"), "June 2024"],
      [new Date("2024-07-05T00:00:00-05:00"), "July 2024"],
      [new Date("2024-08-05T00:00:00-05:00"), "August 2024"],
      [new Date("2024-09-05T00:00:00-05:00"), "September 2024"],
      [new Date("2024-10-05T00:00:00-05:00"), "October 2024"],
      [new Date("2024-11-05T00:00:00-05:00"), "November 2024"],
      [new Date("2024-12-05T00:00:00-05:00"), "December 2024"],
    ];
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "MMMM y")).to.equal(s[1]);
      });
    })
  });

  describe("should format Medium date", () => {
    const setups: Setup[] = [
      [new Date("2024-01-05T20:00:00-06:00"), "Friday Jan 5, 2024 8:00 PM"],
      [new Date("2024-02-05T23:00:00-06:00"), "Monday Feb 5, 2024 11:00 PM"],
      [new Date("2024-03-05T20:00:00-06:00"), "Tuesday Mar 5, 2024 8:00 PM"],
      [new Date("2024-04-05T20:00:00-05:00"), "Friday Apr 5, 2024 8:00 PM"],
      [new Date("2024-05-20T08:09:10-05:00"), "Monday May 20, 2024 8:09 AM"],
      [new Date("2024-06-05T20:00:00-05:00"), "Wednesday Jun 5, 2024 8:00 PM"],
      [new Date("2024-07-05T00:02:00-05:00"), "Friday Jul 5, 2024 12:02 AM"],
      [new Date("2024-08-05T20:59:00-05:00"), "Monday Aug 5, 2024 8:59 PM"],
      [new Date("2024-09-05T20:00:00-05:00"), "Thursday Sep 5, 2024 8:00 PM"],
      [new Date("2024-10-05T20:00:00-05:00"), "Saturday Oct 5, 2024 8:00 PM"],
      [new Date("2024-11-05T20:00:00-06:00"), "Tuesday Nov 5, 2024 8:00 PM"],
      [new Date("2024-12-05T20:00:00-06:00"), "Thursday Dec 5, 2024 8:00 PM"],]
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "EEE MMM d, y h:mm a")).to.equal(s[1]);
      });
    })
  });

  describe("should format month names long", () => {
    const setups: Setup[] = [
      [new Date("2024-01-05T20:00:00.000Z"), "January"],
      [new Date("2024-02-05T20:00:00.000Z"), "February"],
      [new Date("2024-03-05T20:00:00.000Z"), "March"],
      [new Date("2024-04-05T20:00:00.000Z"), "April"],
      [new Date("2024-05-20T08:09:10.000Z"), "May"],
      [new Date("2024-06-05T20:00:00.000Z"), "June"],
      [new Date("2024-07-05T20:00:00.000Z"), "July"],
      [new Date("2024-08-05T20:00:00.000Z"), "August"],
      [new Date("2024-09-05T20:00:00.000Z"), "September"],
      [new Date("2024-10-05T20:00:00.000Z"), "October"],
      [new Date("2024-11-05T20:00:00.000Z"), "November"],
      [new Date("2024-12-05T20:00:00.000Z"), "December"],]
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "MMMM")).to.equal(s[1]);
      });
    })
  });

  describe("should format month names short", () => {
    const setups: Setup[] = [
      [new Date("2024-01-05T20:00:00.000Z"), "Jan"],
      [new Date("2024-02-05T20:00:00.000Z"), "Feb"],
      [new Date("2024-03-05T20:00:00.000Z"), "Mar"],
      [new Date("2024-04-05T20:00:00.000Z"), "Apr"],
      [new Date("2024-05-20T08:09:10.000Z"), "May"],
      [new Date("2024-06-05T20:00:00.000Z"), "Jun"],
      [new Date("2024-07-05T20:00:00.000Z"), "Jul"],
      [new Date("2024-08-05T20:00:00.000Z"), "Aug"],
      [new Date("2024-09-05T20:00:00.000Z"), "Sep"],
      [new Date("2024-10-05T20:00:00.000Z"), "Oct"],
      [new Date("2024-11-05T20:00:00.000Z"), "Nov"],
      [new Date("2024-12-05T20:00:00.000Z"), "Dec"]
    ]
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "MMM")).to.equal(s[1]);
      });
    })
  });
});
