let order = 0;

let allBlocks = document.querySelectorAll('.block');

allBlocks.forEach(element => {
    element.addEventListener('click', event => {
        event.target.style.order = order--;
    });
});


allBlocks.forEach(element => {
    element.addEventListener('click', event => {
        setInterval(()=> {
            console.log('setInterval')
        }, 500)
        // event.target.style.xPosition +=
    })
})