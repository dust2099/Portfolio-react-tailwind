import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const links = ['Home', 'About', 'Projects', 'Contact']

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Dustin Bedaña Diza</div>

      {/* Links de escritorio */}
      <ul className="hidden md:flex space-x-6">
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} className="hover:text-gray-300">
              {l}
            </a>
          </li>
        ))}
      </ul>

      {/* Botón menú móvil */}
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Menú móvil */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-4 md:hidden">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-xl hover:text-gray-300"
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
