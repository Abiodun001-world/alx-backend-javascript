# ALX Backend JavaScript

This repository contains the code for the ALX Backend JavaScript project. In this project, we will be exploring ES6 (ECMAScript 2015) and learning about its new features and concepts. The project is designed to enhance your understanding of modern JavaScript and software linting practices.

## Concepts

In this project, we will focus on the following concepts:

- Modern JavaScript
- Software Linter

## Learning Objectives

By the end of this project, you should be able to explain the following topics without relying on external resources:

- What is ES6 (ECMAScript 2015)
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and default function parameters
- Rest and spread function parameters
- String templating in ES6
- Object creation and properties in ES6
- Iterators and for-of loops

## Requirements

### General

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A README.md file, located at the root of the project folder, is mandatory
- Your code should use the .js extension
- Your code will be tested using the Jest Testing Framework
- Your code will be analyzed using the ESLint linter with specific rules provided

### Setup

To set up your development environment, please follow these steps:

1. Install NodeJS 12.11.x by running the following commands in your home directory:

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

3. Install the required dependencies for the project by running the following commands in your project directory:

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

Make sure to run `npm install` from the terminal in your project folder to install all the necessary project dependencies.

## Author

This project is authored by Johann Kerbrat, Engineering Manager at Uber Works.

If you have any questions or need further assistance, feel free to reach out to me. Happy coding!
