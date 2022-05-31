var AngkotAktif = 1;
var AngkotCuti = 8;
var AngkotNonAktif = 7;
var totalAngkot = 10;
for(var i = AngkotAktif; i <= totalAngkot; i++){
    if(i < AngkotNonAktif){
        console.log("Angkot No. " + i + " beroperasi dengan baik.");
    }
    if(i == AngkotCuti){
        console.log('Angkot No. ' + i + ' sedang lembur.')
    }
    if(i >= AngkotNonAktif && i != AngkotCuti){
        console.log("Angkot No. " + i + " sedang tidak beroprasi.");
    }
    
}
