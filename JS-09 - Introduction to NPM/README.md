<img align="right" width="150" height="150" src="https://media-exp1.licdn.com/dms/image/C4E0BAQF7BYCCZt5epw/company-logo_200_200/0?e=2159024400&v=beta&t=qUAFP9bUgBEEXGVQYpUXW1J_OiP8e0r4rFBpqp8OrxA">

# JS - 09 Introduction to NPM

 <br/>
 <br/>

## Using Axios 

Git clone the exercise folder (https://github.com/generation-org/NPM-Practice).

Make sure you have installed NPM properly. You can reference [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if you are having trouble with your installation.

This folder doesn't have NPM initialized. Create an NPM project and fill in as many fields as you can with information to create the package.json.
(Hint use: `npm init`)

To prepare for this exercise, we will need to install json-server.

Run the command:
`npm install -g json-server`

Run the command:
`npm install axios --save`

We will be using JSON Server to create a fake REST API.

Check out the test user data in this folder - `users.json`. 

#### Starting JSON server
The JSON server is started with the json-server, which we have installed globally.

`$ json-server --watch users.json`    
The --watch option is used to specify the data for the server.

Go to http://localhost:3000/users to see all the users.

Open another terminal to the project folder.
Use the curl command to get the user with Id 2. 
```
$ curl localhost:3000/users/2/
  {
    "id": 2,
    "first_name": "Song",
    "last_name": "Gonzalez",
    "email": "sgo@gmail.com"
  }
```

#### Getting all users
Go to `get_users.js` and complete the commented `let res = ...` in order to see all users

Call `node get_users.js` to see all users.

#### Posting a new user
Go to `post_user.js` and complete the commented `let res = ...` in order to post a new user.

To post a new user, call `node post_user.js`.

To add different names for new users, update the `params` field in `post_user.js`.

Call `node get_users.js` to see if your new user was added or reload http://localhost:3000/users.

#### Deleting a user
Go to `delete_user.js` and complete the commented `let res = ...` in order to delete a user.

Call `node delete_user.js` to see if your user was deleted. The console should return a status 200. 
Check your http://localhost:3000/users, to see that user #2 has been deleted.
