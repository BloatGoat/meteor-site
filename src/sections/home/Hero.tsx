import Image from 'next/image';
import Link from 'next/link';
import { discordURL, githubURLS } from '@/data/global.data';
import discordIcon from '@/public/discord.svg';
import { forwardRef } from 'react';

const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className="bg-hero text-white bg-cover" ref={ref}>
      <div className="grid max-w-screen-xl px-4 py-5 mx-auto pt-28 lg:pb-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-xl xl:text-4xl">
            METEOR-CLIENT<span className="text-persian-green-400">.COM</span>
          </h1>
          <p className="max-w-2xl mb-6 font-semibold lg:mb-8 md:text-lg lg:text-xl">
            Meteor is an open-source client for Old School Runescape
            <br />
            with{` `}
            <span className="text-persian-green-400">more functionality</span>
            {` `}
            and{` `}
            <span className="text-persian-green-400">less restrictions.</span>
          </p>
          <div className="flex">
            <Link href={githubURLS.launcherRelease} target="_blank">
              <button className="bg-persian-green-300 hover:bg-persian-green-400 text-black font-bold py-2 px-5 inline-flex items-center h-12 rounded">
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Download</span>
              </button>
            </Link>
            <Link href={discordURL} target="_blank">
              <button className="bg-discord hover:bg-discord-hover font-bold py-2 px-5 inline-flex items-center h-12 ml-5 rounded">
                <Image
                  src={discordIcon}
                  alt={`Meteor discord`}
                  height={20}
                  width={20}
                  className="mr-2"
                />
                <span>Join our discord</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});
HeroSection.displayName = `HeroSection`;

export default HeroSection;
