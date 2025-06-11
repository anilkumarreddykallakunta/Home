let surName = "Kallakunta"; // Global Scope
function MyFunction() {
  console.log(surName);
}
MyFunction();

//Local scope
function privateVar() {
  let mail = "anil@gmail.com";
  let password = 1234;
}
console.log(mail); // We get Error Here because mail and password are local scope.
//  but we are accessing outside of the block it will throw an error

if(true){
    let message = "hello";
    console.log(message);
}
console.log(message)