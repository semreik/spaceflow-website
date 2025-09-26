import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%',
        }}
      >
        {/* SpaceFlow Hexagonal Logo - Larger version */}
        <svg
          width="100"
          height="120"
          viewBox="0 0 20 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top hexagon shape */}
          <path
            d="M10 1L18 5.5V10L10 14.5L2 10V5.5L10 1Z"
            fill="white"
          />
          {/* Bottom hexagon shape */}
          <path
            d="M10 10L18 14.5V19L10 23L2 19V14.5L10 10Z"
            fill="white"
            opacity="0.6"
          />
          {/* Middle connecting piece */}
          <path
            d="M10 8L14 10V14L10 16L6 14V10L10 8Z"
            fill="black"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
