
function isWhiteSpaceOrEmpty(str) {
    return /^[\s\t\r\n]*$/.test(str);
}

function checkEmailAndFocus(obj, msg) {
    let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (email.test(obj.value)){
        document.getElementById(errorFieldName).innerHTML = "";
        return true;
    }
    else {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    }

}

function checkStringAndFocus(obj, msg) {
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (isWhiteSpaceOrEmpty(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    }
    else {
        document.getElementById(errorFieldName).innerHTML = "";
        return true;
    }
}

function validate(formularz) {
    if (!checkStringAndFocus(formularz.elements["f_imie"], "Podaj imię!")) {
        return false;
    }
    if (!checkStringAndFocus(formularz.elements["f_nazwisko"], "Podaj nazwisko!")) {
        return false;
    }
    if (!checkStringAndFocus(formularz.elements["f_ulica"], "Podaj ulicę!")) {
        return false;
    }
    if (!checkStringAndFocus(formularz.elements["f_miasto"], "Podaj miasto!")) {
        return false;
    }
    if (!checkStringAndFocus(formularz.elements["f_kod"], "Podaj kod!")) {
        return false;
    }
    if (!checkEmailAndFocus(formularz.elements["f_email"], "Podaj poprawny email!")) {
        return false;
    }
    return true;

}




