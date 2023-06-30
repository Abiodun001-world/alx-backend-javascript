# 0x01-ES6_promise

This directory contains the exercises and tasks related to working with Promises in JavaScript. By completing this project, you will gain a solid understanding of Promises, their methods, and how to handle asynchronous operations using Promises.

## Resources

Before starting this project, it is recommended to read or watch the following resources:

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://web.dev/promises/)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

## Learning Objectives

By the end of this project, you are expected to be able to explain the following concepts without the help of Google:

- Promises (how, why, and what)
- How to use the `then`, `resolve`, and `catch` methods
- How to use every method of the Promise object
- Throw / Try
- The `await` operator
- How to use an async function

## Requirements

- All the files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All the files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- The code should use the `.js` extension
- The code will be tested using Jest and the command `npm run test`
- The code will be verified against lint using ESLint
- All of your functions must be exported

## Setup

1. Install NodeJS 12.11.x:
   - In your home directory, run the following commands:
     ```
     curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
     sudo bash nodesource_setup.sh
     sudo apt install nodejs -y
     ```
   - Verify the installation:
     ```
     $ nodejs -v
     v12.11.1
     $ npm -v
     6.11.3
     ```

2. Install Jest, Babel, and ESLint:
   - In your project directory, run the following commands:
     ```
     npm install --save-dev jest
     npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
     npm install --save-dev eslint
     ```

3. Files:
   - `package.json` - Contains project configuration and dependencies.
   - `babel.config.js` - Babel configuration file for Jest.
   - `utils.js` - Utility file to be used for tasks requiring `uploadPhoto` and `createUser` functions.
   - `.eslintrc.js` - ESLint configuration file.

Don't forget to run `npm install` when you have the `package.json` file.

## Response Data Format

The `uploadPhoto` function returns a response with the following format:

```javascript
{
  status: 200,
  body: 'photo-profile-1',
}
```

The `createUser` function returns a response with the following format:

```javascript
{
  firstName: 'Guillaume',
  lastName: '

Salva',
}
```

Feel free to explore the exercises and tasks in this directory to enhance your understanding of Promises and asynchronous JavaScript. Happy coding!