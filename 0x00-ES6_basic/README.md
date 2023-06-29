# ALX Backend JavaScript - 0x00-ES6_basic

This repository contains the code for the ALX Backend JavaScript project, specifically the module 0x00-ES6_basic. This module focuses on the basics of ES6 (ECMAScript 2015) and aims to enhance your understanding of modern JavaScript concepts and features.

## Learning Objectives

By completing this module, you will be able to:

- Understand the fundamentals of ES6 and its importance in modern JavaScript development.
- Demonstrate knowledge of new features introduced in ES6.
- Differentiate between constants and variables and understand their usage.
- Implement block-scoped variables effectively.
- Utilize arrow functions and understand function parameters defaulting to them.
- Leverage rest and spread function parameters for efficient code implementation.
- Apply string templating techniques in ES6.
- Create objects and utilize their properties using ES6 syntax.
- Understand the concept of iterators and utilize for-of loops effectively.

## Requirements

### General

- All files should be written in JavaScript (`.js` extension).
- The code should be executed using NodeJS 12.11.x on Ubuntu 18.04 LTS.
- The recommended editors for this project are: vi, vim, emacs, and Visual Studio Code.
- Each file should end with a new line.
- A `README.md` file must be present at the root of the project folder.

### Dependencies

To set up the project, follow these steps:

1. Install NodeJS 12.11.x by executing the following commands in your home directory:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

2. Confirm that NodeJS and npm (Node Package Manager) are successfully installed:

```bash
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

3. Install the required dependencies by running the following commands in your project directory:

```bash
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev eslint
```

### Configuration Files

The project includes the following configuration files:

- `package.json`: Contains the project dependencies and scripts.
- `babel.config.js`: Configuration file for Babel.
- `.eslintrc.js`: Configuration file for ESLint.

Ensure that you run `npm install` from the terminal in your project folder to install all the necessary project dependencies.

## Resources

For this module, it is recommended to read or watch the following resources:

- ECMAScript 6 - ECMAScript 2015
- Statements and declarations
- Arrow functions
- Default parameters
- Rest parameter
- Javascript ES6 — Iterables and Iterators

## Author

This project is part of the ALX curriculum and is being used at ALX Africa. The author of this module is Johann Kerbrat, Engineering Manager at Uber Works.

If you have any questions or need further assistance, feel free to reach out. Happy coding!
