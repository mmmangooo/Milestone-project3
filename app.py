import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
if os.path.exists("env.py"):
    import env


app = Flask(__name__)


app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")


mongo = PyMongo(app)


@app.route("/")
@app.route("/get_books")
def get_books():
    books = mongo.db.books.find()
    return render_template("index.html", books=books)


@app.route("/add_book", methods=["GET", "POST"])
def add_book():
    if request.method == "POST":
        book = {
            "title": request.form.get("title"),
            "author": request.form.get("author"),
            "image": request.form.get("image"),
            "description": request.form.get("description"),
            "rating": request.form.get("rating")
        }
        mongo.db.books.insert_one(book)
        flash("You successfully added a book!")
        return redirect(url_for("get_books"))
    books = mongo.db.books.find().sort("title", 1)
    return render_template("add_book.html", books=books)


@app.route("/edit_book")
def edit_book():
    return render_template("edit_book.html")


@app.route("/delete_book")
def delete_book():
    return render_template("delete_book.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
