$(document).ready(function() {
$('.sidenav').sidenav();
$('select').formSelect();
$('tooltipped').tooltip();
$('.carousel').carousel({
    indicators: true
});
// Credit https://codepen.io/hilaura13/pen/ztmpf
let counter = 0;
$('#upVote').click(function(){
    counter++;
$('#downVote').click(function(){
    counter--;
});
$('#count').text(counter);
});
});
