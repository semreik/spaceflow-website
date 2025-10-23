import { NextRequest, NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    message: "API is working",
    env: {
      hasResendKey: !!process.env.RESEND_API_KEY,
      keyLength: process.env.RESEND_API_KEY?.length || 0,
      keyStart: process.env.RESEND_API_KEY?.substring(0, 10) || "none"
    }
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log("Received form data:", body)
    
    return NextResponse.json({
      success: true,
      received: body,
      message: "Test successful - would send email here"
    })
  } catch (error: any) {
    console.error("Test API error:", error)
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 })
  }
}
