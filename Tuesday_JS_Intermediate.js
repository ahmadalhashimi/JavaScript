console.log('2. Print Odd Numbers 1 - 135')
function oddNumber(){
    var my_arr = []
    for(var i=200; i<=2700; i++){
        if(i % 5=== 0){
            my_arr.push(i)
        }
    }
    return my_arr
}
console.log(oddNumber())





// //1.Addition
// console.log('8-Number to String')

// var arr=['1','-4','0','-1']
// var arr2 = arr.map(value => value.indexOf('-') == 0 ? 'Turing' : convertStr(value));
// console.log(arr2);
// function convertStr(str){
//   var values = str.split(',')
//   return  values[0]
// }
