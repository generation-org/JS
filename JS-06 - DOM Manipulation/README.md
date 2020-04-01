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
By clicking on the button, the font, font size, and color of the paragraph text should change.

Answers:
```

<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8 />
    <title>JS DOM paragraph style</title>
  </head> 
  
  <body>
    <p id ='text'>JavaScript Exercises #1</p> 
    <div>
      <button id="jsstyle" onclick="js_style()">Style</button>
    </div>
  </body>
  <script>
  	function js_style() {
    	let textElement = document.getElementById("text");
      text.style.font = '20px "Helvetica Neue",Helvetica,Arial,sans-serif';
      text.style.color = "#500AAA";
    }
  
  </script>
</html>

``` 


### Exercise #2

Write a JavaScript function to get the values of First and Last name from the following form.

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


Answer:


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
    <script>
        function getFormValue() {
            let first = document.getElementsByName("fname");
            let last = document.getElementsByName("lname");
            console.log(first);
            console.log(last);
        }
    </script>
</html>

```

### Exercise #3

Write a function and call it when clicking a button to show an alert with:

1. The number of links on the page
2. The first link in the page
3. The last link in the page


Answer:

```
function getLinks() {
            let links = document.getElementsByTagName("link");
            alert(links.length);
            alert(links[0]);
            alert(links[links.length - 1]);
}

```

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

Write the code that will do the following:

1. Select the section with a container id without using querySelector.
2. Select the section with a container id using querySelector.
3. Select all the items list with a class of "second".
4. Select a list item with a class of third, but only the list item inside of the ol tag.
5. Give the text "Hello!" to the section with a container id.
6. Add the main class to the div with a footer class.
7. Remove the main class on the div with a footer class.
8. Create a new li element.
9. Give the li the text "four".
10. Append the li to the ul element.


Answers:

1. document.getElementById("container");
2. document.querySelector("#container");
3. document.getElementsByClassName("second");
4. document.querySelector("ol .third")
5. document.getElementById("container".innerHTML = "Hello!";
6. document.querySelector("div.footer").classList.add("main");
7. document.querySelector("div.footer").classList.remove("main");
8. let newLi = document.createElement("li");
9. newLi.innerHTML = "four";
10. document.getElementsByTagName("ul")[0].appendChild(newLi)

## Additional Exercises

### Add on to Exercise #4 
1. Loop over all the li inside the ol tag and give them a background "green" color.
2. Remove the div with a footer class.
