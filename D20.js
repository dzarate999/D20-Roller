function dTwenty() {
    output = Math.ceil(Math.random() * 20);
    if (output == 20) return "CRIT!";
    if (output == 1) return "FAILURE!";
    else return output;
}
console.log ("Rolling a D20");
console.log(dTwenty());