var fOne;
var fTwo;
var fThree;
var fFour;

var countOne = 10;
var countTwo = 10;
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

// var interval2 = setInterval(function() {
//     if (countTwo <= 10) {
//         document.getElementById("count2").innerHTML = countTwo;
//     }
//     countTwo--;
//     if (countTwo <= -1) {
//         clearInterval(interval2);
//         document.getElementById("count2").innerHTML = 'Done';
//         var e = document.getElementById("formTwo");
//         e.disabled = true;
//     }
// }, 1000);


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
        document.getElementById("testAnswer3").innerHTML = "True";
    } else {
        document.getElementById("testAnswer3").innerHTML = "False";
    }
    console.log(fThree);
}

function questionFour() {
    var er = document.getElementById("formFourFirst").value;
    var re = document.getElementById("formFourSecond").value;

    // document.getElementById("testAnswer4").innerHTML = er;
    var lowCase = /[\W_]/g;
    var lowCaseER = er.toLowerCase().replace(lowCase, '');
    var lowCaseRE = re.toLowerCase().replace(lowCase, '');

    fFour = (lowCaseER === lowCaseRE);
    document.getElementById("testAnswer4").innerHTML += er + " ";
    document.getElementById("testAnswer4").innerHTML += re;
    if (fFour) {
        document.getElementById("testAnswer4").innerHTML += "<br />" + "True";
    } else {
        document.getElementById("testAnswer4").innerHTML += "<br />" + "False";
    }
}

// console.log(fOne);

// function questionLast() {
//     document.getElementById("testAnswer3").innerHTML = fOne;
// }

var i = 0;
function move1() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 0;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 25) {
                clearInterval(id);
                i = 25;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width  + "%";
            }
        }
    }
}

function move2() {
    if (i == 25) {
        i = 26;
        var elem = document.getElementById("myBar");
        var width = 25;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 50) {
                clearInterval(id);
                i = 50;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width  + "%";
            }
        }
    }
}

function move3() {
    if (i == 50) {
        i = 51;
        var elem = document.getElementById("myBar");
        var width = 50;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 75) {
                clearInterval(id);
                i = 75;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width  + "%";
            }
        }
    }
}

function move4() {
    if (i == 75) {
        i = 76;
        var elem = document.getElementById("myBar");
        var width = 75;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 100;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width  + "%";
            }
        }
    }
}

function setVis1() {
    document.getElementById("buttonTwo").style.visibility = "visible";
    document.getElementById("part2").style.visibility = "visible";
    document.getElementById("buttonOne").style.visibility = "hidden";
    document.getElementById("part1").style.visibility = "hidden";
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
    
}

function setVis2() {
    document.getElementById("buttonThree").style.visibility = "visible";
    document.getElementById("part3").style.visibility = "visible";   
    document.getElementById("buttonTwo").style.visibility = "hidden";
    document.getElementById("part2").style.visibility = "hidden";
}

function setVis3() {
    document.getElementById("buttonFour").style.visibility = "visible";
    document.getElementById("part4").style.visibility = "visible";   
    document.getElementById("buttonThree").style.visibility = "hidden";
    document.getElementById("part3").style.visibility = "hidden";
}

function setVis4() {
    document.getElementById("buttonFour").style.visibility = "hidden";
    document.getElementById("part4").style.visibility = "hidden";
    document.getElementById("submission").style.visibility = "visible";
}