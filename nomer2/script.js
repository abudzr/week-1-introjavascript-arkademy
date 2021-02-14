function inputNilai(indo,ing,mtk,ipa) {
    return (indo + ing + mtk + ipa)/4; 
}

let indo = parseInt(prompt('Masukan nilai indo:'));
let ing = parseInt(prompt('Masukan nilai ing:'));
let mtk = parseInt(prompt('Masukan nilai mtk:'));
let ipa = parseInt(prompt('Masukan nilai ipa:'));



let rataRata = inputNilai(indo,ing,mtk,ipa);
console.log('Nilai bahasa Indonesia : ' + indo );
console.log('Nilai bahasa Inggris : ' + ing );
console.log('Nilai Matematika : ' + mtk );
console.log('Nilai IPA : ' + ipa );
console.log('Rata - Rata Nilai UN : ' + rataRata);

if (rataRata >= 90 || rataRata >= 100 ) {
    console.log('Grade = A'); 
} else if(rataRata >= 80 || rataRata > 90) {
    console.log('Grade = B'); 
}else if(rataRata >= 70 || rataRata > 80)  {
    console.log('Grade = C'); 
} else if (rataRata >= 60 || rataRata > 70) {
    console.log('Grade = D'); 
} else{
    console.log('Grade = E'); 
}




