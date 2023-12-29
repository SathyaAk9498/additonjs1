function reset()
{
    document.getElementById("txtnum1").value = "0";
    document.getElementById("txtnum2").value = "0";
    document.getElementById("txtsum").value = "0";
}
function add()
{
    var num1 = Number(document.getElementById("txtnum1").value);
    var num2 = Number(document.getElementById("txtnum2").value);
    var sum = num1 + num2;
    document.getElementById("txtsum").value = String(sum);

}