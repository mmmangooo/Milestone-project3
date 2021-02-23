# Milestone Project 3 - Feminist Book Site - Testing details



## Testing

The site has been manually tested on the funcitonality of the following:



## User stories Testing


## Further Testing

### Validation

HTML code has been validated using the [WC3 Markup Validation Tool](https://validator.w3.org/) with one error stemming from the jinja templating:

![Image of HTML validator result](./static/images/html-validator.png)
![Image of HTML validator result for section](./static/images/html-validator-section.png)

#### Comment:
This error is thrown because there is no flash message showing on the page, and therefor the template for flash messages is currently empty - leading to lack of
heading in the section. The HTML has been validated using the code from deployed page (by right-clicking the page and choosing the option 'show page source'),
because in the deployed version the templates are filled and therefor not throwing errors stemming from empty templates, such as '!Doctype missing' for example.


CSS code has been validated using the [Jigsaw Validator Tool](https://jigsaw.w3.org/css-validator/)





### Usability and performance testing

The site has been evaluated using Lighthouse Tool, with the following result:

![Jigsaw CSS Validator result](./static/images/jigsaw-result.png)

#### Index page:

![Lighthouse results for index page](.static/images/lighthouse-index.png)

#### Add book page:
![Lighthouse results for add book page](.static/images/lighthouse-add_book.png)

#### Contact page:
![Lighthouse results for contact page](.static/images/lighthouse-contact.png)

#### Edit book page:
![Lighthouse results for edit book page](.static/images/lighthouse-edit_book.png)


#### Comments on results:

The lower results on accessibility for add book page and edit book page is due to an additonal input element in materialize code, that lacks a label for it. 
This could not be solved since adding a label to this materialize element overwrote the label for the option element in the html form.


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


