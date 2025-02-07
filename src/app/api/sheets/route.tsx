import { google, sheets_v4 } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';
import { JWT } from 'google-auth-library';
import { formatForSheet, ServiceData } from "@/utils/sheets";

const spreadsheetId = process.env.SPREADSHEET_ID;

const credentials = process.env.GOOGLE_CREDENTIALS
  ? JSON.parse(process.env.GOOGLE_CREDENTIALS)
  : null;

const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
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