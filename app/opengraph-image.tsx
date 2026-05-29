import { ImageResponse } from 'next/og'
import { business } from '@/content/business'

export const runtime = 'edge'
export const alt = 'Marts Montage Service · klusbedrijf uit de regio Moerdijk'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          background: '#FAF8F5',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Linker oranje paneel met M */}
        <div
          style={{
            display: 'flex',
            width: '38%',
            background: '#FF6B1F',
            alignItems: 'center',
            justifyContent: 'center',
            borderRight: '8px solid #0F1112',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: '420px',
              fontWeight: 900,
              color: '#2F3338',
              letterSpacing: '-0.06em',
              marginTop: '-40px',
              lineHeight: 1,
            }}
          >
            M
          </div>
        </div>

        {/* Rechter content paneel */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '62%',
            padding: '64px 72px',
          }}
        >
          {/* Top tag */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div
              style={{
                display: 'flex',
                alignSelf: 'flex-start',
                background: '#FF6B1F',
                color: '#FFFFFF',
                padding: '6px 16px',
                borderRadius: '999px',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              All-Round Klusbedrijf
            </div>
          </div>

          {/* Headline */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: '#0F1112',
              fontSize: '88px',
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: '-0.045em',
            }}
          >
            <div style={{ display: 'flex' }}>Eén vakman.</div>
            <div style={{ display: 'flex', color: '#FF6B1F' }}>Alle klussen.</div>
            <div style={{ display: 'flex' }}>Geregeld.</div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              borderTop: '3px solid #0F1112',
              paddingTop: '24px',
            }}
          >
            <div style={{ display: 'flex', color: '#0F1112', fontSize: '22px', fontWeight: 700 }}>
              martsmontageservice.nl
            </div>
            <div style={{ display: 'flex', color: '#4A4F55', fontSize: '18px', fontWeight: 500 }}>
              {business.phone} · Regio Moerdijk
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
