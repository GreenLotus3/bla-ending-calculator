// Show popup when page loads

window.onload = function () {

    openPopup();

};



function openPopup() {

    document.getElementById("popup").style.display = "flex";

}


function hint1() {

    document.getElementById("hint1").style.display = "flex";

}

function hint2() {

    document.getElementById("hint2").style.display = "flex";

}

function hint3() {

    document.getElementById("hint3").style.display = "flex";

}

function solution() {

    document.getElementById("solution").style.display = "flex";

}


function closePopup() {

    document.getElementById("popup").style.display = "none";

}

function closeHint1() {

    document.getElementById("hint1").style.display = "none";

}

function closeHint2() {

    document.getElementById("hint2").style.display = "none";

}

function closeHint3() {

    document.getElementById("Hint3").style.display = "none";

}

function closeSolution() {

    document.getElementById("solution").style.display = "none";

}

function calculate() {

    const object1 = Number(document.getElementById("object1").value);

    const object2 = Number(document.getElementById("object2").value);

    const object3 = Number(document.getElementById("object3").value);

    const object4 = Number(document.getElementById("object4").value);

    // Example calculation

    const full = ((((((object1 * 10) + object2) * 10) + object3) * 10) + object4);

    const encoded = (full * 169) + 19

    const edigit1 = Math.floor(encoded / 100000) % 10; // hundred-thousands

    const edigit2 = Math.floor(encoded / 10000)  % 10; // ten-thousands

    const edigit3 = Math.floor(encoded / 1000)   % 10; // thousands

    const edigit4 = Math.floor(encoded / 100)    % 10; // hundreds

    const edigit5 = Math.floor(encoded / 10)     % 10; // tens

    const edigit6 = encoded % 10;                         // ones




    document.getElementById("result1").textContent =

         edigit1;

document.getElementById("result2").textContent =

         edigit2;

document.getElementById("result3").textContent =

         edigit3;

document.getElementById("result4").textContent =

         edigit4;

document.getElementById("result5").textContent =

         edigit5;

document.getElementById("result6").textContent =

         edigit6;

}

function reset() {
  document.getElementById("result1").textContent = "";
  document.getElementById("result2").textContent = "";
  document.getElementById("result3").textContent = "";
  document.getElementById("result4").textContent = "";
  document.getElementById("result5").textContent = "";
  document.getElementById("result6").textContent = "";
}


