const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (to, subject, text) => {
    const msg = {
        to,
        cc: 'innovaclicceo@gmail.com',
        from: 'lbaena@ies-eugeni.cat', // Canvia-ho pel teu correu electrònic verificat a SendGrid
        subject,
        text,
    };

    try {
        await sgMail.send(msg);
        console.log('Email sent');
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body);
        }
    }
};

module.exports = sendEmail;