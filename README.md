# Menu App with Dynamic Content

This is a simple web application that demonstrates how to use Express.js, EJS templates, jQuery, and Tailwind CSS to create a menu-based app with dynamic content loading.

## Getting Started

To run this app locally, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone 
```

2. Navigate to the project directory: 

```bash
cd dynamic-menu-app 
```

3. Install the required dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

5. Open your web browser and go to http://localhost:3000 to view the app.

## Usage

- Click on "Menu 1" or "Menu 2" in the navigation bar to load dynamic     content without refreshing the entire page.
- The dynamic content is loaded using AJAX requests and displayed in the  "Dynamic Content" section of the page.

## Technologies Used

- Node.js
- Express.js
- EJS templates
- jQuery
- Tailwind CSS

## Folder Structure

- MenuController.js: Defines the routes and controllers for the app.
- views/menu.ejs: EJS template for the menu page and JavaScript code for handling AJAX requests and updating dynamic content.
- server.js: Entry point for the Express.js server.