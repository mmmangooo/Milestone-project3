$(document).ready(function() {
/* Initializaton of Materialize components */
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


/* Changes text in #book-header when user submits books search, to display 'search result' instead of 'all books' */

function changeHeader(e) {
    console.log('search-btn clicked');
    $('#book-header').text('Search Results:');
    e.preventDefault(); 
};


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
            contactForm.reset();  // Clears form input fields when the form is reloaded after submission
            $('#contactForm').find('label').addClass('active'); // Class "active" on labels pushes them up above input fields   
    },  function(error) {
            console.log('failed', error);
            $('#error-alert').show();
    });
          
return false;
       
}

