import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
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
        }}
      >
        {/* SpaceFlow Hexagonal Logo */}
        <svg
          width="20"
          height="24"
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
