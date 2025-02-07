
function add() {
    const first = document.getElementById("first").value;
    const second = document.getElementById("second").value;

    if (!first || !second) return;

    if (isNaN(first) || isNaN(second)) {
        alert("Invalid input");
        return;
    }
    const result = Number(first) + Number(second);

    const answerBox = document.getElementById('answer-box');
    answerBox.value = result;


    if (result < 0) {
        answerBox.classList.add('negative');
    } else {
        answerBox.classList.remove('negative');
    }

    if (result < 0) {
        answerBox.style.color = 'red';
    } else {
        answerBox.style.color = 'black';
    }
}


function sub() {
    const first = document.getElementById("first").value;
    const second = document.getElementById("second").value;

    if (!first || !second) return;

    if (isNaN(first) || isNaN(second)) {
        alert("Invalid input");
        return;
    }
    const result = Number(first) - Number(second);

    const answerBox = document.getElementById('answer-box');
    answerBox.value = result;


    if (result < 0) {
        answerBox.classList.add('negative');
    } else {
        answerBox.classList.remove('negative');
    }

    if (result < 0) {
        answerBox.style.color = 'red';
    } else {
        answerBox.style.color = 'black';
    }
}

function mul() {
    const first = document.getElementById("first").value;
    const second = document.getElementById("second").value;

    if (!first || !second) return;

    if (isNaN(first) || isNaN(second)) {
        alert("Invalid input");
        return;
    }
    const result = Number(first) * Number(second);


    const answerBox = document.getElementById('answer-box');
    answerBox.value = result;


    if (result < 0) {
        answerBox.classList.add('negative');
    } else {
        answerBox.classList.remove('negative');
    }

    if (result < 0) {
        answerBox.style.color = 'red';
    } else {
        answerBox.style.color = 'black';
    }
}

function div() {
    const first = document.getElementById("first").value;
    const second = document.getElementById("second").value;

    if (!first || !second) return;

    if (isNaN(first) || isNaN(second)) {
        alert("Invalid input");
        return;
    }

    const result = Number(first) / Number(second);

    const answerBox = document.getElementById('answer-box');
    answerBox.value = result;


    if (result < 0) {
        answerBox.classList.add('negative');
    } else {
        answerBox.classList.remove('negative');
    }

    if (result < 0) {
        answerBox.style.color = 'red';
    } else {
        answerBox.style.color = 'black';
    }
}

function pow() {
    const first = Number(document.getElementById("first").value);
    const second = Number(document.getElementById("second").value);
    let startNumber = 1;

    for (let i = 0; i < second; i++) {
        startNumber = first * startNumber;
    }

    const answerBox = document.getElementById('answer-box');
    answerBox.value = startNumber;

}

function clearAll() {
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    const answerBox = document.getElementById("answer-box");
    answerBox.value = "";
    answerBox.classList.remove('negative');
}









