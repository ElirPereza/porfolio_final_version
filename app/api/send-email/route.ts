import type {  NextApiResponse } from 'next';
import { NextRequest } from 'next/server';
import  nodemailer  from "nodemailer";

export async function POST(req: NextRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const data = await req.json();
      const { name, email, subject, message } = data;

      console.log('Received email request:', { name, email, subject, message });

      const transporter = nodemailer.createTransport({
        service: 'zoho',
        host: 'smtpro.zoho.in',
        port: 465,
        secure: true,
        auth: {
          user: 'santana257@zohomail.com',
          pass: '*pablo327',
        },
      });

      const mailOptions = {
        from: 'santana257@zohomail.com',
        to: 'Jmaldona18@cuc.edu.co',
        subject: `Se comunican desde el portafolio ${name}: ${subject}`,
        html: `<p>Nombre: ${name}</p><p>Correo electrÃ³nico: ${email}</p><p>Asunto: ${subject}</p><p>Mensaje: ${message}</p>`
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
      
    } catch (error: any) { // Especificar el tipo de error como 'any'
      console.error(error);
      res.status(500).json({ error: 'Error sending email', details: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}