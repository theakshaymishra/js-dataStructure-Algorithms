// Selection Sort 

let arr = [13, 46, 24, 52, 20, 9];

for( let i = 0; i < arr.length-1; i++ ){
    let minimum = i ; 
    for( let j = i+1 ; j < arr.length; j++ ){
        if(arr[minimum] > arr[j]){
            minimum = j ;
        }  
    } 
    swap( arr , minimum, i);
}

function swap( arr , idx1 , idx2){
    let temp = 0;
    temp = arr[idx1] ;
    arr[idx1] = arr[idx2];
    arr[idx2] = temp ;
 }
 console.log(arr);