import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";


const Footer = () => {
  return (
    <footer className="flex flex-col text-gray-500 mt-5 border-t border-gray-100 ">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-4">
          <Image src="/logo.png" alt="logo" width={50} height={50} className="object-contain" />
          <p className="text-base text-gray-700">Power Digital Technology 2023<br/> All rights reserved &copy;</p>
        </div>

        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((link) => (
            <div key={link.title} className="flex flex-col gap-6 text-base min-w-[170px]">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer