import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxy3RcgMDU5cGwsYn7F_N4IOXvPO9xEQNfontX0_-qi_a53YRbQBKhrPLvJ9Mc_fxVvYg/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      redirect: "follow",
    });

    const result = await response.text();

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("RSVP API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit RSVP",
      },
      {
        status: 500,
      }
    );
  }
}