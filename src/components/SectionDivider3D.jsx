import useReducedMotion from '../hooks/useReducedMotion'

export default function SectionDivider3D({ variant = 'ring', className = '' }) {
  const reduced = useReducedMotion()

  if (variant === 'ring') {
    return (
      <div className={`flex items-center justify-center py-12 md:py-16 ${className}`} aria-hidden="true">
        <div
          className="section-divider-3d relative"
          style={{
            animation: reduced ? 'none' : undefined,
          }}
        >
          <div
            className="w-20 h-20 md:w-24 md:h-24 rounded-full relative"
            style={{
              border: '1.5px solid rgba(212, 160, 23, 0.15)',
              boxShadow: '0 0 40px rgba(212, 160, 23, 0.04), inset 0 0 20px rgba(212, 160, 23, 0.02)',
            }}
          >
            <div
              className="absolute inset-3 rounded-full"
              style={{
                border: '1px solid rgba(212, 160, 23, 0.08)',
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(212,160,23,0.2) 0%, transparent 70%)',
              }}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center py-8 md:py-12" aria-hidden="true">
      <div className="flex items-center gap-4 max-w-xs w-full">
        <div className="flex-grow h-px bg-gradient-to-r from-transparent to-outline-variant/40" />
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212,160,23,0.3) 0%, transparent 70%)',
            boxShadow: '0 0 12px rgba(212, 160, 23, 0.08)',
          }}
        />
        <div className="flex-grow h-px bg-gradient-to-l from-transparent to-outline-variant/40" />
      </div>
    </div>
  )
}
