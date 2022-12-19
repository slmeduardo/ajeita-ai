import Image from "next/image"
import Logo from "assets/logo/logo-white.png"

export default function AppIndex() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="bg-gradient-to-r from-[#12BB67] to-[#13D174] text-white flex justify-between items-center py-10 px-5 md:py-3">
        <div className="flex items-center md:hidden">
          <div className="bg-gray-300 border-2 border-[#5FC87A] w-14 h-14 rounded-full flex items-center justify-center font-semibold text-black">
            E
          </div>
          <div className="ml-4">
            <span className="text-sm">Bom dia</span>
            <p className="font-bold text-lg leading-none">Eduardo!</p>
          </div>
        </div>
        <div className="hidden md:block">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="bg-[#1EBC6B] p-1 rounded-lg md:bg-[#13D174] flex gap-5">
          <svg
            width="30"
            height="30"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_116_5)">
              <path
                d="M48 88C52.4 88 56 84.4 56 80H40C40 84.4 43.6 88 48 88ZM72 64V44C72 31.72 65.48 21.44 54 18.72V16C54 12.68 51.32 10 48 10C44.68 10 42 12.68 42 16V18.72C30.56 21.44 24 31.68 24 44V64L16 72V76H80V72L72 64ZM64 68H32V44C32 34.08 38.04 26 48 26C57.96 26 64 34.08 64 44V68Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_116_5">
                <rect width="96" height="96" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="28"
            height="30"
            viewBox="0 0 78 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M68.72 43.92C68.88 42.64 69 41.36 69 40C69 38.64 68.88 37.36 68.72 36.08L77.16 29.48C77.92 28.88 78.12 27.8 77.64 26.92L69.64 13.08C69.16 12.2 68.08 11.88 67.2 12.2L57.24 16.2C55.16 14.6 52.92 13.28 50.48 12.28L48.96 1.68C48.84 0.72 48 0 47 0H31C30 0 29.16 0.72 29.04 1.68L27.52 12.28C25.08 13.28 22.84 14.64 20.76 16.2L10.8 12.2C9.88003 11.84 8.84003 12.2 8.36003 13.08L0.360029 26.92C-0.159971 27.8 0.0800294 28.88 0.840029 29.48L9.28003 36.08C9.12003 37.36 9.00003 38.68 9.00003 40C9.00003 41.32 9.12003 42.64 9.28003 43.92L0.840029 50.52C0.0800294 51.12 -0.119971 52.2 0.360029 53.08L8.36003 66.92C8.84003 67.8 9.92003 68.12 10.8 67.8L20.76 63.8C22.84 65.4 25.08 66.72 27.52 67.72L29.04 78.32C29.16 79.28 30 80 31 80H47C48 80 48.84 79.28 48.96 78.32L50.48 67.72C52.92 66.72 55.16 65.36 57.24 63.8L67.2 67.8C68.12 68.16 69.16 67.8 69.64 66.92L77.64 53.08C78.12 52.2 77.92 51.12 77.16 50.52L68.72 43.92V43.92ZM39 54C31.28 54 25 47.72 25 40C25 32.28 31.28 26 39 26C46.72 26 53 32.28 53 40C53 47.72 46.72 54 39 54Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="bg-white -mt-5 shadow-lg mx-5 rounded-lg md:mt-5">
        <div className="p-7 text-gray-500 md:grid grid-cols-2 gap-8 hidden">
          <div className="flex flex-col justify-between">
            <div className="flex justify-between">
              <div>
                <span>Bom dia,</span>
                <p className="font-bold text-xl leading-none">
                  Eduardo Cardoso!
                </p>
              </div>
              <div className="flex gap-5 justify-between items-center border-l border-gray-200">
                <div className="pl-5 pb-3">
                  <span className="text-sm font-semibold text-gray-500">
                    Saldo geral
                  </span>
                  <p className="font-bold">
                    R$ <span className="text-black">12.320,39</span>
                  </p>
                </div>
                <div>EYE</div>
              </div>
            </div>
            <div className="flex gap-3 justify-between">
              <div className="bg-white shadow-xl py-5 px-20 text-center rounded-xl">
                <p>receita mensal</p>
                <span className="text-green-500 font-semibold text-xl">
                  +R$ 5.821,24
                </span>
              </div>
              <div className="bg-white shadow-xl py-5 px-20 text-center rounded-xl">
                <p>receita mensal</p>
                <span className="text-green-500 font-semibold text-xl">
                  +R$ 5.821,24
                </span>
              </div>
              <div className="bg-white shadow-xl py-5 px-20 text-center rounded-xl">
                <p>receita mensal</p>
                <span className="text-green-500 font-semibold text-xl">
                  +R$ 5.821,24
                </span>
              </div>
            </div>
          </div>
          <div className="border-l">
            <div className="ml-7">
              <h2 className="text-black font-semibold text-xl">
                Acesso rápido
              </h2>
              <div className="flex gap-5">
                <div className="bg-white p-3 shadow rounded-lg mt-7">
                  <svg
                    width="96"
                    height="96"
                    viewBox="0 0 96 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_126_10)">
                      <path
                        d="M48 8C25.92 8 8 25.92 8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8ZM48 80C30.36 80 16 65.64 16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80ZM28 44H68V52H28V44Z"
                        fill="#EF4444"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_126_10">
                        <rect width="96" height="96" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="uppercase text-black text-center">despesa</p>
                </div>
                <div className="bg-white p-3 shadow rounded-lg mt-7">
                  <svg
                    width="96"
                    height="96"
                    viewBox="0 0 96 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M48 8C25.956 8 8 25.956 8 48C8 70.044 25.956 88 48 88C70.044 88 88 70.044 88 48C88 25.956 70.044 8 48 8ZM48 16C65.7205 16 80 30.2795 80 48C80 65.7205 65.7205 80 48 80C30.2795 80 16 65.7205 16 48C16 30.2795 30.2795 16 48 16ZM44 28V44H28V52H44V68H52V52H68V44H52V28H44Z"
                      fill="#1BD273"
                    />
                  </svg>

                  <p className="uppercase text-black text-center">receita</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg mt-7">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40 0C17.956 0 0 17.956 0 40C0 62.044 17.956 80 40 80C62.044 80 80 62.044 80 40C80 17.956 62.044 0 40 0ZM40 8C57.7205 8 72 22.2795 72 40C72 57.7205 57.7205 72 40 72C22.2795 72 8 57.7205 8 40C8 22.2795 22.2795 8 40 8ZM36 20V36H20V44H36V60H44V44H60V36H44V20H36Z"
                      fill="#A2A8AE"
                    />
                    <rect x="18" y="20" width="44" height="42" fill="white" />
                    <path
                      d="M59.4142 31.4142C60.1953 30.6332 60.1953 29.3668 59.4142 28.5858L46.6863 15.8579C45.9052 15.0768 44.6389 15.0768 43.8579 15.8579C43.0768 16.6389 43.0768 17.9052 43.8579 18.6863L55.1716 30L43.8579 41.3137C43.0768 42.0948 43.0768 43.3611 43.8579 44.1421C44.6389 44.9232 45.9052 44.9232 46.6863 44.1421L59.4142 31.4142ZM21 32H58V28H21V32Z"
                      fill="#A2A8AE"
                    />
                    <path
                      d="M19.5858 51.5858C18.8047 52.3668 18.8047 53.6332 19.5858 54.4142L32.3137 67.1421C33.0948 67.9232 34.3611 67.9232 35.1421 67.1421C35.9232 66.3611 35.9232 65.0948 35.1421 64.3137L23.8284 53L35.1421 41.6863C35.9232 40.9052 35.9232 39.6389 35.1421 38.8579C34.3611 38.0768 33.0948 38.0768 32.3137 38.8579L19.5858 51.5858ZM58 51H21V55H58V51Z"
                      fill="#A2A8AE"
                    />
                  </svg>

                  <p className="uppercase text-black text-center mt-2">
                    transf.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 md:hidden">
          <div className="w-1 h-12 rounded absolute bg-[#1AD174]"></div>
          <div className="flex justify-between items-center border-b border-gray-200">
            <div className="pl-5 pb-3">
              <span className="text-sm font-semibold text-gray-500">
                Saldo geral
              </span>
              <p className="font-bold">
                R$ <span>12.320,39</span>
              </p>
            </div>
            <div>EYE</div>
          </div>
          <div className="my-5 border-b border-gray-200">
            <p className="text-sm font-bold">Minhas contas</p>
            <div className="my-3 flex justify-between items-end">
              <div className="flex items-center gap-3">
                <div className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white">
                  cu
                </div>
                <div>
                  <p className="font-semibold">CuBank</p>
                  <p className="text-gray-400 font-semibold text-sm">
                    Conta corrente
                  </p>
                </div>
              </div>
              <span className="text-blue-500 font-bold">R$ 5,332,00</span>
            </div>
          </div>
          <button className="bg-[#CEFAE3] w-full text-primary font-semibold rounded px-5 py-2">
            Gerenciar contas
          </button>
        </div>
      </div>
      <div className="bg-white fixed w-screen h-14 bottom-0">
        <div className="flex justify-between items-center px-7 mt-2">
          <svg
            width="33"
            height="30"
            viewBox="0 0 53 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47 47H6C4.34315 47 3 45.6569 3 44V20.1731C3 19.1763 3.49508 18.2446 4.32115 17.6868L25.7959 3.18599C26.8487 2.47508 28.2351 2.50435 29.257 3.25906L48.7823 17.6796C49.5481 18.2452 50 19.1407 50 20.0928V44C50 45.6569 48.6569 47 47 47Z"
              stroke="#A2A8AE"
              stroke-width="5"
            />
          </svg>
          <svg
            width="25"
            height="35"
            viewBox="0 0 60 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M58.7678 20.7678C59.7441 19.7915 59.7441 18.2085 58.7678 17.2322L42.8579 1.32233C41.8816 0.34602 40.2986 0.34602 39.3223 1.32233C38.346 2.29864 38.346 3.88155 39.3223 4.85786L53.4645 19L39.3223 33.1421C38.346 34.1184 38.346 35.7014 39.3223 36.6777C40.2986 37.654 41.8816 37.654 42.8579 36.6777L58.7678 20.7678ZM3 21.5L57 21.5V16.5L3 16.5L3 21.5Z"
              fill="#A2A8AE"
            />
            <path
              d="M1.23223 52.7678C0.255919 51.7915 0.255919 50.2085 1.23223 49.2322L17.1421 33.3223C18.1184 32.346 19.7014 32.346 20.6777 33.3223C21.654 34.2986 21.654 35.8816 20.6777 36.8579L6.53553 51L20.6777 65.1421C21.654 66.1184 21.654 67.7014 20.6777 68.6777C19.7014 69.654 18.1184 69.654 17.1421 68.6777L1.23223 52.7678ZM57 53.5L3 53.5V48.5L57 48.5V53.5Z"
              fill="#A2A8AE"
            />
          </svg>
          <div className="bg-[#1AD274] px-5 py-2 rounded-full flex items-center justify-center">
            <svg
              width="17"
              height="18"
              viewBox="0 0 27 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="15.5"
                width="3"
                height="26.5"
                rx="1.5"
                transform="rotate(-90 0.5 15.5)"
                fill="white"
              />
              <rect
                x="12.25"
                y="0.75"
                width="3"
                height="26.5"
                rx="1.5"
                fill="white"
              />
            </svg>
          </div>
          <svg
            width="24"
            height="30"
            viewBox="0 0 44 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="16" width="8" height="34" rx="3" fill="#A2A8AE" />
            <rect x="18" width="8" height="50" rx="3" fill="#A2A8AE" />
            <rect x="36" y="34" width="8" height="16" rx="3" fill="#A2A8AE" />
          </svg>
          <svg
            width="37"
            height="37"
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_117_25)">
              <path
                d="M28.4762 4.75C15.3662 4.75 4.75 15.39 4.75 28.5C4.75 41.61 15.3662 52.25 28.4762 52.25C41.61 52.25 52.25 41.61 52.25 28.5C52.25 15.39 41.61 4.75 28.4762 4.75ZM36.1475 41.3012L28.5 36.6937L20.8525 41.3012C19.95 41.8475 18.8337 41.04 19.0712 40.0188L21.09 31.3262L14.3688 25.5075C13.585 24.8187 14.0125 23.5125 15.0575 23.4175L23.94 22.6575L27.4075 14.4638C27.8112 13.49 29.1888 13.49 29.5925 14.4638L33.06 22.6337L41.9425 23.3938C42.9875 23.4888 43.415 24.795 42.6075 25.4837L35.8862 31.3025L37.905 40.0188C38.1425 41.04 37.05 41.8475 36.1475 41.3012V41.3012Z"
                fill="#A2A8AE"
              />
            </g>
            <defs>
              <clipPath id="clip0_117_25">
                <rect width="57" height="57" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
