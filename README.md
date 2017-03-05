# nao-roam

> A robot roam program to let him roam in 5 x 5 table.

## Overview

The program is written with native javascript, not using any library/framework. The program provide an UI you could access via the modern browser (tested on Chrome only though as the time limitation).

The program provide the test cases using [Mocha](https://mochajs.org/) test framework. Test cases input is written in JSON format, so it's easy to add and extend.

## How to use the UI

Clone this repo to your local environment. Open the file `index.html` in the browser. You could see a page with 5 x 5 table, Nao-look robot and the control panel on the right side bar.

The control panel includes these functions:

- Place: set the robot to specific x, y axis and orientation with 3 corresponding pre-set drop down box.
- Move: take one step forwrad in the orientation.
- Turn left: turn anti-clockwise 90 degree.
- Turn right: turn clockwise 90 degree.
- Report: display the current location and orientation under 'Robot says' label.

## How to test

1. Install [Node.js](https://nodejs.org/en/). 
2. Install the development dependencies: `npm install`
3. Run `npm test test/test.js` under the root directory.

After this, a testing report will be provided on the terminal. The first test case is dummy test case, which will be always failed.

Currently, these cases cover:
- basic function for command `PLACE`, `MOVE`, `LEFT`, `RIGHT`, `REPORT`
- command will be ignored when it will make the robot fall off the table

The test case input are stored in this file `test\testInput.json` with JSON format, so it's easy to extend with new test cases.
