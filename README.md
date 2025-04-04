# Chat-App
WhatsApp Chat Clone

A simple chat application built using Node.js, Express.js, and MongoDB that allows users to send, edit, and delete messages.

Project Structure

WhatsAppChatClone/
│-- node_modules/
│-- public/
│   │-- new.css
│-- views/
│   │-- index.ejs
│   │-- new.ejs
│   │-- edit.ejs
│-- models/
│   │-- chat.js
│-- .gitignore
│-- package.json
│-- index.js
│-- README.md

Installation

Clone the repository:

git clone https://github.com/your-username/whatsapp-chat-clone.git

Navigate to the project directory:

cd whatsapp-chat-clone

Install dependencies:

npm install

Start the server:

node index.js

Or, if using nodemon:

npx nodemon index.js

API Routes

1. View all chats

GET /chats

Renders the list of all chats.

2. Create a new chat

GET /chats/new

Renders the form to create a new chat.

POST /chats

Adds a new chat to the database.

3. Edit a chat

GET /chats/:id/edit

Renders the edit form for a specific chat.

PATCH /chats/:id

Updates a specific chat in the database.

4. Delete a chat

DELETE /chats/:id

Removes a specific chat from the database.

Technologies Used

Node.js – Backend framework

Express.js – Web framework

MongoDB – Database

Mongoose – ODM for MongoDB

EJS – Templating engine

Method-Override – Enables PUT and DELETE methods in HTML forms

Author

Created by Abdul Harish Khan 🚀
