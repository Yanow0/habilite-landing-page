'use client';

import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { SiLinkedin } from '@icons-pack/react-simple-icons';
import Link from 'next/link';
// import { EnvelopeIcon } from '@heroicons/react/24/outline'

import { useForm, ValidationError } from '@formspree/react';


export default function Newsletter() {
  const [state, handleSubmit] = useForm("meqbezvl");
  if (state.succeeded) {
    return (
      <section id='contact' className="text-center px-4 md:px-8 h-80 flex justify-center items-center bg-primary-light-blue w-11/12 rounded-[20px] mx-auto">
        <h1 className='font-opensans text-4xl font-bold text-white'>Votre message nous a bien été envoyé !</h1>
      </section>);
  }
  return (
    <section id='contact' className="pt-10 px-4 md:px-8">
      <div className="max-w-full mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div className="relative bg-primary-light-blue py-10 px-8 md:py-16 md:px-12 rounded-[24px]" data-aos="fade-left">

          <div className="relative flex flex-col lg:flex-row justify-between md:px-8">

            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-white mb-8 text-2xl md:text-3xl lg:text-3xl text-center md:text-left">Contactez-nous</h3>

              <ul className='text-left md:pl-4'>
                <li className='mb-2 font-dmsans text-sm md:text-lg md:mb-6'>
                  <EnvelopeIcon className="h-6 w-6 text-white inline-block mr-2" /><Link href="mailto:contact@habilite.fr">contact@habilite.fr</Link>
                </li>
                <li className='mb-2 font-dmsans text-sm md:text-lg md:mb-6'>
                  <SiLinkedin className='pl-0.5 inline-block mr-2 ' color='white' size={22} /><Link href="https://www.linkedin.com/company/habilite-france">Habilité</Link>
                </li>
                <li className='mb-2 font-dmsans text-sm md:text-lg md:mb-6'>
                  <PhoneIcon className="h-6 w-6 text-white inline-block mr-2" />06 95 91 29 47
                </li>
                <li className='mb-2 font-dmsans text-sm md:text-lg md:mb-6'>
                  <MapPinIcon className="h-6 w-6 text-white inline mr-2" /><p className='inline'>13 rue Georges Maertens, 59800 Lille</p>
                </li>
              </ul>
            </div>

            {/* CTA form */}
            <form className="w-full lg:w-1/2" onSubmit={handleSubmit}>
              <h3 className="h3 text-white text-2xl md:text-3xl lg:text-3xl mb-8 text-center md:text-left">Posez-nous vos questions</h3>
              <div className='md:pl-4'>
                <input type="text" name="Nom" className="w-full appearance-none bg-white border border-primary-beige rounded-md px-3 md:px-4 py-2 md:py-3 mb-4 text-primary-dark-blue placeholder-black text-md md:text-xl lg:text-xl font-dmsans" placeholder="Nom" aria-label="Nom" />
                <input type="email" name="Email" className="w-full appearance-none bg-white border border-primary-beige rounded-md px-3 md:px-4 py-2 md:py-3 mb-4 text-primary-dark-blue placeholder-black text-md md:text-xl lg:text-xl font-dmsans" placeholder="Adresse email" aria-label="Email" />
                <textarea name="Message" className="w-full appearance-none bg-white border border-primary-beige rounded-md px-3 md:px-4 py-2 md:py-3 mb-4 text-primary-dark-blue placeholder-black text-md md:text-xl lg:text-xl font-dmsans" placeholder="Message" aria-label="Message" />
                <button className="btn w-full text-white bg-primary-light-blue hover:bg-white text-primary-light-blue-hover font-bold rounded-[18px] border-2 border-white text-md md:text-xl lg:text-xl" type='submit' disabled={state.submitting}>Envoyer</button>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  )
}
