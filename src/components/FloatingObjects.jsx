import useReducedMotion from '../hooks/useReducedMotion'

const objects = [
  {
    id: 'petal',
    position: 'top-[15%] left-[5%]',
    size: 'w-16 h-16',
    delay: '0s',
    duration: '7s',
  },
  {
    id: 'sphere',
    position: 'top-[40%] right-[3%]',
    size: 'w-10 h-10',
    delay: '2s',
    duration: '6s',
  },
  {
    id: 'ring',
    position: 'bottom-[20%] left-[8%]',
    size: 'w-14 h-14',
    delay: '1s',
    duration: '8s',
  },
  {
    id: 'gem',
    position: 'top-[70%] right-[6%]',
    size: 'w-8 h-8',
    delay: '3s',
    duration: '5.5s',
  },
]

function PetalShape() {
  return (
    <div className="w-full h-full relative">
      <div
        className="absolute inset-0 rounded-[50%_50%_50%_0]"
        style={{
          background: 'linear-gradient(135deg, rgba(246,190,57,0.12) 0%, rgba(212,160,23,0.06) 100%)',
          border: '1px solid rgba(246,190,57,0.1)',
          boxShadow: '0 4px 20px rgba(212, 160, 23, 0.05)',
          transform: 'rotate(30deg)',
        }}
      />
    </div>
  )
}

function SphereShape() {
  return (
    <div
      className="w-full h-full rounded-full"
      style={{
        background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 40%, rgba(246,190,57,0.08) 70%, rgba(212,160,23,0.04) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px rgba(212, 160, 23, 0.06), inset 0 -4px 12px rgba(212, 160, 23, 0.04)',
        backdropFilter: 'blur(4px)',
      }}
    />
  )
}

function RingShape() {
  return (
    <div
      className="w-full h-full rounded-full"
      style={{
        border: '1.5px solid rgba(212, 160, 23, 0.12)',
        boxShadow: '0 0 24px rgba(212, 160, 23, 0.04), inset 0 0 16px rgba(212, 160, 23, 0.02)',
      }}
    />
  )
}

function GemShape() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div
        className="w-3/4 h-3/4 rotate-45"
        style={{
          background: 'linear-gradient(135deg, rgba(246,190,57,0.1) 0%, rgba(212,160,23,0.05) 100%)',
          border: '1px solid rgba(246,190,57,0.1)',
          boxShadow: '0 4px 16px rgba(212, 160, 23, 0.04)',
        }}
      />
    </div>
  )
}

const shapeMap = {
  petal: PetalShape,
  sphere: SphereShape,
  ring: RingShape,
  gem: GemShape,
}

export default function FloatingObjects() {
  const reduced = useReducedMotion()

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden" aria-hidden="true">
      {objects.map((obj) => {
        const Shape = shapeMap[obj.id]
        return (
          <div
            key={obj.id}
            className={`absolute ${obj.position} ${obj.size} hidden lg:block`}
            style={{
              animation: reduced
                ? 'none'
                : `floatDecor ${obj.duration} ease-in-out ${obj.delay} infinite`,
            }}
          >
            <Shape />
          </div>
        )
      })}
    </div>
  )
}
