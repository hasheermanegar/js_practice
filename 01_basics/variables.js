/* const used to declare the values that we never wanted to change at anytime like if declared it cannot be changed during runtime */
const accountId = 111111
let accountEmail ="hasheer@w.com"
var accountpassword = "12345"
accountCity = "Jaipur"

//accountId= 12345 /*we cant do this because const keyword used so id is not changeable like updated */
/* prefer not to use var because of issue in block scope */

let accountState;//undefined because we have not declared anything 


accountEmail = "hc@n.com"
accountpassword = "54321"
accountCity = "Bengaluru"
console.log(accountId)
console.table([accountEmail,accountId,accountpassword,accountCity,accountState])


