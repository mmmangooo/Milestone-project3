import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from datetime import datetime
from bson.objectid import ObjectId
if os.path.exists("env.py"):
    import env

# Creating an instance of Flask app
app = Flask(__name__)

# Setting config vars and getting their values from env.py
app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")


mongo = PyMongo(app)


@app.route("/")
@app.route("/get_books")
def get_books():
    books = mongo.db.books.find()
    datetime_now = datetime.now()
    # Querying the db for the 3 most recently added books
    # Credit for this code: https://api.mongodb.com/python/2.0/tutorial.html
    new_books = mongo.db.books.find(
        {"date_of_adding": {"$lt": datetime_now}}, limit=3).sort("title")
    return render_template("index.html", books=books, new_books=new_books)


@app.route("/add_book", methods=["GET", "POST"])
def add_book():
    # Adds instance of book to db:
    if request.method == "POST":
        # Credit for code passing the date of adding a book to the db:
        # https://kb.objectrocket.com/mongo-db/how-to-insert-a-document-into-a-mongodb-collection-using-python-367
        # #add+the+date+and+time+in+python+when+you+insert+mongodb+documents
        book = {
            "title": request.form.get("title"),
            "author": request.form.get("author"),
            "description": request.form.get("description"),
            "rating": request.form.get("rating"),
            "date_of_adding": datetime.now()
        }
        mongo.db.books.insert_one(book)
        flash("You successfully added a book!")
        return redirect(url_for("get_books"))
    books = mongo.db.books.find().sort("title", 1)
    return render_template("add_book.html", books=books)


@app.route("/edit_book/<book_id>", methods=["GET", "POST"])
def edit_book(book_id):
    if request.method == "POST":
        submit = {
            "title": request.form.get("title"),
            "author": request.form.get("author"),
            "description": request.form.get("description"),
            "rating": request.form.get("rating")
        }
        mongo.db.books.update({"_id": ObjectId(book_id)}, submit)
        flash("You have successfully edited book information!")
    book = mongo.db.books.find_one({"_id": ObjectId(book_id)})
    return render_template("index.html", book=book)


@app.route("/delete_book/<book_id>")
def delete_book(book_id):
    mongo.db.books.remove({"_id": ObjectId(book_id)})
    flash("Book successfully deleted")
    return render_template("index.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
