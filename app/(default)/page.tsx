export const metadata = {
  title: 'Habilite',
  description: 'Habilité est une plateforme tout-en-un qui permet à tous ceux qui emménagent de souscrire conjointement à l\'électricité, l\'eau, le gaz, la fibre et l\'assurance habitation.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      {/* <Testimonials /> */}
      <Newsletter />
    </>
  )
}
