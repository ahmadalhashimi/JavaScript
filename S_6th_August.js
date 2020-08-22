var my_array = ['bmw', 3, true, 10]
// console.log(my_array)
// console.log(my_array[0]) 
// console.log(my_array[1]) 
// console.log(my_array[2]) 
// console.log(my_array[3]) 

// for(i=0; i<my_array.length; i++){
//     console.log(my_array[i])
// }
// for(i=1; i<=my_array.length; i++){
//     console.log(my_array[i])
// }
// for(i=1; i<=my_array.length; i++){
//     console.log(my_array[i-1])
// }

var i =0
while(i< my_array.length){
    console.log(my_array[i])
    i++
}
var nameHabib = 'Habib'
console.log(nameHabib[0])

var name ='habib'
var res = ''
for(i=0; i<name.length; i++){
    if(name[i] =='b'){
        // res = res +'B' also you can add += it is the same
        res += 'B'
    }else{
        // res = res +name[i]
        res += name[i]
    }
}
console.log(res)
// 
var res_arr = []
var res_arr2 =[]
for(var num_arr =0; num_arr<20; num_arr ++){
  if(num_arr % 2 ===1){
      res_arr.push(num_arr)
      res_arr2.unshift(num_arr)
     console.log(num_arr)
  }
}
console.log(res_arr)
console.log(res_arr2)