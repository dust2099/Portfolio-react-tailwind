import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const links = ['Home', 'About', 'Projects', 'Contact']

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md z-30 backdrop-blur">
      <div className="text-2xl font-bold tracking-wide text-blue-400">
        Portfolio de Dustin Bedaña Diza
      </div>

      {/* Links de escritorio */}
      <ul className="hidden md:flex space-x-8">
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className="hover:text-blue-400 transition-colors duration-200 font-medium px-2 py-1 rounded-lg"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      {/* Botón menú móvil */}
      <button
        className="md:hidden text-blue-400 focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        {open ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </button>

      {/* Menú móvil */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center space-y-4 py-6 md:hidden shadow-lg border-t border-blue-400">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-xl text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
