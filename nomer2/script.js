function nilaiUn(indo,ing,mtk,ipa) {
    // validasi, apakah hasil inputan integer atau bukan
    if (isNaN(indo) || indo < 1 || indo > 100) {
        console.log('Masukkan Nilai Bahasa Indonesia. \n\nContoh nilai : 1-100'); 
    } else if (isNaN(ing) || ing < 1 || ing > 100) {
        console.log('Masukkan Nilai Bahasa Inggris \n\nContoh nilai : 1-100');
    } else if(isNaN(mtk) || mtk < 1 || mtk > 100){
        console.log('Masukkan nilai Mtk \n\nContoh nilai : 1-100') ;
    } else if(isNaN(ipa) || ipa < 1 || ipa > 100){
        console.log('Masukkan nilai Ipa \n\nContoh nilai : 1-100');
    } else{
        console.log('Nilai Bahasa Indonesia : ' + indo );
        console.log('Nilai Bahasa Inggris : ' + ing );
        console.log('Nilai Matematika : ' + mtk );
        console.log('Nilai IPA : ' + ipa );
        console.log('=============================================');
        
        // menghitung rata-rata dan tampilkan nilai rata-rata 
        const rataRata = (indo + ing + mtk + ipa)/4; 
        console.log('Rata - Rata Nilai UN: '+rataRata); 
        
        //kondisi nilai atau menentukan grade 
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
    }
}

    

nilaiUn("abu",76,98,89)


