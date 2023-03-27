let getInp1 = document.getElementsByClassName("inp-for-select");
let getBtn1 = document.getElementById("genrate-btn");
let getDisplay = document.getElementById("display-div");
let getOutput = document.getElementById("output-id");

alert("Hello User");
let getInp2 = document.querySelector(".inp-for-select");

getBtn1.onclick = () => {

    let strSymbol1 = "!@#$%^&*()_+-=~`;:',<>.?/[{]}|";
    let strSmallLetters1 = "qwertyuiopasdfghjklzxcvbnm";
    let strCapitalLetters1 = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let text = "";


    for (let i = 0; i < getInp1.length; i++) {

        switch (getInp1[i].checked && getInp1[i].parentElement.parentElement.innerText) {

            case "Number":
                text += Math.random().toFixed(getOutput.innerHTML).slice(2);
                console.log(text);

                getDisplay.innerText = text;
                break;

            case "Symbol":
                text += strSymbol1;
                console.log(text);

                let forRandom1 = text.split('').sort(function(){return 0.5-Math.random()}).join('');
                getDisplay.innerText = forRandom1.slice(0, getOutput.innerHTML);
                break;

            case "LowerCaseWord":
                text += strSmallLetters1;
                console.log(text);

                let forRandom2 = text.split('').sort(function(){return 0.5-Math.random()}).join('');
                getDisplay.innerText = forRandom2.slice(0, getOutput.innerHTML);
                break;

            case "UperCaseWord":
                text += strCapitalLetters1;
                console.log(text);

                let forRandom3 = text.split('').sort(function(){return 0.5-Math.random()}).join('');
                getDisplay.innerText = forRandom3.slice(0, getOutput.innerHTML);
                break;



            case "Number":
                text += Math.random().toFixed(10).slice(2);
                console.log(text);
                // break;

            case "Symbol":
                text += strSymbol1;
                console.log(text);
                // break;

            case "LowerCaseWord":
                text += strSmallLetters1;
                console.log(text);
                // break;

            case "UperCaseWord":
                text += strCapitalLetters1;
                console.log(text);
                break;


            default:
                break;
        }

    }

    if (text < 2) {

        alert("Please toggle first");

    };

}

// Math.floor(Math.random() * arr1.length)
// .split('').sort(function(){return 0.5-Math.random()}).join('');
// .sort(() => Math.random() - 0.5);

function foo1(e) {

    if (e.checked) {

        console.log(e.parentElement.parentElement.innerText);

    }

}
