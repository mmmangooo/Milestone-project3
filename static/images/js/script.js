$(document).ready(function() {
/* Initializaton of materialize components */
$('.sidenav').sidenav();
$('select').formSelect();
$('tooltipped').tooltip();
$('.modal').modal();


/* Creating upvoting/downvoting functionality on book cards*/
var counter = 0;
$('.upVote').click(function() {
    counter++;
    $(this).siblings('span').text(counter);
});

$('.downVote').click(function() {
    counter--;
$(this).siblings('span').text(counter);
});

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
            $('#success-alert').show();
    },  function(error) {
            console.log('failed', error);
            $('#error-alert').show();
    });
    
$('#contactForm')[0].reset();        
        
return false;
       
}