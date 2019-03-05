
function createPhoneNumber(numbers){
let phoneNumberFormatting = "(xxx) xxx-xxxx";
   for (let i = 0; i < numbers.length; i++){
       phoneNumberFormatting = phoneNumberFormatting.replace('x', numbers[i]);
   }
return phoneNumberFormatting;

}




