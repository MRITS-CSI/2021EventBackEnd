const nodemailer = require('nodemailer')
const fs = require('fs')
const path = require('path')

exports.sendMail = async (email, username, password, teamNumber) => {
    try {
        let flyer = fs.readFileSync(path.join(__dirname, 'flyer.html'), 'utf-8')
        flyer = flyer.replace('{USERNAME}', username).replace('{PASSWORD}', password).replace('{TEAM_NUMBER}', teamNumber)
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            //  secure: false, // true for 465, false for other ports
            auth: {
                user: 'mritscsi@gmail.com', // generated ethereal user
                pass: 'csimem2016-17', // generated ethereal password
            },
        });

        // send mail with defined transport object
        await transporter.sendMail({
            from: '"CSI MRITS" <mritscsi@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Registration Confirmation", // Subject line
            // text: "Hello world?", // plain text body
            html: flyer, // html body
        });

    } catch (err) {
        console.log(err.message)
    }
}
// init('arun.arram13@gmail.com','CSI-01','Yelp123','01')

