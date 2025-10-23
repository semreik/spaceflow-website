import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY?.trim())

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Send simple notification email to you
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["s.emreik@gmail.com"],
      replyTo: email,
      subject: `SpaceFlow Demo Request - ${name} from ${company}`,
      html: `
        <h3>New Demo Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
        <hr>
        <p><small>Submitted from SpaceFlow website</small></p>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Failed to send email:", error)
    return NextResponse.json(
      { error: "Failed to send request" },
      { status: 500 }
    )
  }
}
