import Link from 'next/link';

const Logo: React.FCC = () => {
  return (
    <div>
      <Link href={'/'} passHref>
        Your Name
      </Link>
    </div>
  );
};

export default Logo;
