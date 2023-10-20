import express from 'express';

//create app using constructor of express
const app = express();
app.use(express.json())
// app.use(cors())

let chats = []

// API
function send(req, res) {
    let msg = req.body.msg;
    let sender = req.body.sender;
    let receiver = req.body.receiver;
    chats.push({
        "msg": msg, 
        "sender": sender,
        "receiver": receiver,
        "time": new Date(),
        "isSeen": false
    })
    res.send("Sent")
}

function getAllMessages(req, res) {
    let receiver = req.body.receiver;
    let relevantChats = chats.filter(chat => chat.receiver === receiver)
    // TC: O(N)
    res.send(relevantChats);
}

// GET, POST
app.post('/send', send)

app.get('/getAllMessages', getAllMessages)

// port
app.listen(3007)