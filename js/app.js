var fOne;
var fTwo;
var fThree;
var fFour;

var countOne = 10;
var countTwo = 20;
var interval1 = setInterval(function() {
    document.getElementById("count1").innerHTML = countOne;
    countOne--;
    if (countOne <= -1) {
        clearInterval(interval1);
        document.getElementById("count1").innerHTML = 'Done';
        var e = document.getElementById("formOne");
        e.disabled = true;
    }
}, 1000);

var interval2 = setInterval(function() {
    if (countTwo <= 10) {
        document.getElementById("count2").innerHTML = countTwo;
    }
    countTwo--;
    if (countTwo <= -1) {
        clearInterval(interval2);
        document.getElementById("count2").innerHTML = 'Done';
        var e = document.getElementById("formTwo");
        e.disabled = true;
    }
}, 1000);


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

function questionThree() {
    var e = document.getElementById("formThree");
    // var w = e.options[e.selectedIndex];
    var w = e.value;
    // removing unwanted characters from the palindrome
    // make the string lowercase
    var re = /[\W_]/g;
    // console.log(w);    
    var lowCaseRegEx = w.toLowerCase().replace(re, '');
    // reverse the string here
    var reverseStr = lowCaseRegEx.split('').reverse().join('');
    fThree = (lowCaseRegEx === reverseStr);
    if (fThree) {
        document.getElementById("testAnswer3").innerHTML = "true";
    } else {
        document.getElementById("testAnswer3").innerHTML = "false";
    }
    console.log(fThree);
}

// console.log(fOne);

// function questionLast() {
//     document.getElementById("testAnswer3").innerHTML = fOne;
// }

