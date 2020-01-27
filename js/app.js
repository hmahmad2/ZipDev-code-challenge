var fOne;
var fTwo;
var fThree;
var fFour;


function questionOne() {
    // fOne = document.forms["formOne"].value;
    // fOne = document.getElementById("formOne").target;
    // fOne = document.getElementById("formOne");
    var e = document.getElementById("formOne");
    var w = e.options[e.selectedIndex].text;
    // window.fOne = e.options[e.selectedIndex].text;
    // window.fOne = w;
    fOne = w;
    // document.getElementById("testAnswers").innerHTML = window.fOne;
    document.getElementById("testAnswer1").innerHTML = fOne;
    // console.log(window.fOne);
    console.log(fOne);
    // fOne = window.fOne;
}

// console.log(fOne);

function questionLast() {
    document.getElementById("testAnswer3").innerHTML = fOne;
}

