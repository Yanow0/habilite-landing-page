import LogoHabilite from '@/public/images/logo_horizontal.png'

export const metadata = {
  title: 'Habilite',
  description: 'Habilité est une plateforme tout-en-un qui permet à tous ceux qui emménagent de souscrire conjointement à l\'électricité, l\'eau, le gaz, la fibre et l\'assurance habitation.',
  image: LogoHabilite,
}

import Intro from '@/components/intro'
import Team from '@/components/team'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Intro />
      <Team />
      <Zigzag />
      {/* <Testimonials /> */}
      <Newsletter />
    </>
  )
}
