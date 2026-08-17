let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';
let greetingObj = JSON.parse(greeting);

// Select elements
let greetElements = document.getElementsByClassName("greet");
let greetTextElement = document.querySelector(".greet-text");

// Fill data
greetElements[0].textContent = "From: " + greetingObj.from;
greetElements[1].textContent = "To: " + greetingObj.to;

greetTextElement.textContent = greetingObj.greetText;