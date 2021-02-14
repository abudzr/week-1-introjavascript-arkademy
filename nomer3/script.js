function printTriangle (num){
    for (var i = num; i >= 1; i--) {
        var s = '';
    
        for (var j = 1; j <= i; j++) {
            s += j;
        }
        console.log(s);
    }
}
    
printTriangle(5)






















// function printTriangle1 (num){
//     for (var i = 0; i <= num; i++) {
//         var s = '';
    
//         for (var j = 1; j <= i; j++) {
//             s += j;
//         }
//         console.log(s);
//     }
// }
    
// printTriangle1(5)