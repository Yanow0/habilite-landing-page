import Image from 'next/image'

import ImageProjet01 from '@/public/images/ImageProjet-1.png'
import ImageProjet02 from '@/public/images/ImageProjet-2.png'
import ImageProjet03 from '@/public/images/ImageProjet-3.png'

export default function Zigzag() {
  return (
    <section id='project'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" data-aos="fade-left">
            <h1 className="h2 mb-4 text-primary-dark-blue">Notre projet</h1>
            <p className="text-xl text-gray-500">Simplifier le processus de souscription aux services de première nécessité (eau, gaz et électricité), d'internet et d'assurance habitation, tout en réduisant les coûts de ces derniers.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-right">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={ImageProjet01} width={540} height={405} alt="Abonnement" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3 text-primary-light-blue">Un seul abonnement personnalisable</h3>
                  <p className="text-xl text-gray-400 mb-4">Construis ton pack d'abonnement, selon tes besoins et modifie le à tout moment</p>                
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-left">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={ImageProjet02} width={540} height={405} alt="Documents" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3 text-primary-light-blue">Téléverse tes documents et on s'occupe du reste</h3>
                  <p className="text-xl text-gray-400 mb-4">Fini les démarches interminables, une fois que tu auras déposé tes documents tu pourras profiter et gérer tous tes services sans aucune démarche administrative</p>                
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-right">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={ImageProjet03} width={540} height={405} alt="Pack" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3 text-primary-light-blue">Obtiens ton pack en moins de 15 minutes</h3>
                  <p className="text-xl text-gray-400 mb-4">Personnalise ton pack et obtiens une offre personnalisée en seulement quelques clics, tu n'auras plus qu'à souscrire si l'offre te convient</p>                
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
