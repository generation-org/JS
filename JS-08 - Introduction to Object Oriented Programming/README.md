# JS-08 Introduction to Object Oriented Programming

### Exercise #1: A Person Object

Create a class called Person which accepts the name of a person as a string, and his/her/their age as a number.

The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". 

So for example, if Manny is 19 years old then the function describe of his object will return "Manny, 19 years old".

----

### Exercise #2: The Reading List
An object-oriented book-list!

#### Part 1 Book
Create another class called `Book`
Each *Book* should have several properties:

* Title
* Genre
* Author
* Read (true or false)
* Read date, can be blank, otherwise needs to be a JS Date() object

#### Part 2 Booklist
Create a class `BookList`

*BookLists* should have the following properties:

* Number of books marked as read
* Number of books marked not read yet
* A reference to the next book to read (book object)
* A reference to the current book being read (book object)
* A reference to the last book read (book object)
* An array of all the Books

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

#### Part 3 SOLID Principles
Review the `SOLID` principles and see how your code can be refactored to adhere those principles.


```
__Single Responsibility Principle (SRP)__
A class should have a single responsibility, job or purpose

__Open/Closed Principle__
Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification. 

Why is it useful? 
Agile – By being open to adding new features, the development process is agile. Much time won’t be spent on refactoring the code to add new features.
Reliable – This principle ensures reliability, that adding new features will not introduce new bugs, since the code is closed to modification.

__Liskov’s Substitution Principle (LSP)__
“Derived or child classes must be substitutable for their base or parent classes“.
This principle ensures that any class that is the child of a parent class should be usable in place of its parent without any unexpected behavior.

__Interface Segregation Principle (ISP)__
“do not force any client to implement an interface which is irrelevant to them“.
You should prefer many client interfaces rather than one general interface and each interface should have a specific responsibility.

__Dependency Inversion Principle (DIP)__
High-level modules/classes should not depend on low-level modules/classes. Both should depend upon abstractions.
Abstractions should not depend upon details. Details should depend upon abstractions.
```

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
