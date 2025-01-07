function getPilihanComputer(){
    let botCompt = Math.random();
    if( botCompt < 0.33) return 'orang';
    if( botCompt >= 0.33 && botCompt <0.77) return 'gajah';
    return 'semut';
}

function getHasil(botCompt, player){
    if(player == botCompt) return 'Seri';
    if(player == 'orang') return (botCompt == 'semut') ? 'Menang' : 'Kalah';
    if(player == 'semut') return (botCompt == 'gajah') ? 'Menang' : 'Kalah';
    if(player == 'gajah') return (botCompt == 'orang') ? 'Menang' : 'Kalah';
}

const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function(){
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pGajah.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', '../../Multimedia/' + pilihanComputer +'.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
    
});


function putar(){
    const imgComputer = document.querySelector('.img-komputer')
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', '../../Multimedia/' + gambar[i++] + '.png')
        if(i ==gambar.length) i = 0
    }, 100)
}


const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function(){
        const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', '../../Multimedia/' + pilihanComputer +'.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
    }, 1000)

    
    })
})







// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', '../../Multimedia/' + pilihanComputer +'.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
    
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', '../../Multimedia/' + pilihanComputer +'.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
    
// });