function c(val) {
    document.getElementById("bar").value = val;
}

function v(val) {
    document.getElementById("bar").value += val;
}


function e() {
    try {
        var Formula = document.getElementById("bar").value;
        var Result =eval(Formula);
        c(Result);
        document.getElementById("history").innerHTML += "Resut is " +"="+Result + "<br/>";
    } catch (e) {
        c('Error')
    }
}