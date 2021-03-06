# Milestone Project 3 - Feminist Book Site - Testing details



## Manual testing

The site has been manually tested on the functionality of the following:

* Navigation links: 
   - Links in navigation bar 
   - Links in navigation bar logo 
   - Links to edit and delete book on book cards 
   - Navigation link icons at the bottom of index page

* Add book form: 
   - Input fields requirement functioning
   - Book being added to database upon submission of form
   - Sending back to index page and displaying flash message after form submission

* Edit book form:
   - Info of the correct book being shown prefilled in the edit field 
   - Book being edited in the database upon submission of form
   - Sending back to index page and displaying flash message after form submission

* Delete book functionality:
   - Popup modal showing when delete button is being clicked - displaying message "Are you sure you want to delete this book?"
   - The correct book being deleted from the database when "Yes" button is clicked in the pop up modal
   - Sending back to index page and displaying flash message after clicking "Yes" button
   - Sending back to index page without flash message and with book not being deleted when clicked "No" button in pop up modal

* Search field:
   - The functionality of entering a search string and pressing search returning a result
   - If the book or author searched for is present on the site, the book card or cards are displayed below the search field
   - If the book or author does not exist on the site a message is displayed below the search field saying "No results found"

* Contact form sending emails and displaying a feedback message confirming that the email has been sent

* Responsivity on different devices has been tested using Chrome Developer Tools and on different devices (mostly different models of
  iPhone) with the help from family and friends.


## User stories Testing

  1. As a first time visitor, I want to quickly get an overview of what this site is for so that I can decide 
     if the site provides the services I am looking for

     * When the user enters the site, they see a header and a subheader explaining the purpose of the site. The first section of
       the site also shows images and colors chosen to make the user associate to reading and to feminism, which facilitates the 
       users understanding of the site's purpose. 

  ![Image of first section on index page](./readme-assets/readme-images/index-first.png)

  2.  As a user, I want to be able to search for a specific book or books by a specific author on the site

      * There is a search field present on the site, where the user can enter a book title or author and search for them on the site

  ![Image of search section on index page](./readme-assets/readme-images/search2.png)

  3.  As a user, I want to be able to easily view the books on the site so that I can find an interesting book

      * There is a section on the page displaying all books in a grid that is easy to overview to see what books are presented on the site

   ![Image of all books section on index page](./readme-assets/readme-images/grid.png)

  4. As a returning visitor, I want to see what new books have been added to the site so that I can easily know if there has been any interesting 
     additions since my last visit

     * On the index page, just below the first section is a section for recently added books, where the user can immediately see the two books that
       have been addest latest to the site

![Image of recently added books section on index page](./readme-assets/readme-images/recent.png) 

  5. As a user, I want to be able to upvote or downvote books on the site so that I can easily share my opinion on books

    * On each book there is an upvote button and a downvote button that the user can click and that triggers a count up or down that is being showed
      between the buttons

![Image of vote buttons on book card](./readme-assets/readme-images/vote2.png) 

  6. As a user, I want to be able to add books I have read so that I can share tips and thoughts with others

    * There is an add book form accessible from navigation bar at the top pf the page and from navigation links at the bottom of the page. The user can
      fill out the form and submit it to add a book to the site

![Image of add book form](./readme-assets/readme-images/add_book.png) 

 7. As a user, I want to be able to edit books so that I can correct any mistakes or add more information in the description of the book
   
    * By clicking the edit button on the card for the book that the user wants to edit, the user is taken to a page with an edit form. The information for that
      book is prefilled in the form and the user can just edit the information they wish to and then submit the form to change any information about the book and 
      save it to the database.

![Image of edit book form](./readme-assets/readme-images/edit_book.png) 

 8. As a user, I want to be able to delete books so that I can remove any books that I believe is not in the right genre for this site

    * On each book card there is a delete button that the user can click if they wish to delete that particular book. Upon clicking the delete button a modal pops up 
      with a question if the user really wants to delete the book. By clicking yes, the book is deleted in the database. This way the user can easily delete books, and
      the pop up modal makes sure that a user does not delete a book by mistake.

![Image of delete book button](./readme-assets/readme-images/delete-btn.png) 
    
![Image of delete book modal](./readme-assets/readme-images/delete-modal.png) 


  9. As a user, I want to be able to contact the site owner so that I can report errors on the site or suggest changes or additions to the site

    * Contact page is easily accessed from both the navigation menu at the top of the page and navigation links at the bottom of index page. The user fills in the contact 
      form, sends it and gets an immediate feedback message confirming that the email was sent, or that something went wrong.

![Image of contact form](./readme-assets/readme-images/contact2.png)  


  10. As a user, I want to be able to navigate back to the main site if I end up on a page that doesnt exist, or if a link is broken

    * If a link doesnt work or the page doesnt exist, the user is taken to a customized 404 error page that contains a link for navigation back to index page.

![Image of 404-page](./readme-assets/readme-images/404-page.png) 

## Further Testing

### Validation

* HTML code has been validated using the [WC3 Markup Validation Tool](https://validator.w3.org/) with no errors:

![Image of HTML validator result](./readme-assets/readme-images/html-validation.png)


* CSS code has been validated using the [Jigsaw Validator Tool](https://jigsaw.w3.org/css-validator/) with no errors:

![Image of CSS validator result](./readme-assets/readme-images/jigsaw-result.png)


* JavaScript code has been validated using [JSHint](https://jshint.com/) with no errors except for warnings about unused variables, due to these
  being sent through EmailJS API:

![Image of JSHint validation result](./readme-assets/readme-images/jshint.png)

* Python code has been validated using [PEP8 Online](http://pep8online.com/) with no errors found





### Usability and performance testing

The site has been evaluated using Lighthouse Tool, with the following result:

![Jigsaw CSS Validator result](./readme-assets/readme-images/jigsaw-result.png)

#### Index page:

![Lighthouse results for index page](./readme-assets/readme-images/lighthouse-index.png)

#### Add book page:
![Lighthouse results for add book page](./readme-assets/readme-images/lighthouse-add_book.png)

#### Contact page:
![Lighthouse results for contact page](./readme-assets/readme-images/contact-lighthouse.png)

#### Edit book page:
![Lighthouse results for edit book page](./readme-assets/readme-images/edit-lighthouse.png)





## Solved bugs

* On the first attempt to validate the HTML, the validator threw an error for section lacking heading in the code for flash messages. This was due to the fact 
  that the flash messages block was wrapped in section tags, so that when no flash message was sent to the page there was still section tags on the page and these
  were empty. The problem was solved by moving the section tags inside the flash messages block so that when no flash message is showing, there are no section tags
  for flash messages on the page either.

* The upvote/downvote function on the book cards had a bug where no matter on which card the Upvote or Downvote button were clicked, the count always
  changed on the first book card only. When the HTML code was first run in the validator, it threw an error saying that the id's "upVote" and "downVote"
  where not unique. This led me to acknowledge that since the book card with the id's of "upVote" and "downVote" where present for every book card loaded
  via the template route, the id's where indeed present several times on the page. This meant that the voting function being called when clicking an "upVote"
  or "downVote" function on any of the cards on the page always sent back the count to the first element with the id "count" on the page, and this was the reason 
  why only the count on the first book card changed when clicking an "upvote" or "downvote" button on any card. The bug was solved by removing the id's from "upvote"
  and "downvote" buttons an giving them classes instead (solving the issue of html validator throwing error for id's not being unique), and using the 'this' keyword
  and traversing in the jquery code for sending back the count to the sibling span element of the button being clicked. The solution was found with assistance from
  tutor support.   

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

* On some screen sizes, the book card grid had an issue where the cards don't fit on the second line and there for overflow into the end of lione two and on to
  line three. See image below:

  ![Image of the issue](./readme-assets/readme-images/grid-issue.png)

  This issue was caused by the book cards not being equal in height, which led to some of them taking up more place vertically and therefor pushing away the content 
  on the line below. This could be fixed with setting a fixed maximum height on the cards, but at the expense of either cutting off the content or using a scroll bar
  on the cards with longer content. To solve this, another div was wrapped around the card div, and a fixed height was set to this wrapper div from medium devices and up. 
  This is what the grid looks like after this fix:

  ![Image of grid after fixing issue](./readme-assets/readme-images/grid-fixed.png)

* The contact form had an issue where after submission and clearing of form fields, when the page reloaded the form labels where overlapping the input fields. The form looked
  like this efter reload:

  ![Image of contact form with labels overlapping input fields](./readme-assets/readme-images/contact-issue.png)

  The overlapping issue comes from the fact that the form labels in Materialize are actually loaded overlapping the input fields and are pushed up above the fields when there is 
  a placeholder in the field or when the field is clicked by the user. Since the contact form has placeholders the labels load above input fields on the contact form in all instances, 
  but when the form is reloaded after submission the labels overlap the input fields and the placeholders in them.

  According the Materialize documentation [found here](https://materializecss.com/text-inputs.html), issues with labels overlapping input fields can be solved by adding the class
  "active" to form labels, or by adding M.updateTextFields(); to script to update the text fields when the page is reloaded. These solutions did not solve the issue in this case, 
  and when searching for an answer to why I found this [post on Stack Overflow](https://stackoverflow.com/questions/40329956/labels-overlapping-prefilled-content-in-materialize). 
  This explained that Materialize applies the "active" class through javascript and not directly through CSS, which perhaps could explain why the "active" class added in the HTML
  was not loaded after the clearing and reloading of form. This led to the conclusion that the issue could be solved by "manually" adding the class "active" to labels in the
  javascript code instead. This solution worked and the contact form then reloaded with form labels in the right place after submitting and clearing form:

  ![Image of contact form with labels in the right place](./readme-assets/readme-images/contact-solved.png) 