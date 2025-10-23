import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Zod schema for lead validation
const leadSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = leadSchema.parse(body)
    
    // TODO: Plug in Supabase here
    // Example implementation:
    // const { data, error } = await supabase
    //   .from('leads')
    //   .insert([
    //     {
    //       email: validatedData.email,
    //       name: validatedData.name,
    //       created_at: new Date().toISOString(),
    //     }
    //   ])
    //
    // if (error) {
    //   throw error
    // }
    
    // For now, just log the lead (replace with actual database storage)
    console.log('New lead captured:', validatedData)
    
    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Lead captured successfully',
        data: validatedData,
      },
      { status: 200 }
    )
  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      )
    }
    
    // Handle other errors
    console.error('Error capturing lead:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    )
  }
}
