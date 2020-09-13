// function get_user(name,age){
//     this.name=name
//     this.age= age
//     this.bio=function(){
//         console.log(`name is ${name}, age is ${age}`)
//     }
// }
// let user1 = new get_user('Mo',30)
// console.log(user1.name)
// let user2 = new get_user('Ali',30)
// user2.bio()
function Student( name,age){
    this.name=name
    this.age =age
}
let Student1=new Student ('Mo', 23)
console.log(Student1)

function Teacher (name,age,subject){
    Student.call(name,age)
    this.subject= subject

}
let teacher1 = new Teacher ('test', 30, 'math')
console.log(teacher1)