import Image from "next/image"
import React, { useState } from "react"
import Logo from "assets/logo/logo.png"
import Button from "../components/Button/Button"
import { clsx } from "clsx"

export default function Home() {
  const [hambMenu, setHambMenu] = useState(false)

  return (
    <div>
      {/* MENU HAMBURGER MODAL */}
      <div
        className={clsx(
          hambMenu ? "block" : "hidden",
          "absolute bg-white p-5 w-5/6 shadow-md rounded-lg m-5 right-0"
        )}
      >
        <nav>
          <div className="float-right" onClick={() => setHambMenu(false)}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="58.3848"
                y="18.7868"
                width="4"
                height="56"
                rx="2"
                transform="rotate(45 58.3848 18.7868)"
                fill="#6B7280"
              />
              <rect
                x="60.5061"
                y="59.0919"
                width="4"
                height="56"
                rx="2"
                transform="rotate(135 60.5061 59.0919)"
                fill="#6B7280"
              />
            </svg>
          </div>
          <div className="grid grid-cols-2 text-gray-500 gap-3">
            <p>Início</p>
            <p>Quem somos</p>
            <p>Recursos</p>
            <p>Planos</p>
          </div>
          <div className="mt-5 text-center">
            <button className="bg-secondary w-full text-white rounded px-5 py-2">
              Comece já
            </button>
            <p className="text-gray-400 mt-5">
              Já tem conta? <span>Login</span>
            </p>
          </div>
        </nav>
      </div>

      <div className="bg-gradient-to-r from-white to-[#e3fff1] pb-5">
        <header className="flex items-center justify-between py-2 container mx-auto">
          <Image src={Logo} alt="logo" />
          <nav className="hidden md:flex items-center gap-3 lg:gap-8 text-gray-500">
            <p>Início</p>
            <p>Quem somos</p>
            <p>Recursos</p>
            <p>Planos</p>
          </nav>
          <div className="hidden md:flex items-center gap-5">
            <p className="text-gray-500">
              Já tem conta? <span>Login</span>
            </p>
            <button className="bg-secondary text-white rounded px-5 py-2">
              Comece já
            </button>
          </div>
          <button
            className="space-y-1 bg-white p-3 rounded-lg md:hidden"
            onClick={() => setHambMenu(true)}
          >
            <div className="w-5 h-0.5 bg-gray-400"></div>
            <div className="w-5 h-0.5 bg-gray-400"></div>
            <div className="w-5 h-0.5 bg-gray-400"></div>
          </button>
        </header>

        <div className="my-10 container mx-auto">
          <h2 className="text-center text-4xl font-bold text-primary md:text-left md:text-5xl md:w-3/4 lg:w-2/4">
            Controle de todos os seus gastos ao seu alcance
          </h2>
          <p className="text-center max-w-md mx-auto text-gray-500 mt-7 md:text-left md:m-0 md:my-10 md:w-3/4 lg:w-2/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibu
            amet consecteturs.
          </p>
          <div className="font-semibold my-10 text-center md:text-left">
            <Button>Teste gratuitamente</Button>
          </div>
        </div>
        <div className="text-primary container mx-auto">
          <div className="flex gap-3 items-center justify-center md:justify-start">
            <div className="bg-[#E3F8EC] p-2 rounded-lg">
              <svg
                width="25"
                height="25"
                viewBox="0 0 96 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_114_11)">
                  <path
                    d="M48 68C52.4 68 56 64.4 56 60C56 55.6 52.4 52 48 52C43.6 52 40 55.6 40 60C40 64.4 43.6 68 48 68ZM72 32H68V24C68 12.96 59.04 4 48 4C36.96 4 28 12.96 28 24V32H24C19.6 32 16 35.6 16 40V80C16 84.4 19.6 88 24 88H72C76.4 88 80 84.4 80 80V40C80 35.6 76.4 32 72 32ZM35.6 24C35.6 17.16 41.16 11.6 48 11.6C54.84 11.6 60.4 17.16 60.4 24V32H35.6V24ZM72 80H24V40H72V80Z"
                    fill="#004A07"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_114_11">
                    <rect width="96" height="96" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p>Segurança em primeiro lugar</p>
          </div>
          <div className="flex gap-3 items-center mt-7 justify-center md:justify-start">
            <div className="bg-[#E3F8EC] p-2 rounded-lg">
              <svg
                width="25"
                height="25"
                viewBox="0 0 96 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_114_5)">
                  <path
                    d="M16 24H88V16H16C11.6 16 8 19.6 8 24V68H0V80H56V68H16V24ZM92 32H68C65.8 32 64 33.8 64 36V76C64 78.2 65.8 80 68 80H92C94.2 80 96 78.2 96 76V36C96 33.8 94.2 32 92 32ZM88 68H72V40H88V68Z"
                    fill="#004A07"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_114_5">
                    <rect width="96" height="96" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p>Acesse onde e quando quiser</p>
          </div>
        </div>
      </div>
      <div className="mt-10 container mx-auto">
        <div className="text-center max-w-xs mx-auto md:w-3/4 md:text-left md:mx-0 mb-10">
          <p className="text-primary">Ajeite seus gastos</p>
          <h2 className="text-center text-2xl font-bold text-primary md:text-4xl md:text-left">
            Como tenho o melhor proveito do aplicativo?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex gap-3 mt-7 justify-center mx-5 md:w-2/4 md:mx-0">
            <span className="bg-[#E3F8EC] w-10 h-10 p-2 rounded-lg font-bold text-lg">
              01
            </span>
            <div>
              <h3 className="font-bold text-lg text-primary">
                Lorem ipsum dolor sit
              </h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-7 justify-center mx-5 md:w-2/4 md:mx-0">
            <span className="bg-[#E3F8EC] w-10 h-10 p-2 rounded-lg font-bold text-lg">
              02
            </span>
            <div>
              <h3 className="font-bold text-lg text-primary">
                Lorem ipsum dolor sit
              </h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-7 justify-center mx-5 md:w-2/4 md:mx-0">
            <span className="bg-[#E3F8EC] w-10 h-10 p-2 rounded-lg font-bold text-lg">
              03
            </span>
            <div>
              <h3 className="font-bold text-lg text-primary">
                Lorem ipsum dolor sit
              </h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-7 justify-center mx-5 md:w-2/4 md:mx-0">
            <span className="bg-[#E3F8EC] w-10 h-10 p-2 rounded-lg font-bold text-lg">
              04
            </span>
            <div>
              <h3 className="font-bold text-lg text-primary">
                Lorem ipsum dolor sit
              </h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-10">
        <footer className="flex items-center justify-between py-10 container mx-auto">
          <Image src={Logo} alt="logo" />
          <nav className="hidden md:flex items-center gap-3 lg:gap-8 text-gray-500">
            <p>Início</p>
            <p>Quem somos</p>
            <p>Recursos</p>
            <p>Planos</p>
          </nav>
          <div className="hidden md:flex items-center gap-5">
            <button className="bg-secondary text-white rounded px-5 py-2 font-semibold">
              Comece gratuitamente
            </button>
          </div>
          <button
            className="space-y-1 bg-white p-3 rounded-lg md:hidden"
            onClick={() => setHambMenu(true)}
          >
            <div className="w-5 h-0.5 bg-gray-400"></div>
            <div className="w-5 h-0.5 bg-gray-400"></div>
            <div className="w-5 h-0.5 bg-gray-400"></div>
          </button>
        </footer>
      </div>
    </div>
  )
}
