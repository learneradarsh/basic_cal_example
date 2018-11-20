// function c(val) {
// 	var a1 = $("#bar").val(val);
// }

// function v(val) {
// 	var sym = /\.|\+|\-|\*|\//
//     var barValue = $("#bar").val();
//     var lastChar = barValue.substring(barValue.length, barValue.length - 1);
//     if (sym.test(lastChar) && sym.test(val)) {
//     } else {
//         var a2 = $("#bar").val($("#bar").val() + val);
// 	}
// }

// function equal() {
//    $("#history").append($("#bar").val()+"=")
// 	var a3 = c(eval($("#bar").val()))
// }

// function reset() {
//     var a4 = $("#bar").val("");
// }

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