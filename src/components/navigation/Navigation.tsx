import Image from 'next/image';
import Link from 'next/link';
import { discordURL, githubURLS } from '@/data/global.data';
import { navigationLinks } from '@/data/navigation.data';
import { NavigationLink } from '@/types/Navigation';
import discordIcon from '@/public/discord.svg';
import githubIcon from '@/public/github.svg';
import logo from '@/public/logo.png';
import { Scrollspy } from '@makotot/ghostui';
import { RefObject, useState } from 'react';

const Navigation = ({ sectionRefs }: { sectionRefs: RefObject<Element>[] }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <nav className="bg-jet-black text-white px-2 py-2 md:py-0 fixed w-full z-20 top-0 left-0">
      <div className="container flex flex-wrap items-center justify-between mx-auto max-w-screen-xl px-4">
        <Link href="/" className="flex items-center">
          <Image src={logo} width={36} height={36} alt="Meteor Logo" />
          <span className="ml-1 text-lg font-semibold">Meteor</span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-200 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
          </svg>
        </button>
        <div className="hidden md:flex">
          <Scrollspy sectionRefs={sectionRefs}>
            {({ currentElementIndexInViewport }) => (
              <div>
                <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 font-semibold">
                  {navigationLinks.map((item: NavigationLink, i) => {
                    return (
                      <li
                        key={item.label}
                        className={`block py-2 pl-3 pr-4 md:p-0 hover:text-persian-green-400 ${
                          currentElementIndexInViewport === i
                            ? `text-persian-green-400`
                            : ``
                        }`}
                      >
                        <Link href={item.link}>{item.label}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </Scrollspy>

          <div className="flex items-center">
            <Link href={discordURL} target="_blank">
              <Image
                src={discordIcon}
                alt="Meteor discord"
                width={23}
                height={23}
                className="ml-14 cursor-pointer hover:color-text-persian-green-400"
              />
            </Link>
            <Link href={githubURLS.launcher} target="_blank">
              <Image
                src={githubIcon}
                alt="Meteor github"
                width={23}
                height={23}
                className="ml-6 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
      {isMobileNavOpen && (
        <div className="md:hidden flex flex-col text-white mt-10">
          {navigationLinks.map((item: NavigationLink, i) => {
            return (
              <Link
                key={i}
                href={item.link}
                className={`text-xl py-4 px-8 border-b border-persian-green-900 ${
                  i === 0 ? `border-t` : ``
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={discordURL}
            target="_blank"
            className="py-4 pl-8 flex items-center text-xl border-b border-persian-green-900"
          >
            <Image
              src={discordIcon}
              alt="Meteor discord"
              width={23}
              height={23}
              className="mr-3 cursor-pointer"
            />
            {` `}
            Discord
          </Link>
          <Link
            href={githubURLS.launcher}
            target="_blank"
            className="py-4 pl-8 flex items-center text-xl border-b border-persian-green-900"
          >
            <Image
              src={githubIcon}
              alt="Meteor github"
              width={23}
              height={23}
              className="mr-3 cursor-pointer"
            />
            {` `}
            Github
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
