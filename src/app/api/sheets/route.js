import { google } from 'googleapis';
import path from 'path';


const spreadsheetId = process.env.SPREADSHEET_ID;

const auth = new google.auth.GoogleAuth({
    keyFile: path.join(process.cwd(), 'credentials.json'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

const getAvailableRow = async (sheets, sheetName) => {
    const range = `${sheetName}!A:A`
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range
    });

    const numRows = response.data.values ? response.data.values.length : 0;
    return numRows + 1;
}

export async function POST(request) {
    try { 
        const client = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: client });

        const {formType, valueInputOption, ...valuesAll } = await request.json();
        const updatedFormType = formType === "Home Care Package" ? "HCP" : formType;

        console.log(valuesAll)

        // Turn the values into an array
        const columnOrder = ["serviceType", "firstName", "lastName", "email", "phone", "streetAddress", "gender", "dob"]
        const formattedValues = [columnOrder.map(key => valuesAll[key] || "")];
        console.log(formattedValues)

        // Last available cell
        const lastCell = await getAvailableRow(sheets, updatedFormType)
        const range = `${updatedFormType}!A${lastCell}:H${lastCell}`

        const response = await sheets.spreadsheets.values.update({
            spreadsheetId,
            range,
            valueInputOption,
            requestBody: { values: formattedValues },
        });

        return new Response(JSON.stringify(response.data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error updating data:', error);
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}