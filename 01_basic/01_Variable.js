const accountId=1234
let accountEmail="aashu0123kumar@gmail.com"
var accountPassword="12345"
accountCity="kolkata"
/*
prefer not use var keyword b/c of issue in scope and funcational scope;
*/
//accountId=343
console.table([accountId,accountEmail,accountPassword,accountCity])
accountEmail="deepak6906kumar@gmail.com"
accountPassword="345"
accountCity="bettiah"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])