import Image from 'next/image'

import ImageProjet01 from '@/public/images/ImageProjet-1.png'
import ImageProjet02 from '@/public/images/ImageProjet-2.png'
import ImageProjet03 from '@/public/images/ImageProjet-3.png'

export default function Zigzag() {
  return (
    <section id='ambition' className="py-12 px-4 md:px-16 lg:px-16">
      <div className="max-w-full mx-auto px-4 md:px-10">
        <div>

          {/* Section header */}
          <div className="max-w-full mx-auto text-center pb-12 md:pb-16" data-aos="fade-left">
            <h1 className="h2 mb-4 text-primary-dark-blue text-4xl md:text-5xl lg:text-5xl">Notre ambition</h1>
            <p className="text-xl md:text-3xl lg:text-3xl text-gray-500">Simplifier les processus de souscription.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-right">
                <Image className="max-w-full mx-auto md:mr-0 md:max-w-none h-auto rounded-[20px] border-4 border-primary-light-blue" src={ImageProjet01} width={540} height={405} alt="Abonnement" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 px-4 md:px-0" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3 text-primary-light-blue text-xl md:text-4xl lg:text-4xl">Un seul abonnement personnalisable</h3>
                  <p className="text-md md:text-2xl lg:text-2xl text-gray-600 mb-4 font-dmsans">Tu pourras construire ton pack d'abonnement selon tes besoins et le modifier à tout moment.</p>                
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-left">
                <Image className="max-w-full mx-auto md:ml-0 md:max-w-none h-auto rounded-[20px] border-4 border-primary-light-blue" src={ImageProjet02} width={540} height={405} alt="Documents" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 px-4 md:px-0" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3 text-primary-light-blue text-xl md:text-4xl lg:text-4xl">Téléverse tes documents et on s'occupe du reste</h3>
                  <p className="text-md md:text-2xl lg:text-2xl text-gray-600 mb-4 font-dmsans">Fini les démarches interminables, une fois que tu auras déposé tes documents tu pourras profiter et gérer tous tes services sans aucune contrainte.</p>                
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-right">
                <Image className="max-w-full mx-auto md:mr-0 md:max-w-none h-auto rounded-[20px] border-4 border-primary-light-blue" src={ImageProjet03} width={540} height={405} alt="Pack" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 px-4 md:px-0" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3 text-primary-light-blue text-xl md:text-4xl lg:text-4xl">Obtiens ton pack en moins de 15 minutes</h3>
                  <p className="text-md md:text-2xl lg:text-2xl text-gray-600 mb-4 font-dmsans">Tu bénéficieras d'une offre personnalisée en seulement quelques clics, tu n'auras plus qu'à souscrire si elle te convient.</p>                
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
