const sgMail = require('@sendgrid/mail');
const Mailgen = require('mailgen');

class SendEmailService {
  constructor() {
    this.link = `http://localhost:${process.env.PORT}`;
  }

  createEmailTemplate(email, verifyToken) {
    const mailGenerator = new Mailgen({
      theme: 'default',
      product: {
        name: 'PhoneBook Service',
        link: this.link,
      },
    });

    const emailInfo = {
      body: {
        name: email,
        intro:
          "Welcome to PhoneBokk Service! We're very excited to have you on board.",
        action: {
          instructions:
            'To get started with PhoneBook Service, please, verify your email:',
          button: {
            color: '#48cfad',
            text: 'Confirm your account',
            link: `${this.link}/api/users/verify/${verifyToken}`,
          },
        },
        outro:
          "Need help, or have questions? Just reply to this email, we'd love to help.",
      },
    };
    return mailGenerator.generate(emailInfo);
  }

  async sendEmail(email, verifyToken) {
    const emailBody = this.createEmailTemplate(email, verifyToken);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: email,
      from: process.env.SENDGRID_EMAIL_ADRESS,
      subject: 'Verify your Email',
      html: emailBody,
    };

    try {
      await sgMail.send(msg);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

const sendVerifyTokenService = new SendEmailService();

module.exports = sendVerifyTokenService;
