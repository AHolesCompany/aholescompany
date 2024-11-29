import Image from 'next/image';
import logo from '/public/a-holes-company-logo-1000x1000.jpg';

export default function Logo() {
  return (
    <div className="flex items-center justify-center w-2/5 mb-12 text-black">
      <Image
        src={logo}
        width={300}
        height={300}
        className="relative"
        alt="**: A Holes Company logo"
        priority
        unoptimized
    />
    </div>
  );
}