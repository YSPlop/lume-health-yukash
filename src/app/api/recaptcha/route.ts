import { NextRequest, NextResponse } from 'next/server';

const verifyEndpoint = "https://www.google.com/recaptcha/api/siteverify";

export async function POST(request: NextRequest): Promise<NextResponse>{
    try {
        
        const {captcha} = await request.json();
        const captchaResponse = await fetch(verifyEndpoint, {
            method: "POST",
            headers: { "Content-type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                secret: process.env.RECAPTCHA_SECRET!, // See prior section
                response: captcha, // the user's generated "Captcha" token
            }),
        }).then((res) => res.json());
        return NextResponse.json( captchaResponse, { status: 200 });
    } 
    catch (error) {
        if (error instanceof Error) {
            console.error('Error Verfiying data with Recaptcha:', error.message);
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