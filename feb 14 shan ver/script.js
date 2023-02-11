//taking the elements from the html || css file
let Readydiv = document.getElementById("Readydiv");
let Contentbox = document.getElementById("Contentbox");

//the click me btn that'll go into the contentbox
function openbtn1() {
    Readydiv.classList.add("hideReadydiv");
    Contentbox.classList.add("ShowContentbox");
}

//taking the element
let WhoRelationship = document.getElementById("Who-Relationship");

//the hi btn tha'll go into the who relationship section
function openbtn2() {
    Contentbox.classList.remove("ShowContentbox");
    WhoRelationship.classList.add("show-Who-Relationship");
}

//taking the element
let theStranger = document.getElementById("The-Stranger");
let theFriend = document.getElementById("The-Friend");
let theSpecial = document.getElementById("The-Special");

//when click the stranger btn this run
function openbtn3() {
    WhoRelationship.classList.remove("show-Who-Relationship");
    theStranger.classList.add("show-The-Stranger");
}

//when click the friend button this run
function openbtn4() {
    WhoRelationship.classList.remove("show-Who-Relationship");
    theFriend.classList.add("show-The-Friend");
}

//when click the special btn this run
function openbtn5() {
    WhoRelationship.classList.remove("show-Who-Relationship");
    theSpecial.classList.add("show-The-Special");
}

let special2 = document.getElementById("Special2");
let special3 = document.getElementById("special3");
let special4 = document.getElementById("special4");
let special5 = document.getElementById("special5");

function openspecial2() {
    theSpecial.classList.remove("show-The-Special");
    special2.classList.add("show-Special2");
}

function openspecial3() {
    special2.classList.remove("show-Special2");
    special3.classList.add("show-special3");
}

function openspecial4() {
    special3.classList.remove("show-special3");
    special4.classList.add("show-special4");
}

function openspecial5() {
    special4.classList.remove("show-special4");
    special5.classList.add("show-special5");
}