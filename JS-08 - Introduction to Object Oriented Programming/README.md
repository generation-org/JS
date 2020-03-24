# JS-08 Introduction to Object Oriented Programming

### Exercise #1: A Person Object

Create a class called Person which accepts the name of a person as a string, and his/her/their age as a number.

The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". 

So for example, if Manny is 19 years old then the function describe of his object will return "Manny, 19 years old".

----

### Exercise #2: The Reading List
An object-oriented book-list!

Create a class `BookList`

Create another class called `Book`

*BookLists* should have the following properties:

* Number of books marked as read
* Number of books marked not read yet
* A reference to the next book to read (book object)
* A reference to the current book being read (book object)
* A reference to the last book read (book object)
* An array of all the Books

Each *Book* should have several properties:

* Title
* Genre
* Author
* Read (true or false)
* Read date, can be blank, otherwise needs to be a JS Date() object

Every *Booklist* should have a few methods:

* .add(book)
  * should add a book to the books list.
* .finishCurrentBook()
  * should mark the book that is currently being read as "read"
  * Give it a read date of new Date(Date.now())
  * Change the last book read to be the book that just got finished
  * Change the current book to be the next book to be read
  * Change the next book to be read property to be the first unread book you find in the list of books

*Booklists* and *Books* might need more methods than that. Try to think of more that might be useful.

----
### Exercise #3 JSON Object Practice

Write a function called “convertObjectToList” which converts an object into an array of arrays.
Input (Object):
var object = {name: “Lucia”, age: 35, role: “Scientist”};
Output:
[[“name”, “Lucia”], [“age”, 35], [“role”, “Scientist”]]

Sample code:
```
var obj = {name: “Lucia”, age: 35, role: “Scientist”};
function convertListToObject(obj) {
 // your code here
}
```
