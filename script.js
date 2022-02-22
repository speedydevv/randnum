function gen() {
    min = document.getElementById("num1").value
    max = document.getElementById("num2").value
    res = Math.floor(Math.random() * max) + min;
    alert(res)
}