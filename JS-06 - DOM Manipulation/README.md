<img align="right" width="150" height="150" src="https://media-exp1.licdn.com/dms/image/C4E0BAQF7BYCCZt5epw/company-logo_200_200/0?e=2159024400&v=beta&t=qUAFP9bUgBEEXGVQYpUXW1J_OiP8e0r4rFBpqp8OrxA">

# JS-06 DOM Manipulation

 <br/>
 <br/>

### Exercise #1

Modify the style of the paragraph text through javascript code.
Sample HTML file:
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8 />
    <title>JS DOM paragraph style</title>
  </head> 
  
  <body>
    <p id="text">JavaScript Exercises #1</p> 
    <div>
      <button id="jsstyle" onclick="js_style()">Style</button>
    </div>
  </body>
</html>
```
By clicking on the button the font, font size, and color of the paragraph text should be changed.

### Exercise #2

Write a JavaScript function to get the values of First and Last name of the following form.
Print out the names to the console.

Sample HTML file :
```
<!DOCTYPE html>
  <html>
    <head>
      <meta charset=utf-8 />
      <title>Return first and last name from a form - w3resource</title>
    </head>
    
    <body>
      <form id="form1" onsubmit="getFormvalue()">
          First name: <input type="text" name="fname" value="David"><br>
          Last name: <input type="text" name="lname" value="Beckham"><br>
        <input type="submit" value="Submit">
      </form>
    </body>
</html>
```

### Exercise #3

Write a function and call it when clicking a button on a page to show an alert with:

1. The number of links on the page
2. The first link in the page
3. The last link in the page

### Exercise #4

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div class="header">
    </div>
    <section id="container">
        <ul>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ul>
        <ol>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ol>
    </section>
    <div class="footer">
    </div>
</body>
</html>
```

Write the code necessary to do the following:

1. Select the section with an id of container without using querySelector.
2. Select the section with an id of container using querySelector.
3. Select all of the list items with a class of "second".
4. Select a list item with a class of third, but only the list item inside of the ol tag.
5. Give the section with an id of container the text "Hello!".
6. Add the class main to the div with a class of footer.
7. Remove the class main on the div with a class of footer.
8. Create a new li element.
9. Give the li the text "four".
10. Append the li to the ul element.

## Challenge Yourself

### Add on to Exercise #4 
1. Loop over all of the lis inside the ol tag and give them a background color of "green".
2. Remove the div with a class of footer.
