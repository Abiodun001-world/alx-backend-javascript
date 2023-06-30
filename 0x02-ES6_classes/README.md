# 0x02-ES6_classes

This repository contains the solutions for the ES6 Classes exercises in the ALX Backend JavaScript curriculum, following the Holberton School curriculum.

## Description

In this repository, you will find a set of exercises related to ES6 Classes. Each exercise focuses on a specific aspect of Classes and provides a problem statement along with a solution file.

The purpose of these exercises is to help you understand and practice working with Classes in JavaScript. By completing these exercises, you will gain hands-on experience with defining classes, adding methods, using static methods, extending classes, and exploring metaprogramming concepts with symbols.

## Resources

Before working on this project, you may find the following resources helpful:

- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Metaprogramming](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies)

## Learning Objectives

Upon completing this project, you should be able to explain the following concepts to anyone, without the help of Google:

- How to define a Class
- How to add methods to a class
- Why and how to add a static method to a class
- How to extend a class from another
- Metaprogramming and symbols

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project by running `npm run full-test`

## Setup

To set up the project, follow these steps:

1. Install NodeJS 12.11.x in your system (Ubuntu 18.04 LTS) by running the following commands:

   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```

   Confirm that NodeJS and npm are installed successfully by running the following commands:

   ```bash
   nodejs -v
   npm -v
   ```

   The output should display the versions of NodeJS and npm installed.

2. Install Jest, Babel, and ESLint in your project directory by running the following commands:

   ```bash
   npm install --save-dev jest
   npm install --save-dev babel-jest @babel/core @babel/preset-env
   npm install --save-dev eslint
   ```

   This will install the necessary dependencies for testing with Jest, transpiling with Babel, and linting with ESLint.

3. Configure the following files in your project directory:

   - `package.json`: Configure the project dependencies and scripts. An example configuration file is provided in this repository.
   - `babel.config.js`: Configure Babel presets for transpiling ES6 code. An example configuration file is provided in this repository.
   - `.eslintrc.js`: Configure ESLint rules for linting your code. An example configuration file is provided in this repository.

   Make sure to run `npm install` after setting up the configuration files to install the required dependencies.

## Contribution

Contributions to this repository are welcome. If you have any suggestions, improvements, or additional exercises related to ES6 Classes, feel free to

 submit a pull request. Please ensure that your code adheres to the established coding style and passes any existing tests.

## License

This repository is licensed under the MIT license. See the [LICENSE](LICENSE) file for more information.

---

Happy coding!