import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-jet-black text-white">
      <div className="p-4 max-w-screen-xl mx-auto md:flex justify-between text-center">
        <div>
          © {new Date().getFullYear()} -&nbsp;
          <span className="text-persian-green-400 font-semibold">
            <Link href="/">Meteor</Link>
          </span>
          {` `}
          is not affiliated with jagex or runelite in any way.
        </div>
        <div>
          Made with <span className="text-persian-green-400">❤</span> by
          {` `}
          <Link href="https://github.com/BloatGoat">BloatGoat</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
