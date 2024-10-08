'use client'

import { Button } from '../ui/button'
import { HamburgerMenuIcon, PinRightIcon } from '@radix-ui/react-icons'
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NavLink } from './nav-link'
import { Logo } from '../logo'
import Link from 'next/link'

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="border-b border-border bg-small-dots dark:bg-small-dots-dark bg-dots-pattern">
      <div className="hidden md:block">
        <nav className="py-5 max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
          <nav className="md:flex items-center gap-4">
            <Logo className="h-10 w-10 bg-blue-500" />
            <NavLink href="/app" active={isActive('/app')}>
              Preços
            </NavLink>
          </nav>

          <Link href={'/auth'}>
            <Button className="md:flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-base py-6 px-10 rounded-full">
              Login
              <PinRightIcon />
            </Button>
          </Link>
        </nav>
      </div>

      <nav className="md:hidden py-5 container flex items-center justify-between">
        <Logo className="h-10 w-10" />
        <div>
          <Drawer>
            <DrawerTrigger>
              <HamburgerMenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <nav className="flex flex-col items-center gap-4">
                <NavLink href="/app" active={isActive('/app')}>
                  Preços
                </NavLink>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </header>
  )
}
