function factorialize(n){
    var result =1
    if (n == 0){
        return 1
    } else if(n> 0){
        for(var i=1; i<=n; i++){
            result *=i
        }
    }
    return result
}
console.log(factorialize(0))
console.log(factorialize(10))
