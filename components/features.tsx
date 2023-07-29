"use client";

import Image from 'next/image'
import PhotoEmile from '@/public/images/Emile.png'
import PhotoGabriel from '@/public/images/Gabriel.png'
import PhotoYanis from '@/public/images/Yanis.png'
import ReactFlipCard from 'reactjs-flip-card'

export default function Features() {
  return (
    <section id='team' className='pt-10'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-2 md:py-2">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12" data-aos="fade-right">
            <h2 className="h2 mb-4 font-opensans font-extrabold text-primary-light-blue">Notre équipe</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <ReactFlipCard
              frontComponent={<div className="relative flex flex-col items-center" data-aos="fade-right" data-aos-anchor="[data-aos-id-blocks]">
                <Image src={PhotoEmile} width={130} height={130} alt="Emile-Kôji" className='rounded-full border-primary-beige bg-primary-beige mb-4' />
                <h4 className="h4 mb-2 text-primary-light-blue">Emile-Kôji</h4>
                <p className="text-lg text-black text-center font-dmsans">Chief Marketing Officer</p>
              </div>}
              backComponent={<div>Back!</div>}
            />


            {/* 2nd item */}
            <ReactFlipCard
              frontComponent={<div className="relative flex flex-col items-center" data-aos="fade-right" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <Image src={PhotoGabriel} width={130} height={130} alt="Gabriel" className='rounded-full border-primary-beige bg-primary-beige mb-4' />
              <h4 className="h4 mb-2 text-primary-light-blue">Gabriel</h4>
              <p className="text-lg text-black text-center font-dmsans">Chief Executive Officer</p>
            </div>}
              backComponent={<div>Back!</div>}
            />

            {/* 3rd item */}
            <ReactFlipCard
              frontComponent={<div className="relative flex flex-col items-center" data-aos="fade-right" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <Image src={PhotoYanis} width={130} height={130} alt="Yanis" className='rounded-full border-primary-beige bg-primary-beige mb-4' />
              <h4 className="h4 mb-2 text-primary-light-blue">Yanis</h4>
              <p className="text-lg text-black text-center font-dmsans">Chief Technical Officer</p>
            </div>}
              backComponent={<div>Back!</div>}
            />

          </div>

        </div>
      </div>
    </section>
  )
}
