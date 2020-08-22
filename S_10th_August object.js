var user={
    name:'Ahmad',
    age: 37,
    admin: false,
    // hobbies: ['javascript', 'internet', 'loopen'],
    hobbies:['nooo'], //hier the data will add to array also
    test: function(hobby){
        this.hobbies.push(hobby)
        console.log(this.name, this.hobbies)
    }
}
user.name = 'Ahmad'
user.test('JS','not') //hier we can't add the boolean
user.test('1')
user.test('2')
user.test('3')
// user.name='Ali'
// user.name='ddd'
// console.log(user.hobbies)
// user.hobbies.push('aaa','eeee')
// console.log(user)

// for(i=0; i<user.hobbies.length; i++){
//     console.log(user.hobbies[i])
// }

var user1={
    name1:'Ahmad',
    age1: 37,
    admin1: false,
    hobbies1:[], 
    test1: function(){
        console.log(this.name1, this.hobbies1)
    }
}
user1.name1 = 'Ahmad'
user1.test1('JS')

