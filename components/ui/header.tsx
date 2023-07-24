import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './mobile-menu'


import LogoHabilite from '@/public/images/logo_horizontal.png'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image src={LogoHabilite} width={150} height={150} alt="Habilite" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="#contact" className="btn-sm text-white bg-primary-light-blue hover:bg-primary-dark-blue ml-3 px-8 rounded-full font-bold">
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
