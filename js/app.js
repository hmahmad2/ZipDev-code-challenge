var fOne;
var fTwo;
var fThree;
var fFour;


function questionOne() {
    // fOne = document.forms["formOne"].value;
    // fOne = document.getElementById("formOne").target;
    // fOne = document.getElementById("formOne");
    var e = document.getElementById("formOne");
    var w = e.options[e.selectedIndex];
    // window.fOne = e.options[e.selectedIndex].text;
    // window.fOne = w;
    fOne = w;
    // document.getElementById("testAnswers").innerHTML = window.fOne;
    document.getElementById("testAnswer1").innerHTML = fOne.text;
    // console.log(window.fOne);
    console.log(fOne.text);
    // fOne = window.fOne;
}

function questionTwo() {
    var e = document.getElementById("formTwo");
    var w = e.options[e.selectedIndex];
    fTwo = w;
    document.getElementById("testAnswer2").innerHTML = fTwo.text;
    if (fTwo.value === "angular" || fTwo.value === "vue") {
        document.getElementById("testAnswer2").innerHTML += "  &#10004";
    }
    console.log(fTwo.text)
}

// console.log(fOne);

// function questionLast() {
//     document.getElementById("testAnswer3").innerHTML = fOne;
// }

