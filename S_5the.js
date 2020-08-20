var num = 20;
if( num <= 20){
    console.log('I am smaller than 20')
} else{
    console.log("I am not equal")
}
console.log(num == 20)

var nameSam = 'Ahmad';
if(nameSam == 'Ahmad'){
    console.log('I am Ahamd')
} else{
    console.log('I am not Ahmad')
}

var nameAhmd = false;
if(nameAhmd == true){
    console.log('I amd Ahmad')
} else{
    console.log('no I am not')
}

var number = 18;
if((number >=13) && (number <=16)){
    console.log('the number is correct')
} else {
    console.log('number is not between')
}

var number2 = 18;
if((number2 >=13) || (number2 <=16)){
    console.log('the number is correct')
} else {
    console.log('number is not between')
}

var numberElse = 9
if (numberElse <5){
    console.log('A')
} else if (numberElse == 10){
    console.log('B')
}else if (numberElse > 9){
    console.log('C')
}else if (numberElse <= 9){
    console.log('D')
}else {
    console.log('NO answer')
}

var numType = true
if(typeof(numType) == "number"){
    console.log('I am number')
}else if(typeof(numType) == "boolean"){
    console.log('I am true or false')
}else if (typeof(numType) == "Array"){
    console.log('I am Array')
}else {
    console.log('String')
}