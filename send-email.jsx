import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { render } from '@react-email/render';
import { config } from 'dotenv';
import cors from 'cors';
import React from 'react';
import nodemailer from 'nodemailer'

// import { Img } from '@react-email/components';

const app = express();
app.use(express.json());
app.use(cors());
config();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        console.log(cb(null, file.originalname))
    }
})

const upload = multer({ storage: storage })

cloudinary.config({
    cloud_name: 'dvsxinclp',
    api_key: '827787135592173',
    api_secret: '989RyG5zLxStuhHzBkILuJEE7qc'
});

cloudinary.uploader.upload("uploads/image.jpg",
    { public_id: "olympic_flag" },
    function (error, result) { console.log(result.url); });
// Middleware to parse JSON bodies
const url = cloudinary.url("olympic_flag", {
    width: 250,
    height: 250,
    crop: 'fill'
});
console.log("url", url)
// POST request handler
app.post('/upload/image', upload.single('file'), async (req, res) => {
    try {
        const file = req.file; // Uploaded file details
        console.log('Uploaded file:', file)
        const { name, email } = req.body; // Destructure req.body directly
        console.log("request body", name, email)
        const emailHtml = render(<img src={url} />);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // Use `true` for port 465, `false` for all other ports
            auth: {
                user: "ksaikumar0262@gmail.com",
                pass: "pjrt khns rhse wzin",
            },
        });

        const options = {
            from: 'ksaikumar0262@gmail.com',
            to: email,
            subject: name,
            html: emailHtml,
        };

        const resp = await transporter.sendMail(options);
        console.log('Received data:', resp);

        // Send response after successful processing
        res.status(200).send('POST request received');
    } catch (error) {
        console.error('Error processing request:', error);
        // Send error response
        res.status(500).send({
            error: 'Internal Server Error',
            message: error.message
        });
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

