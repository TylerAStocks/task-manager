const mailgun = require('mailgun-js');
const SENDING_KEY = process.env.SENDING_KEY
const DOMAIN = process.env.DOMAIN
const mg = mailgun({apiKey: SENDING_KEY, domain: DOMAIN});


const sendWelcomeEmail = (email, name) => {
    mg.messages().send({
        from: `Task Manager App <postmaster@${DOMAIN}>`,
        to: email,
        subject: `Welcome ${name}`,
        text: `Welcome ${name} to the Task Manager App created by Tyler Stocks!`
    }, function (error, body) {
        console.log(body)
    })
}

const sendCancelationEmail = (email, name) => {
    mg.messages.send({
        from: `Task Manager App <postmaster@${DOMAIN}>`,
        to: email,
        subject: `Goodbye ${name}`,
        text: `Sorry to see you go ${name}, we'll delete all your account data as well`
    }, function(error, body) {
        console.log(body)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}