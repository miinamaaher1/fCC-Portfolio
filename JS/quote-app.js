let btn = document.querySelector('#gen');
let qt = document.querySelector('.quote');
let nm = document.querySelector('.name');
const qts = [
    {qt:'“If you wish to make an apple pie from scratch, you must first invent the universe.”', nm:'― Carl Sagan'},
    {qt:'"Two things are infinite: the universe and human stupidity; and I am not sure about the universe."', nm:'― Albert Einstein'},
    {qt:'“If I have seen further it is by standing on the shoulders of Giants.”', nm:'― Isaac Newton'},
    {qt:'“Curious that we spend more time congratulating people who have succeeded than encouraging people who have not.”', nm:'― Neil deGrasse Tyson'},
    {qt:'If I have a thousand ideas and only one turns out to be good, I am satisfied.', nm:'― Alfred Nobel'}
];
btn.addEventListener('click', function(){
    let rndm = Math.floor(Math.random() * qts.length);
    qt.innerText = qts[rndm].qt;
    nm.innerText = qts[rndm].nm;
})