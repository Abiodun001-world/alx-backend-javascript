// full_server/controllers/AppController.js

class AppController {
  static getHomepage(request, response) {
    response.send(200, 'Hello Holberton School!');
  }
}

export default AppController;
