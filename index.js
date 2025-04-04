const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');
const methodOverride = require('method-override');
const port = 1234;

app.set("views",path.join(__dirname, "views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'));

app.use(express.urlencoded({extended:true}));
main().then(() => {
    console.log("MongoDB connected");
}).
catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}



app.get("/chats", async (req,res) => {
    let chats = await Chat.find();
    console.log(chats);
    // res.send("working");
    res.render("index.ejs",{chats});
})

app.get("/chats/new", async(req,res) => {
    res.render("new.ejs");
})

app.post("/chats", async (req,res) => {
    let {from, to, message} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        created_at: new Date()
    });
    await newChat.save();
    console.log(newChat);
    res.redirect("/chats"); // optional: redirect to chats page
});

// edit 

app.get("/chats/:id/edit", async (req, res) => {
    try {
        let { id } = req.params;
        let chat = await Chat.findById(id); 
        if (!chat) {
            return res.status(404).send("Chat not found");
        }
        console.log(chat);  // ✅ Debugging Step: Check if chat data exists
        res.render("edit.ejs", { chat }); // ✅ Correctly pass the chat object
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


// update
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { newMsg } = req.body;
    
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        { message: newMsg },
        { runValidators: true, new: true }
    );

    console.log(updatedChat); // ✅ Debugging Step: Check if update worked
    res.redirect("/chats");
});

// delete
app.delete("/chats/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        if (!deletedChat) {
            return res.status(404).send("Chat not found");
        }
        console.log("Deleted Chat:", deletedChat);
        res.redirect("/chats");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});