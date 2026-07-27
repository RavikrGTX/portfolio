'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../../../assets/assets'

const homeLinks = [
  { href: '/#top', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#mywork', label: 'My Work' },
  { href: '/#projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact Me' },
]

const blogLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const isBlog = pathname?.startsWith('/blog')
  const links = isBlog ? blogLinks : homeLinks
  const sideMenuRef = useRef()
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    setIsDark(next)
  }

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  const linkClass = (href) => {
    const active =
      href === '/blog'
        ? pathname === '/blog' || pathname?.startsWith('/blog/')
        : false
    return [
      'font-serif transition-colors',
      active
        ? 'text-gray-900 dark:text-zinc-100 underline underline-offset-4'
        : 'text-gray-900 dark:text-zinc-100 hover:opacity-70',
    ].join(' ')
  }

  return (
    <>
      <nav className="w-full fixed top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 sm:px-8 lg:px-12">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src={assets.logorknew}
              alt="rk"
              className="h-12 w-auto cursor-pointer dark:hidden"
            />
            <Image
              src={assets.logorkdarknew}
              alt="rk"
              className="h-12 w-auto cursor-pointer hidden dark:block"
            />
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {mounted && (
                <Image
                  className="w-5 h-5"
                  alt=""
                  src={isDark ? assets.sun_icon : assets.moon_icon}
                />
              )}
            </button>
            <button className="block md:hidden ml-1" aria-label="Open menu">
              <Image
                className="w-6"
                alt=""
                src={isDark ? assets.menu_white : assets.menu_black}
                onClick={openMenu}
              />
            </button>

            <ul className="hidden md:flex items-center gap-5 lg:gap-7">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass(link.href)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[#7A5B51] dark:bg-zinc-900 transition duration-500 text-white"
        >
          <div className="absolute right-6 top-8" onClick={closeMenu}>
            <Image
              src={assets.close_white}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={closeMenu} className="font-serif">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
