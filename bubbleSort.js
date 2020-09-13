function bubbleSort(arr){
    for (var i=arr.length-1; i>=0; i--){
        for(var j=0; j<=i; j++){
            if(arr[j] > arr[j+1]){
                var x = arr[j]
                arr [j] = arr[j+i]
                arr[j+1] = x
            }
        }
    }
    console.log(arr)
}
bubbleSort([7,5,2,4,3,9]);