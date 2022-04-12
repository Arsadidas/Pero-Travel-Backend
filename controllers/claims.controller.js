const Claim = require("../models/Claim.model");
const nodemailer = require("nodemailer");

module.exports.claimsController = {
  addClaims: async (req, res) => {
    try {
      const { email, text, phone } = req.body;

      const transporter = nodemailer.createTransport({
        host: "smtp.mail.ru",
        port: 465,
        secure: true,
        auth: {
          user: "perotravel@mail.ru",
          pass: "MU3gzdDKr52dkJw0fY8G",
        },
      });

      await transporter.sendMail({
        from: "<perotravel@mail.ru>",
        to: `${email}`,
        subject: "Message from Pero Travel",
        text: "Поздравляю, ваша заявка успешно отправлена!",
        html: `<h2>Ваши данные</h2> <br />
        <li>
            <ul><b>Ваш вопрос:</b> ${text}</ul>
            <ul><b>Ваш телефон:</b> ${phone}</ul>
        </li>`,
      });

      const claim = await Claim.create({
        email,
        text,
        phone,
      });
      res.json(claim);
    } catch (e) {
      res.json({ error: e.toString() });
    }
  },
};
