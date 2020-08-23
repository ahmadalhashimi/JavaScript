function care(name,color,id,hobb1,hobb2){
    this.name = name;
    this.color = color;
    this.id = id;
    this.hobbies = [hobb1,hobb2]
}
var my_care = new care ('BMW', 'black', 2,'22','33')
var your_care = new care ('KIA', 'Red', 44,'blablab','blblbl')
console.log(my_care)
console.log(your_care)

class auto {
    constructor (name,color){
        this.name = name;
        this.color = color
    }
}
class bicycale extends auto{}
var new_auto = new auto ('aaa','bbb')
var new_bic = new bicycale('aaadd','ddd')
console.log(new_auto)
console.log(new_bic)