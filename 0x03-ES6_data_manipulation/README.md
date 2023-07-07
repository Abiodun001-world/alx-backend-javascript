# 0x03. ES6 Data Manipulation

This project is part of the curriculum at ALX Africa, following the Holberton School curriculum. It focuses on ES6 data manipulation using various concepts and data structures such as arrays, typed arrays, sets, maps, and weak links. The goal of this project is to enhance your understanding and proficiency in using map, filter, and reduce on arrays, working with typed arrays, and utilizing the Set, Map, and WeakMap data structures.

## Resources
To successfully complete this project, you may find the following resources helpful:

- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

## Learning Objectives
By the end of this project, you should be able to explain, without the help of Google, the following concepts:

- How to use map, filter, and reduce on arrays
- Typed arrays and their applications
- The Set, Map, and WeakMap data structures and their characteristics

## Requirements
To work on this project, make sure you have the following:

- Ubuntu 18.04 LTS
- NodeJS 12.11.x
- Preferred editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A `README.md` file at the root of the project folder is mandatory
- Use the `.js` extension for your code files
- Testing will be done using Jest with the command `npm run test`
- Your code will be verified against the ESLint linter
- Ensure that your code passes all tests and linting by running `npm run full-test`
- All functions must be exported

## Setup
To set up your environment for this project, follow these steps:

1. Install NodeJS 12.11.x:
   - Run the following commands in your home directory:
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

2. Install Jest, Babel, and ESLint in your project directory:
   - Run the following commands:
     ```
     npm install --save-dev jest
     npm install --save-dev babel-jest @babel/core @babel/preset-env
     npm install --save-dev eslint
     ```

3. Configuration files:
   - Make sure to have the following configuration files in your project directory:
     - `package.json`
     - `babel.config.js`
     - `.eslintrc.js`
   - If these files are missing, you can find their contents [here](#configuration-files).

4. Install dependencies:
   - Run `npm install` to install all the necessary packages specified in `package.json`.

**Note:** Remember to run `npm install` whenever you update the `package.json` file.

## Running Tests
To run the tests for this project, use the following command:
```
npm run test
```

## Linting
To run ESLint and check the linting of your code, use the following command:
```
npm run lint
```

## Project Structure
Here is a suggested structure for your project files:
```
.
├── package.json
├── babel.config.js
├── .eslintrc.js
├── README.md
├── src
│   ├── 0-main.js
│   ├── 1-main.js
│   └── ...
└── test
    ├── 0-main.js
    ├── 1-main.js
    └── ...
```