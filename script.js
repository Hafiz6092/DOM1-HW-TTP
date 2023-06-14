//1 - Select the section with an id of container without using querySelector.
const containById = document.getElementById("container");
console.log(containById);

//2 - Select the section with an id of container using querySelector.
const containsByQS = document.querySelector("#container");
console.log(containsByQS);

//3 - Select all of the list items with a class of "second".
const byClassName = document.getElementsByClassName("second");
console.log(byClassName);

//4 - Select a list item with a class of third, but only the list item inside of the ol tag.
const byTag = document.querySelector("ol.third");
console.log(byTag);

//5 - Give the section with an id of container the text "Hello!".
const container = document.querySelector("#container");
container.innerTxt =  "Hello!";

//6 - Add the class main to the div with a class of footer.
const divElement = document.querySelector("div.footer");
divElement.classList.add("main");

//7 - Remove the class main on the div with a class of footer.
const RemoveDivEle = document.querySelector("div.footer");
RemoveDivEle.classList.remove("main");

//8 - Create a new li element.
const liElement = document.createElement("li");

//9 - Give the li the text "four".
const newLi = document.createElement("li");
newLi.innerText = "four";

//10 - Append the li to the ul element.
const newli = document.createElement("li");
newli.innerText = "four";
const ulElement = document.querySelector("ul");
ulElement.appendChild("newli");

//11 -  Loop over all of the lis inside the ol tag and give them a background color of "green".
const listOfols= document.getElementsByTagName("ol");
for (let li of listOfols) li.style.backgroundColor="green";

//12 - Remove the div with a class of footer.
const divFooter = document.querySelector("div.footer");
divFooter.remove();


