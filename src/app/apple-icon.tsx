import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
          borderRadius: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          gap: 4,
        }}
      >
        <div style={{ fontSize: 56, color: 'white', lineHeight: 1 }}>🔧</div>
        <div style={{ fontSize: 32, fontWeight: 900, color: 'white', letterSpacing: '-1px' }}>EP</div>
      </div>
    ),
    { ...size }
  );
}
