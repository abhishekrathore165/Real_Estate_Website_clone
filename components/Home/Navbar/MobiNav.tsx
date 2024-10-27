'use client'
import Link from "next/link"
import { navLinks } from "./Navbar"
import { CgClose } from "react-icons/cg"

type Props ={
  showNav:boolean,
  closeNav:()=>void
}

const MobiNav = ({showNav,closeNav}:Props) => {
  const navopen = showNav ? "translate-x-0":"translate-x-[-100%]";
  return (
    <div>

      <div className={`transform ${navopen} fixed transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}></div>

      <div className={`text-white ${navopen} transform transition-all duration-500 delay-300 fixed flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-[#c1205e] space-y-6 z-[10000]`}>
        {
          navLinks.map((item) => {
            return (
              <Link key={item.id} href={item.url}>
                <p className="font-medium text-[20px] ml-12 border-b-[1.5px] pb-1 w-fit border-white sm:text-[30px] hover:text-yellow-300">
                  {item.label}
                </p>
              </Link>
            )
          })
        }
        <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white" />
      </div>
    </div>
  )
}

export default MobiNav