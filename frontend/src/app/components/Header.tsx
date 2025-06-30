'use client'

import { useState } from 'react'

const links = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="h-16 w-full fixed top-0 z-50 bg-darkerBg/90 backdrop-blur-md border-b border-rustOrange/30">
      <div className="h-full flex items-center justify-between max-w-6xl mx-auto px-6 py-2">
        {/* Logo */}
        <a href="/" className="text-xl font-bold rust-text font-diesel tracking-wider">
          Diego No
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/70 transition-colors font-mono text-sm tracking-wider hover:text-rustOrange hover:rust-text hover:underline hover:underline-offset-4 hover:decoration-rustOrange"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-rustOrange focus:outline-none rusted-border p-2 rounded z-70 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-rustOrange text-lg">
            {isOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          className="md:hidden z-60 h-screen fixed inset-0"
          style={{ backgroundImage: 'linear-gradient(to bottom, hsl(var(--darker-bg)), hsl(var(--wasteland-bg)))' }}
          >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/70 hover:text-copper transition-colors font-mono text-2xl tracking-wider hover:copper-text"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
