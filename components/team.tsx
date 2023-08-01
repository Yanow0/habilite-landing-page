"use client";

import Image from 'next/image'
import PhotoEmile from '@/public/images/Emile.png'
import PhotoGabriel from '@/public/images/Gabriel.png'
import PhotoYanis from '@/public/images/Yanis.png'
import ReactFlipCard from 'reactjs-flip-card'

const styles = {
  card: {
    // background: '#EFE8DA',
    // color: 'white',
  },
  container: {
    height: '340px',
    width: '340px',
  }

}

export default function Team() {
  return (
    <section id='team' className='pt-10 mb-16'>
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="py-2 md:py-2">

          {/* Section header */}
          <div className="max-w-full mx-auto text-center pb-12" data-aos="fade-right">
            <h2 className="h2 mb-4 text-4xl md:text-5xl lg:text-5xl font-opensans font-extrabold text-primary-light-blue">Notre équipe</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-none flex items-center gap-8 justify-around lg:justify-around flex-col md:flex-row lg:flex-row" data-aos-id-blocks>

            {/* 1st item */}
            <ReactFlipCard
              frontStyle={styles.card}
              backStyle={styles.card}
              containerStyle={styles.container}
              frontComponent={<div className="flex flex-col items-center border-2 border-primary-light-blue rounded-[16px] shadow-xl p-8 bg-primary-light-beige h-full" data-aos="fade-right" data-aos-anchor="[data-aos-id-blocks]">
                <Image src={PhotoEmile} width={180} height={180} alt="Emile-Kôji" className='rounded-full border-primary-beige bg-primary-beige mb-4' />
                <h4 className="h4 mb-2 text-primary-light-blue">Emile-Kôji</h4>
                <p className="text-lg text-black text-center font-dmsans">Chief Marketing Officer</p>
              </div>}
              backComponent={
                <div className="flex flex-col justify-center items-center border-2 border-primary-light-blue rounded-[16px] shadow-xl p-8 bg-primary-light-beige h-full" data-aos="fade-right" data-aos-anchor="[data-aos-id-blocks]">
                  <h4 className="h4 mb-6 text-primary-light-blue">Emile-Kôji</h4>
                  <p className="text-md text-black text-center font-dmsans text-gray-800">C'est notre spécialiste marketing. Avec un sens du relationnel innée et une rigueur acquise en prépa scientifique, il développe la notoriété de Habilité jour après jour.</p>
                </div>
              }
            />

            {/* 2nd item */}
            <ReactFlipCard
              frontStyle={styles.card}
              backStyle={styles.card}
              containerStyle={styles.container}
              frontComponent={<div className="flex flex-col items-center border-2 border-primary-light-blue rounded-[16px] shadow-xl p-8 bg-primary-light-beige h-full" data-aos="fade-right" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
                <Image src={PhotoGabriel} width={180} height={180} alt="Gabriel" className='rounded-full border-primary-beige bg-primary-beige mb-4' />
                <h4 className="h4 mb-2 text-primary-light-blue">Gabriel</h4>
                <p className="text-lg text-black text-center font-dmsans">Chief Executive Officer</p>
              </div>}
              backComponent={
                <div className="flex flex-col justify-center items-center border-2 border-primary-light-blue rounded-[16px] shadow-xl p-8 bg-primary-light-beige h-full" data-aos="fade-right" data-aos-anchor="[data-aos-id-blocks]">
                  <h4 className="h4 mb-6 text-primary-light-blue">Gabriel</h4>
                  <p className="text-md text-black text-center font-dmsans text-gray-800">Gabriel a une vision globale de Habilité, sa méthodologie et son travail font de lui le gouvernail du projet.</p>
                </div>
              }
            />

            {/* 3rd item */}
            <ReactFlipCard
              frontStyle={styles.card}
              backStyle={styles.card}
              containerStyle={styles.container}
              frontComponent={<div className="flex flex-col items-center border-2 border-primary-light-blue rounded-[16px] shadow-xl p-8 bg-primary-light-beige h-full" data-aos="fade-right" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
                <Image src={PhotoYanis} width={180} height={180} alt="Yanis" className='rounded-full border-primary-beige bg-primary-beige mb-4' />
                <h4 className="h4 mb-2 text-primary-light-blue">Yanis</h4>
                <p className="text-lg text-black text-center font-dmsans">Chief Technical Officer</p>
              </div>}
              backComponent={
                <div className="flex flex-col justify-center items-center border-2 border-primary-light-blue rounded-[16px] shadow-xl p-8 bg-primary-light-beige h-full" data-aos="fade-right" data-aos-anchor="[data-aos-id-blocks]">
                  <h4 className="h4 mb-6 text-primary-light-blue">Yanis</h4>
                  <p className="text-md text-black text-center font-dmsans text-gray-800">L'esprit d'entrepreneur de Yanis, mêlé à ses études dans l'informatique lui permettent d'assurer l'aspect digital de Habilité.  </p>
                </div>
              }
            />


          </div>

        </div>
      </div>
    </section>
  )
}
