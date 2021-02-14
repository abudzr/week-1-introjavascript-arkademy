function printTriangle (num){
    if (isNaN(num) || num < 1 || num > 10) {
        console.log('Data Harus number!');
    } else{
        for (var i = num; i >= 1; i--) {
            var s = '';
        
            for (var j = 1; j <= i; j++) {
                s += j;
            }
            console.log(s);
        }
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