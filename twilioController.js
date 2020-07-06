const {TWILIO_AUTH_TOKEN, TWILIO_ACCOUNT_SID} = process.env
const accountSid = TWILIO_ACCOUNT_SID;
const authToken = TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

module.exports = {
    send: async(req, res) => { //currently unused, will switch over to this controller once I've figured out how to format the front end the way I'd like it
        res.header('Content-Type', 'application/json');
        
        client.messages
            .create({
                from: process.env.TWILIO_PHONE_NUMBER,
                to: process.env.COMPANY_PHONE_NUMBER,
                body: req.body.body
            })
            .then(() => {
                res.send(JSON.stringify({ success: true }));
            })
            .catch(err => {
                console.log(err);
                res.send(JSON.stringify({ success: false, err }));
            }
        );
    },

    test: async(req, res) => { //currently unused, will switch over to this controller once I've figured out how to format the front end the way I'd like it
        res.header('Content-Type', 'application/json');
        
        client.messages
            .create({
                from: process.env.TWILIO_PHONE_NUMBER,
                to: process.env.COMPANY_PHONE_NUMBER,
                body: "this is a test"
            })
            .then(() => {
                res.send(JSON.stringify({ success: true }));
            })
            .catch(err => {
                console.log(err);
                res.send(JSON.stringify({ success: false, err }));
            }
        );
    }
}