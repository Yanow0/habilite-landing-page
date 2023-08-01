import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './mobile-menu'


import LogoHabilite from '@/public/images/logo_horizontal.png'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center md:justify-between lg:flex lg:items-center lg:justify-between h-24">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block w-full" aria-label="Cruip">
              <Image src={LogoHabilite} width={200} height={200} alt="Habilite" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="#contact" className="btn-sm text-lg text-white bg-primary-light-blue hover:bg-primary-dark-blue ml-3 px-9 py-3 rounded-full font-bold">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
