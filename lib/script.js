function reverseText() {
    var forward = document.getElementById("txt").value;
    var backward = forward.split("").reverse().join("");
    document.getElementById("result").innerHTML = backward;
}

document.getElementById("rev").addEventListener("click", reverseText);
