//1. Print 1 - 135
console.log('1. Print 1 - 135')
var my_arr2 =[]
for(var i=1; i<=135; i++){
    my_arr2.push(i)
}
console.log(my_arr2)


//2. Print Odd Numbers 1 - 135
console.log('2. Print Odd Numbers 1 - 135')
function oddNumber(){
    var my_arr = []
    for(var i=1; i<=135; i++){
        if(i % 2=== 1){
            my_arr.push(i)
        }
    }
    return my_arr
}
console.log(oddNumber())

//3. Sum of Printed Numbers
console.log('3. Sum of Printed Numbers')
var sum = 0;
for( var i=0; i<=135; i++){
    // sum += i
    sum = sum + i
    console.log('Number is: '+ i + ' Sum: ' + sum)
}

//4. Print the elements of an array
console.log('4. Print the elements of an array')
function print_array(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}
var x = [1,4,2,12]
print_array(x)

//5. Find Max
console.log('5. Find Max')
var X = [-1, -2, -3, 0];
var max = Math.max(...X);
console.log(max)

//6. Get Average
console.log('6. Get Average')
var x = [2,1,3]
var total = 0
for(var i = 0; i < x.length; i++) {
    total += x[i]
}
var average = total / x.length
console.log(average)


//7. Eliminate the Negatives
console.log('7. Eliminate the Negatives')
var x = [1, -6, -7, 8, 9];
var i = 0;
while (i < x.length) {
    if (x[i] < 0) {
        x[i] = x[x.length - 1];
        x.pop();
    } else {
        i++;
    }
}   
console.log(x)

//Number to String
console.log('8-Number to String')

var arr=['1','-4','0','-1']
var arr2 = arr.map(value => value.indexOf('-') == 0 ? 'Turing' : convertStr(value));
console.log(arr2);
function convertStr(str){
  var values = str.split(',')
  return  values[0]
}
