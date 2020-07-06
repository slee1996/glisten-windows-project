const {TWILIO_AUTH_TOKEN, TWILIO_ACCOUNT_SID} = process.env
const accountSid = TWILIO_ACCOUNT_SID;
const authToken = TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

module.exports = {
    send: async(req, res) => { //currently unused, will switch over to this controller once I've figured out how to format the front end the way I'd like it
        res.header('Content-Type', 'application/json');
        const {messageBody} = req.body.messageBody
        client.messages
            .create({
                from: process.env.TWILIO_PHONE_NUMBER,
                to: process.env.COMPANY_PHONE_NUMBER,
                body: messageBody
            })
            .then(() => {
                res.send(JSON.stringify({ success: true }));
            })
            .catch(err => {
                console.log(err);
                res.send(JSON.stringify({ success: false }));
            }
        );
    },

    text: async(req, res) => { //sends text to company number
        const accountSid = TWILIO_ACCOUNT_SID;
        const authToken = TWILIO_AUTH_TOKEN;
        const client = require('twilio')(accountSid, authToken);

        const {messageBody} = req.body
    
        client.messages
            .create({
                body: messageBody,
                from: process.env.TWILIO_PHONE_NUMBER,
                to: process.env.COMPANY_PHONE_NUMBER
            })
            .then(() => {
                res.send(JSON.stringify({ success: true }));
            })
            .catch(err => {
                console.log(err);
                res.send(JSON.stringify({ success: false }));
            }
        )
    }
}