var express = require('express');
var router = express.Router();
var cors = require('cors');
let aws = require('aws-sdk');
aws.config.loadFromPath('./config.json');

var ses = new aws.SES();

router.post('/send', (req, res, next) => {
  var name = req.body.name.toString()
  var email = req.body.email.toString()
  var message = req.body.message.toString()
  var content = 'name:' + name + '\n email:' + email + '\n message:' + message

  var params = {
    Source: 'f.bouzbib@gmail.com',
    Destination: {
     ToAddresses: [
      'f.bouzbib@gmail.com',
     ]
    }, 
    Message: {
     Body: {
      Text: {
       Charset: "UTF-8", 
       Data: content.toString()
      }
     }, 
     Subject: {
      Charset: "UTF-8", 
      Data: 'New Message from Contact Form'
     }
    }, 
   };

  var paramsR = {
    Source: 'f.bouzbib@gmail.com',
    Destination: {
     ToAddresses: [
      email,
     ]
    }, 
    Message: {
     Body: {
      Text: {
       Charset: "UTF-8", 
       Data: 'Merci pour votre message!\nMes Oompas Loompas me l\'ont bien transféré, vous recevrez une réponse de ma part le plus rapidement possible.\n\nDétails du formulaire\nNom:' + name + '\nEmail:' + email + '\n Message:' + message
      }
     }, 
     Subject: {
      Charset: "UTF-8", 
      Data: 'Votre message a bien été envoyé',
     }
    }, 
   }

  ses.sendEmail(params, function (err) {
    if (err) {
      res.json({
        status: 'fail'
      })
      console.log(err, err.stack); // an error occurred
    }
    else {
      res.json({
       status: 'success'
      })
    };
  });
})

const app = express()
app.use(cors({origin: true, credentials: true}))
app.use(express.json())
app.use('/', router)
app.listen(3000, () => console.log("listening on 3000"))
