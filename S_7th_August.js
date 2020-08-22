function my_name(name){
    if((typeof(name)==='string') || (typeof(name)=== 'number') || (typeof(name)<=2)) // i try to find the array type of
    console.log(name)
}
my_name('ahm')
my_name(33)
// my_name([true, 33,'aa'])
// my_name(true)
////////////
function my_array(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}
//my_array(['aa',3])
var arr=['aaaa',33,44]
var arr_length = arr.length
if(arr_length=3){
    my_array(arr)
}else{
    console.log('Not')
}

//////////
function my_ar2(name1){
    if(name1.length<3){
        console.log('no')
    }else {
        for(var i=0; i<name1.length; i++){
            console.log(name1[i])
        }
    }
}
var arr1 =['ahmed', true, 2, 2]
my_ar2(arr1)
///////
function which_bigger(first, second){
    if(first > second){
        console.log(first+'is bigger than'+second)
    } else{
        console.log(second +'is bigger than'+ first)
    }
}
which_bigger(5,4)
which_bigger(11,4)
which_bigger(3,4)
///////////// return
function return_bigger(first1, second2){
    if (first1 > second2){
        return 1
    }else{
        return 2
    }
}
if(return_bigger(2,3)== 1){
    console.log('Hay')
}else{
    console.log('No')
}

// function return_opp (first2, second2, opp){
//     if(opp ==='+'){
//        return first2 + second2
//     }else{
//         return first2 - second2
//     }
// }
// console.log(return_opp(8,8,'-'))


function return_opp(first1, second1, opp){
    if(opp === '+'){
       return first1 + second1
    } else if(opp === '-'){
        if(first1> second1){
            return first1 - second1
        }else{
            return second1 - first1
        }
    }
}
console.log(return_opp(100,3,'-'))

function full_name(firstName, secondName){
    var fullName = ''
    fullName = 'MY Name is:'+ firstName + ' ' + secondName
    return fullName
}
console.log(full_name('Ahmad','Ali'))
console.log(full_name('Ahmad','44'))
console.log(full_name('Ahmad','22'))