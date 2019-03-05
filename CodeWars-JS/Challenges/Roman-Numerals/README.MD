# Instructions
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer.

You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately,
starting with the leftmost digit and skipping any 0s. 

So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC)
and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). 

The Roman numeral for 1666, "MDCLXVI",
uses each letter in descending order.

***CodeWars also offers extra help which is provided below:***

```text

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
```

#### Code Given to Start              
```javascript
function solution(roman){
  // complete the solution by transforming the 
  // string roman numeral into an integer  
}
```
## Test Your Work
```javascript
// TODO: Add your tests here
// Starting from Node 10.x, [Mocha](https://mochajs.org) is used instead of our custom test framework.
// [Codewars' assertion methods](https://github.com/Codewars/codewars.com/wiki/Codewars-JavaScript-Test-Framework)
// are still available for now.
//
// For new tests, using [Chai](https://chaijs.com/) is recommended.
// You can use it by requiring:
//     const assert = require("chai").assert;
// If the failure output for deep equality is truncated, `chai.config.truncateThreshold` can be adjusted.


describe("Solution", function() {
  it("should test for something", function() {
    // Test.assertEquals(1 + 1, 2);
    // assert.strictEqual(1 + 1, 2);
  });
});
```
