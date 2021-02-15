# Milestone Project 3 - Feminist Book Site - Testing details



## Testing

The site has been manually tested on the funcitonality of the following:



## User stories Testing


## Further Testing

### Validation

### Usability and performance testing



## Known bugs



## Solved bugs

* The nav link to the contact page was not working on some screen sizes, where clicking the link directed back to the index page. A quick look with the 
  [Unicorn Revealer Tool](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB) showed that the a tag 
  containg the logo was overlapping the contact link on some screen sizes. This problem was solved by setting a smaller width to the a tag with the logo.

* During development of the functionality of editing and deleting books, while setting up forms and templates on edit_book.html and delete_book.html,
  an error with navigation occured. All navigation links had been working properly up to this point, but clicking on the links to these pages now 
  returned a jinja template error: " TypeError: delete_book() missing 1 required positional argument: 'book_id' ". The error was found to occur because 
  the route function being called in the nav link - @app.route("delete_book") - required a value for book_id since the function needs to know which book
  to delete. And the same was true for the editing page and route. When navigating to the pages for editing and deleting books, there of course was no 
  specific book_id value to input since the page needed to load all books in the db. This problem was solved by creating two separate routes for navigation
  to the edit_book site and the delete_book site respectively, and retrieving all books from the db for the user to choose from. 


