// const Komik = {
//     title: 'One Piece',
//     series: 45,
//     description(){
//         console.log('Comic ' + this.title+' adalah tentang bajak laut')
//     }
// }

// const bukuKomik = (komikData)=>{
//     return komikData.title
// }

// console.log(bukuKomik(Komik));

// const {title,series} = Komik;
// console.log(title,series);

// const Comis = ['Naruto','Tokyo Ghoul','Biji pler'];
// for(let title of Comis){
//     console.log(title);
// }

// const copiedComis = [...Comis];
// console.log(Comis);
// console.log(Comis.map(title => 'Judul '+title));
// Komik.description();

// const arg = (...args) =>{
//     return args;
// }  

// console.log(arg(1,2,3,4,5))

const fetchKomik = asu =>{
    setTimeout(()=>{
        console.log('Komik diambil');
        asu('asu selesai');
    },3000);
}

setTimeout(()=>{
    console.log('oioioi');
    fetchKomik(anjing =>{
        console.log(anjing);
    })
},2000)

const arg =  () => console.log('ahay');
