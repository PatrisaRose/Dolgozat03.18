export function rendezesNevSzerint(lista, kulcs, irany) {
    console.log(lista);
    //Ezzel az eredeti lista is megváltozik
    lista.sort(function (a,b) {
        console.log(a.nev);
        console.log(b.nev);
        console.log("Követekező: a, b");
        let ertek = 1;
        if (a[kulcs] < b[kulcs]) {
          ertek = -1;  
        }
        ertek*=irany;
        return ertek; //Visszatérünk pozitív vagy negatív számmal
    })
}