var animation = bodymovin.loadAnimation({
    container: document.getElementById('loader1'),
    rederer: 'svg',
    loop: false,
    autoplay: true,
    path: 'loader_increment_determinate.json'
})

animation.addEventListener('DOMLoaded', (e) => {
    console.log("hola")
    console.log( animation);
    // animation2.play(); 

animation.playSegments([0,91],true); 
});


