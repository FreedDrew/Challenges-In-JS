# Instructions
Remove a exclamation mark from the end of string.
 
 For a beginner kata, you can assume that the input data is always a string, no need to verify it.


#### Code Given to Start              
```javascript
function remove(s){
 
}

```    
## Test Your Work
```javascript
describe("Basic Tests", function(){
  it("It should works for basic tests", function(){

Test.assertSimilar(remove("Hi!") , "Hi")
Test.assertSimilar(remove("Hi!!!") ,"Hi!!")
Test.assertSimilar(remove("!Hi") , "!Hi")
Test.assertSimilar(remove("!Hi!") , "!Hi")
Test.assertSimilar(remove("Hi! Hi!") , "Hi! Hi")
Test.assertSimilar(remove("Hi") , "Hi")

})})```
