const target = document.getElementById("number");
const startButton = document.getElementById("start");
const endButton = document.getElementById("end");
const button_1 = document.getElementById("1");
const button_2 = document.getElementById("2");
const button_3 = document.getElementById("3");
const button_4 = document.getElementById("4");
const button_5 = document.getElementById("5");
const button_6 = document.getElementById("6");
const button_7 = document.getElementById("7");
const button_8 = document.getElementById("8");
const button_9 = document.getElementById("9");
const button_10 = document.getElementById("10");
const button_11 = document.getElementById("11");
const button_12 = document.getElementById("12");
const calc = document.getElementById("calc");
const result = document.getElementById("result");
const outcome = document.getElementById("outcome");
const nums = [];
let tried = false;
let calcString = "";
let openBracks = 0;

startButton.addEventListener('click', () => {
    target.innerText = Math.floor(Math.random()*900) + 100;
    for (i = 0; i < 5; i++) {
        nums[i] = Math.floor(Math.random()*10) + 1;
    }
    nums[5] = (Math.floor(Math.random()*4) + 1) * 25;
    button_1.innerText = nums[0];
    button_2.innerText = nums[1];
    button_3.innerText = nums[2];
    button_4.innerText = nums[3];
    button_5.innerText = nums[4];
    button_6.innerText = nums[5];
    button_7.innerText = "+";
    button_8.innerText = "−";
    button_9.innerText = "×";
    button_10.innerText = "(";
    button_11.innerText = ")";
    button_12.innerText = "=";
    calc.innerText = "";
    calcString = "";
    result.innerText = "";
    outcome.innerText = "";
    openBracks = 0;
});

endButton.addEventListener('click', () => {
    target.innerText = "";
    button_1.innerText = "";
    button_2.innerText = "";
    button_3.innerText = "";
    button_4.innerText = "";
    button_5.innerText = "";
    button_6.innerText = "";
    button_7.innerText = "";
    button_8.innerText = "";
    button_9.innerText = "";
    button_10.innerText = "";
    button_11.innerText = "";
    button_12.innerText = "";
    calc.innerText = "";
    calcString = "";
    result.innerText = "";
    outcome.innerText = "";
    openBracks = 0;
});

function endsWithNum (str) {
    if (str.length === 0) return false;
    let char = str[str.length - 1];
    return "0123456789".includes(char);
};
function endsWithNumOrRightBracket (str) {
    if (str.length === 0) return false;
    let char = str[str.length - 1];
    return "0123456789)".includes(char);
};

function endsWithOp (str) {
    if (str.length === 0) return false;
    let char = str[str.length - 1];
    return "+−×(".includes(char);
};

button_1.addEventListener('click', () => {
    if (tried) {
        calc.innerText = button_1.innerText;
        calcString = button_1.innerText;
        result.innerText = "";
        outcome.innerText = "";
        button_1.innerText = "";
        tried = false;
    } else {
    if(calc.innerText.length === 0 || !endsWithNum(calc.innerText)) {
        if(button_1.innerText !== "") {
            calc.innerText += button_1.innerText;
            calcString += button_1.innerText;
            button_1.innerText = "";
        };
    };
};
});

button_2.addEventListener('click', () => {
    if (tried) {
        calc.innerText = button_2.innerText;
        calcString = button_2.innerText;
        result.innerText = "";
        outcome.innerText = "";
        button_2.innerText = "";
        tried = false;
    } else {
    if(calc.innerText.length === 0 || !endsWithNum(calc.innerText)) {
        if(button_2.innerText !== "") {
            calc.innerText += button_2.innerText;
            calcString += button_2.innerText;
            button_2.innerText = "";
        };
    };
};
});

button_3.addEventListener('click', () => {
    if (tried) {
        calc.innerText = button_3.innerText;
        calcString = button_3.innerText;
        result.innerText = "";
        outcome.innerText = "";
        button_3.innerText = "";
        tried = false;
    } else {
    if(calc.innerText.length === 0 || !endsWithNum(calc.innerText)) {
        if(button_3.innerText !== "") {
            calc.innerText += button_3.innerText;
            calcString += button_3.innerText;
            button_3.innerText = "";
        };
    };
};
});

button_4.addEventListener('click', () => {
    if (tried) {
        calc.innerText = button_4.innerText;
        calcString = button_4.innerText;
        result.innerText = "";
        outcome.innerText = "";
        button_4.innerText = "";
        tried = false;
    } else {
    if(calc.innerText.length === 0 || !endsWithNum(calc.innerText)) {
        if(button_4.innerText !== "") {
            calc.innerText += button_4.innerText;
            calcString += button_4.innerText;
            button_4.innerText = "";
        };
    };
};
});

button_5.addEventListener('click', () => {
    if (tried) {
        calc.innerText = button_5.innerText;
        calcString = button_5.innerText;
        result.innerText = "";
        outcome.innerText = "";
        button_5.innerText = "";
        tried = false;
    } else {
    if(calc.innerText.length === 0 || !endsWithNum(calc.innerText)) {
        if(button_5.innerText !== "") {
            calc.innerText += button_5.innerText;
            calcString += button_5.innerText;
            button_5.innerText = "";
        };
    };
};
});

button_6.addEventListener('click', () => {
    if (tried) {
        calc.innerText = button_6.innerText;
        calcString = button_6.innerText;
        result.innerText = "";
        outcome.innerText = "";
        button_6.innerText = "";
        tried = false;
    } else {
    if(calc.innerText.length === 0 || !endsWithNum(calc.innerText)) {
        if(button_6.innerText !== "") {
            calc.innerText += button_6.innerText;
            calcString += button_6.innerText;
            button_6.innerText = "";
        };
    };
};
});

button_7.addEventListener('click', () => {
    if(endsWithNumOrRightBracket(calc.innerText) && !tried) {
        if(button_7.innerText !== "") {
            calc.innerText += button_7.innerText;
            calcString += button_7.innerText;
        };
    };
});

button_8.addEventListener('click', () => {
    if(endsWithNumOrRightBracket(calc.innerText) && !tried) {
        if(button_8.innerText !== "") {
            calc.innerText += button_8.innerText;
            calcString += "-";
        };
    };
});

button_9.addEventListener('click', () => {
    if(endsWithNumOrRightBracket(calc.innerText) && !tried) {
        if(button_9.innerText !== "") {
            calc.innerText += button_9.innerText;
            calcString += "*";
        };
    };
});

button_10.addEventListener('click', () => {
    if (tried) {
        calc.innerText = button_10.innerText;
        calcString = button_10.innerText;
        result.innerText = "";
        outcome.innerText = "";
        tried = false;
        openBracks++;
    } else {
    if(calc.innerText.length === 0 || endsWithOp(calc.innerText)) {
        if(button_10.innerText !== "") {
            calc.innerText += button_10.innerText;
            calcString += button_10.innerText;
            openBracks++;
        };
    };
};
});

button_11.addEventListener('click', () => {
    if(endsWithNum(calc.innerText) && openBracks) {
        if(button_11.innerText !== "" && !tried) {
            calc.innerText += button_11.innerText;
            calcString += button_11.innerText;
            openBracks--;
        };
    };
});

button_12.addEventListener('click', () => {
    result.innerText = Function(`"use strict"; return (${calcString})`)();
    if (target.innerText === result.innerText) {
        outcome.innerText = "Congratulations!"
    } else {
        let a = target.innerText;
        let b = result.innerText;
        if ((a - b) <= 5 && (a - b) >= -5) {
            outcome.innerText = "Close, but can you get it exactly?"
        } else {
            outcome.innerText = "Wrong, try again!"
        }
    }
    button_1.innerText = nums[0];
    button_2.innerText = nums[1];
    button_3.innerText = nums[2];
    button_4.innerText = nums[3];
    button_5.innerText = nums[4];
    button_6.innerText = nums[5];
    tried = true;
    openBracks = 0;
});