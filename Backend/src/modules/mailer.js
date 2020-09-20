const path = require('path');
const mailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

require("dotenv-safe").config();

const transporter = mailer.createTransport({
  host: process.env.MAILERHOST,
  port: process.env.MAILERPORT,
  auth:{
    user: process.env.MAILERUSER,
    pass: process.env.MAILERPASS, 
  }
});

transporter.use('compile', hbs({
  viewEngine: {
    defaultLayout: undefined,
    partialsDir: path.resolve('./src/resources/mail/')
  },
  viewPath: path.resolve('./src/resources/mail'),
  extName: '.html'
}))

module.exports = transporter;