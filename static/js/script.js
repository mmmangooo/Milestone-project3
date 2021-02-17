$(document).ready(function() {
/* Initializaton of materialize components */
$('.sidenav').sidenav();
$('select').formSelect();
$('tooltipped').tooltip();
/* Start carousel */
$('.carousel.carousel-slider').carousel({
    indicators: false
});
// Credit for code creating indicators for switching slides: 
 //https://codepen.io/Paco_Cervantes/pen/ZLxKpj?editors=1010 
$('.moveNextCarousel').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
});

/* Creating upvoting/downvoting functionality */
// Credit for this code: https://codepen.io/hilaura13/pen/ztmpf
let counter = 0;
$('#upVote').click(function(){
    counter++;
    $('#count').text(counter);
});
$('#downVote').click(function(){
    counter--;
    $('#count').text(counter);
});


/* Contact form sending emails through emailjs on submission of form */

function sendMail(contactForm) {
emailjs.send('default_service', 'template_pzyq6ap', {
        'from_name': contactForm.name.value,
        'from_email': contactForm.emailaddress.value,
        'message': contactForm.message.value
})

    // Creates a response when the user sends the form, informing user if sending was successful or not 
    .then(
        function(response) {
            console.log('success', response);
            $('#success-alert').style.display='block';
    }, function(error) {
            console.log('failed', error);
            $('#error-alert').style.display='block';
    });
  
console.log('success')
return false;
       
}
});
