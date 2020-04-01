
<img align="right" width="150" height="150" src="https://media-exp1.licdn.com/dms/image/C4E0BAQF7BYCCZt5epw/company-logo_200_200/0?e=2159024400&v=beta&t=qUAFP9bUgBEEXGVQYpUXW1J_OiP8e0r4rFBpqp8OrxA">

# JS-07 - Fetch & Web Storage APIs

 <br/>
 <br/>
 
 
 ## Part 1: Using the Fetch API
 
1. Download the *js* folder and the *index.html* files from this repository.
2. Open the *index.html* in the browser see what it does
3. Open the *js* folder and the *index.html* with Visual Studio Code and understand the functionality and the code.
4. Implement the function *fetchColorsList* using the fetch api to download the full colors list from the following endpoint:
  https://reqres.in/api/unknown
5. Connect the *fetchColorsList* with the *addItem* funciton so the colors list is filled and display in the *index.html* page.

 ## Part 1: Using the Web Storage API
1. Modify the *fetchColorsList* function so when the data is downloaded from the API then the colors list are stored using the local storage.
2. Implement the *loadColorsFromStorage* function so the color values are loaded from the local storage
3. Open the developer tools and verify that the data is stored in the Local Storage.
4. Test your application withouth connection to the internet and verify that the colors list is loaded.

## Challenge Yourself
1. Add a clear button that removes all the elements from the list
2. Add a load button that calls the *fetchColorsList* function and loads the colors again.
