let leftPos = 0
let bottomPos = 0
document.getElementById('yessir').addEventListener('click', () => {
    alert('Ai încercat să selectezi ,,NU”😱?  Cred ca ai selectat ,,DA” pentru că știu că mă iubești. Și eu te iubesc❤️, tu știi asta. De asta te provoc să încerci să faci click/apeși pe ,,NU”. Noi v-om înceta să ne mai iubim în momentul în care îți va reuși să apeși ,,NU”😜')
})
document.getElementById('nooo').addEventListener('mouseover', () => {
    leftPos = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    document.getElementById('nooo').style.position = "absolute"
    document.getElementById('nooo').style.left = leftPos + "%"
    document.getElementById('nooo').style.bottom = bottomPos + "%"
})
document.getElementById('nooo').addEventListener('click', () => {
    leftPos = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    document.getElementById('nooo').style.position = "absolute"
    document.getElementById('nooo').style.left = leftPos + "%"
    document.getElementById('nooo').style.bottom = bottomPos + "%"
})
