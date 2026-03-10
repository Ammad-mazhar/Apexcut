import { Shield, Gem, Scissors, Truck } from 'lucide-react'

const trustItems = [
  {
    icon: Gem,
    title: '440C Japanese Steel',
    description: 'High-carbon stainless steel for a surgical-grade edge.',
  },
  {
    icon: Scissors,
    title: 'Hand-Honed Precision',
    description: 'Each blade is hand-sharpened by master smiths for a razor-sharp finish.',
  },
  {
    icon: Shield,
    title: 'Lifetime Warranty',
    description: 'We stand by our steel. Guaranteed against manufacturing defects for life.',
  },
  {
    icon: Truck,
    title: 'Insured Global Shipping',
    description: 'Secure, tracked, and fast delivery to your salon or shop.',
  },
]

function TrustQuality() {
  return (
    <section className="w-full bg-[#0d0d0d] py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop: 4-column grid with dividers */}
        <div className="hidden md:grid md:grid-cols-4">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center p-6 border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
            >
              {/* Gold divider before each item (except first) */}
              {index > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#d4af37]/30 to-transparent" />
              )}
              
              {/* Icon */}
              <div className="mb-4 p-3 rounded-full bg-[#151515] border border-[#d4af37]/20 group-hover:border-[#d4af37]/50 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
                <item.icon className="w-8 h-8 text-[#d4af37]" strokeWidth={1.5} />
              </div>
              
              {/* Title */}
              <h3 className="font-serif text-lg text-white mb-2 tracking-wide">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: 2x2 grid */}
        <div className="grid grid-cols-2 md:hidden gap-4">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center p-4 border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] rounded-lg"
            >
              {/* Icon */}
              <div className="mb-3 p-2 rounded-full bg-[#151515] border border-[#d4af37]/20 group-hover:border-[#d4af37]/50 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
                <item.icon className="w-6 h-6 text-[#d4af37]" strokeWidth={1.5} />
              </div>
              
              {/* Title */}
              <h3 className="font-serif text-sm text-white mb-1 tracking-wide">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-xs text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustQuality

