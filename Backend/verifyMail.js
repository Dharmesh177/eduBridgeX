const nodeMailer = require('nodemailer')

const verify = async (link,email) => {
    

    const transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: "yashcode2003@gmail.com",
            pass:"mkrwzwitgiiuisgs"
        }
    })
    const mailContent = await transporter.sendMail({
        from: 'yashcode2003@gmail.com',
        to: email,
        subject: "Verify Email",
        html:`Hello Sir!! <br/> Kindly proceed with verification (link valid only for 10 mins) <br/> <a href=${link}>Click here to Verify</a>` 
        
    }, (err, info) => {
        if (err)
        {
            console.log("err : ",err);
        }
        else console.log('Email sent: ' + info.response);
    })
    
    

}
module.exports=verify
