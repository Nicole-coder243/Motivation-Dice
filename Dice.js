const button= document.getElementById("motivation-roll");
const dice= document.getElementById("dice");
const output= document.querySelector(".output");
const sayings=['Say you can do it x5 to yourself','Take a breathe in and out excerise for 5 mins','Think to yourself for a few minutes','Remeber: When you smile it can boost your energy','Draw something(it can be anything do not think too hard)','Write down three thing you are grateful for today, no matter how small.','Think of a small step in your plan today to make it toward a goal you have. Just one, Then lets do it','Grab a sticky note and write down one positive thing or small win you had today.','Take a stretch for 30 secs','Keep going!','Take a quick break :)','Think happy, not sad','You are awesome'];

button.addEventListener("click",function() {
    dice.animate([
    { transform: 'translateX(0)' },
    { transform: 'translateX(10px)'},
    { transform: 'translateX(-10px)'},
    { transform: 'translateX(10px)'},
    { transform: 'translateX(0)'}
],{
    duration: 1000,
    iterations:1
});
setTimeout(function() {
const randomSayings = Math.floor(Math.random()* sayings.length);
output.textContent = sayings[randomSayings];
},1000);   
});
