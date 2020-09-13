function get_user(name,age){
    this.name=name
    this.age= age
    this.bio=function(){
        console.log('name is ${name}, age is ${age}')
    }
}
let user1 = new get_user('Mo',30)
let user2 = new get_user('Ali',30)
user1.bio