import { google, sheets_v4 } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';
import { JWT } from 'google-auth-library';
import { formatForSheet, ServiceData } from "@/utils/sheets";
import { emailTo } from "@/utils/email";

const spreadsheetId = process.env.SPREADSHEET_ID;

const credentials = process.env.GOOGLE_CREDENTIALS
  ? JSON.parse(process.env.GOOGLE_CREDENTIALS)
  : null;

const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.PERSONAL_USERNAME,
        pass: process.env.PERSONAL_PASSWORD,
    },
  });


const getAvailableRow = async (sheets :sheets_v4.Sheets, sheetName : string) => {
    const range = `${sheetName}!A:A`
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range
    });

    const numRows = response.data.values ? response.data.values.length : 0;
    return numRows + 1;
}


export async function POST(request: NextRequest):Promise<NextResponse> {
    try { 
        const client = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: client as JWT});

        const {valueInputOption, ...valuesAll } = await request.json();
        const updatedFormType = valuesAll.type === "Home Care Package" ? "HCP" : valuesAll.type;

        const serviceData: ServiceData = valuesAll as ServiceData
        const rowValues = [formatForSheet(serviceData)];
        const emailContents = emailTo(serviceData);
        if (valuesAll.emailConsent) {
            const info_patient = await transporter.sendMail({
                from: `"Lume Health" <${process.env.PERSONAL_USERNAME}`, // sender address
                to: valuesAll.email, // list of receivers
                subject: "Your Details with Lume Health", // Subject line
                text: "emailContents", // plain text body
                html: `<div style="font-family: Arial, sans-serif; color: #333;">
                        <h1>Here are all your details that were submitted to Lume Health:</h1>
                        ${emailContents}
                        <br>
                        <h3>Thank you for registering with Lume Health! We will get back to you as soon as possible.</h3>
                        <p>Kind Regards,</p>
                        <p><strong>Han Lai and Nat Chan</strong></p>
                        <p><strong>Mobile: </strong>0478 355 242</p>
                        <p><strong>Email: </strong>info@lumehealth.com.au</p>
                        <p><strong>Address: </strong>305 Warrigal Road, Burwood 3125</p>
                    </div>`, // html body
            });
            console.log("Message sent: %s", info_patient.messageId);
        }

        const info_self = await transporter.sendMail({
            from: `"Lume Health" <${process.env.PERSONAL_USERNAME}`, // sender address
            to: process.env.PERSONAL_USERNAME, // list of receivers
            subject: "Your Details with Lume Health", // Subject line
            text: "emailContents", // plain text body
            html:`<div style="font-family: Arial, sans-serif; color: #333;">
                    <h1>New User Details Coming Through!</h1>
                    ${emailContents}
                    <br>
                </div>`, // html body
        });
        
        
        console.log("Message sent: %s", info_self.messageId);
        // Last available cell
        const lastCell = await getAvailableRow(sheets, updatedFormType)
        const range = `${updatedFormType}!A${lastCell}:T${lastCell}`

        const response = await sheets.spreadsheets.values.update({
            spreadsheetId,
            range,
            valueInputOption,
            requestBody: { values: rowValues },
        });

        return NextResponse.json(response.data, { status: 200 });
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error updating data:', error.message);
            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            );
        }
        console.error('Unknown error:', error);
        return NextResponse.json(
            { error: 'An unknown error occurred' },
            { status: 500 }
        );
    }
}