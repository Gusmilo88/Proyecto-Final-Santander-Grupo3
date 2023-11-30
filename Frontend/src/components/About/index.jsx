import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'


const About = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
      <h2 id='h2AboutAs' className="mb-4 text-4xl">OUR AMAZING TEAM</h2>
      <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-600">Unlocking Creativity, Building Dreams. Welcome to the heart of our journey! We are a dynamic quartet driven by passion, innovation, and a shared vision to make a difference. Each member of our team brings a unique set of skills and perspectives to the table, forming a powerhouse of creativity. Together, we embark on a mission to turn ideas into reality, crafting digital experiences that leave a lasting impact. Get to know the faces behind the code, the minds behind the design, and the hearts fueling our collective drive. We're not just a team; we're a family, and we can't wait to share our story with you.</p>
    </div> 
    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
      <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
        <Link>
          <img id='imgAboutUs' className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="/src/assets/images/andrea.jpg" alt="Andre Avatar" />
        </Link>
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Link id='nameAboutUs'>Luque Andrea</Link>
          </h3>
          <ul className="flex space-x-4 sm:mt-0 m-4">
          <Link to="https://github.com/AndreaVaninaLuque" target="_blank" className="mr-2" >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"  fill="currentColor" viewBox="0 0 24 24">
            <linearGradient id="gradiente" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#d53369'}} />
              <stop offset="100%" style={{stopColor: '#daae51'}} />
            </linearGradient>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="url(#gradiente)" />
          </svg>
        </Link>
        <Link to="https://www.linkedin.com/in/andrea-vanina-luque/" target="_blank" className="mr-2" >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"  fill="currentColor" viewBox="0 0 24 24">
            <linearGradient id="gradiente" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#d53369'}} />
              <stop offset="100%" style={{stopColor: '#daae51'}} />
            </linearGradient>
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" fill="url(#gradiente)" />
          </svg>
        </Link>
          </ul>
        </div>
      </div> 
      <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
        <Link>
          <img id='imgAboutUs' className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="/src/assets/images/avelino.jpg" alt="Avelino Avatar" />
        </Link>
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Link id='nameAboutUs'>Mendez Avelino</Link>
          </h3>
          <ul className="flex space-x-4 sm:mt-0 m-4">
          <Link to="https://github.com/avel40m" target="_blank" className="mr-2" >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"  fill="currentColor" viewBox="0 0 24 24">
            <linearGradient id="gradiente" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#d53369'}} />
              <stop offset="100%" style={{stopColor: '#daae51'}} />
            </linearGradient>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="url(#gradiente)" />
          </svg>
        </Link>
        <Link to="https://www.linkedin.com/in/avelino-mendez/" target="_blank" className="mr-2" >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"  fill="currentColor" viewBox="0 0 24 24">
            <linearGradient id="gradiente" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#d53369'}} />
              <stop offset="100%" style={{stopColor: '#daae51'}} />
            </linearGradient>
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" fill="url(#gradiente)" />
          </svg>
        </Link>
          </ul>
        </div>
      </div> 
      <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
        <Link>
          <img id='imgAboutUs' className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="/src/assets/images/gus.jpg" alt="Gus Avatar" />
        </Link>
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Link id='nameAboutUs'>Romero Gustavo</Link>
          </h3>
          <ul className="flex space-x-4 sm:mt-0 m-4">
            <li>
            <Link to="https://github.com/Gusmilo88" target="_blank" className="mr-2" >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"  fill="currentColor" viewBox="0 0 24 24">
            <linearGradient id="gradiente" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#d53369'}} />
              <stop offset="100%" style={{stopColor: '#daae51'}} />
            </linearGradient>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="url(#gradiente)" />
          </svg>
        </Link>
            </li>
            <Link to="https://www.linkedin.com/in/gus-romero/" target="_blank" className="mr-2" >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"  fill="currentColor" viewBox="0 0 24 24">
            <linearGradient id="gradiente" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#d53369'}} />
              <stop offset="100%" style={{stopColor: '#daae51'}} />
            </linearGradient>
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" fill="url(#gradiente)" />
          </svg>
        </Link>
          </ul>
        </div>
      </div> 
      <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
        <Link>
          <img id='imgAboutUs' className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="/src/assets/images/vania.jpg" alt="Vania Avatar" />
        </Link>
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Link id='nameAboutUs'>Verona Vania</Link>
          </h3>
          <ul className="flex space-x-4 sm:mt-0 m-4">
          <Link to="https://github.com/VaniaVerona" target="_blank" className="mr-2" >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"  fill="currentColor" viewBox="0 0 24 24">
            <linearGradient id="gradiente" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#d53369'}} />
              <stop offset="100%" style={{stopColor: '#daae51'}} />
            </linearGradient>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="url(#gradiente)" />
          </svg>
        </Link>
        <Link to="https://www.linkedin.com/in/vaniaverona/" target="_blank" className="mr-2" >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"  fill="currentColor" viewBox="0 0 24 24">
            <linearGradient id="gradiente" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#d53369'}} />
              <stop offset="100%" style={{stopColor: '#daae51'}} />
            </linearGradient>
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" fill="url(#gradiente)" />
          </svg>
        </Link>
          </ul>
        </div>
      </div>  
    </div>  
  </div>
</section>

    </div>
  )
}

export default About