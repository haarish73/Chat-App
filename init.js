const mongoose = require('mongoose');
const chat = require('./models/chat.js');
main().then(() => {
    console.log("MongoDB connected");
}).
catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}
let allChats = [
    {
        from: 'Alice',
        to: 'Bob',
        message: 'Hello Bob!',
        created_at: new Date(),
    },
    {
        from: 'Bob',
        to: 'Alice',
        message: 'Hi Alice! How are you?',
        created_at: new Date(),
    },
    {
        from: 'Charlie',
        to: 'David',
        message: 'Hey David, long time no see!',
        created_at: new Date(),
    },
    {
        from: 'David',
        to: 'Charlie',
        message: 'Yeah Charlie, it’s been a while. How have you been?',
        created_at: new Date(),
    },
    {
        from: 'Eve',
        to: 'Frank',
        message: 'Frank, did you complete the project?',
        created_at: new Date(),
    },
];

chat.insertMany(allChats);


