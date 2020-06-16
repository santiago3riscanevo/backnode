const { Router } = require('express');
const router = Router(); // objeto para definir rutas
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/send-email',  async (req, res)=>{
    const {name, mail} = req.body;
    contentHTML = `
    <h1> user infirmation</h1>
    <ul>
        <li>nombre: ${name}</li>
        <li>email: ${mail}</li>
    </ul>
    `;
    
    //a donde los vamos a enviar
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    });

    let mailOptions ={
        from:'santiago10riscanevo@gmail.com',
        to:'santiago3tovar@gmail.com',
        subject:'test',
        html: contentHTML
    }

    await transporter.sendMail(mailOptions, function(err,data){
        if(err){
            console.log('error', err);
        }else{
            console.log('mail send');
        }
    })
    
    res.send('recived')
});

module.exports = router;