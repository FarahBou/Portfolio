var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');

var transport = {
    host: 'ses-smtp-user.20200802-182900', // Don’t forget to replace with the SMTP host of your provider
    port: 465,
    secure: true,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: creds.USER,  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })

  	transporter.sendMail({
    	from: "<your email address>",
    	to: email,
    	subject: "Votre message a bien été envoyé",
    	text: `Merci pour votre message! Mes Oompas Loompas me l'ont bien transféré, vous recevrez une réponse de ma part le plus rapidement possible.\n\nForm details\nName: ${name}\n Email: ${email}\n Message: ${message}`
  	}, function(error, info){
    	if(error) {
      	console.log(error);
    	} else{
      	console.log('Message sent: ' + info.response);
    	}
  	});
    }
  })
})

const app = express()
app.use(cors({origin: true, credentials: true}))
app.use(express.json())
app.use('/', router)
app.listen(3000, () => console.log("listening on 3000"))
