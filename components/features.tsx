import Image from 'next/image'
import PhotoEmile from '@/public/images/Emile.png'
import PhotoGabriel from '@/public/images/Gabriel.png'
import PhotoYanis from '@/public/images/Yanis.png'

export default function Features() {
  return (
    <section id='team'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-2 md:py-2">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20" data-aos="fade-right">
            <h2 className="h2 mb-4 font-opensans font-extrabold text-primary-light-blue">Notre équipe</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-right" data-aos-anchor="[data-aos-id-blocks]">
              <Image src={PhotoEmile} width={100} height={100} alt="Emile-Kôji" className='rounded-full border-primary-beige bg-primary-beige' />
              <h4 className="h4 mb-2 text-primary-light-blue">Emile-Kôji</h4>
              <p className="text-lg text-black text-center font-dmsans">Confondateur & Expert Marketing</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-right" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <Image src={PhotoGabriel} width={100} height={100} alt="Gabriel" className='rounded-full border-primary-beige bg-primary-beige' />
              <h4 className="h4 mb-2 text-primary-light-blue">Gabriel</h4>
              <p className="text-lg text-black text-center font-dmsans">Confondateur & Expert Financier</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-right" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            <Image src={PhotoYanis} width={100} height={100} alt="Yanis" className='rounded-full border-primary-beige bg-primary-beige' />
              <h4 className="h4 mb-2 text-primary-light-blue">Yanis</h4>
              <p className="text-lg text-black text-center font-dmsans">Confondateur & Expert Technique</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
